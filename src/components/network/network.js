import * as d3 from 'd3';

import { nodes, links } from './data';

const render = root => {
  const svg = d3.select(root).append('svg');
  const height = 400;
  const width = 800;

  svg.attr('width', width).attr('height', height);
  svg.append('g').attr('class', 'nodes');
  svg.append('g').attr('class', 'links');

  const updateLinks = () => {
    const el = svg.select('.links')
      .selectAll('line')
      .data(links);

    el.enter()
      .append('line')
      .merge(el)
      .attr('x1', d => d.source.x)
      .attr('y1', d => d.source.y)
      .attr('x2', d => d.target.x)
      .attr('y2', d => d.target.y)

    el.exit().remove();
  };

  const updateNodes = () => {
    const el = svg.select('.nodes')
      .selectAll('text')
      .data(nodes);

    el.enter()
      .append('text')
      .text(d => d.name)
      .merge(el)
      .attr('x', d => d.x)
      .attr('y', d => d.y)
      .attr('dy', 10);

    el.exit().remove()
  };

  const ticked = () => {
    updateLinks();
    updateNodes();
  };

  d3.forceSimulation(nodes)
    .force('charge', d3.forceManyBody().strength(-100))
    .force('center', d3.forceCenter(width / 2, height / 2))
    .force('link', d3.forceLink().links(links))
    .on('tick', ticked);

  return svg;
};

export default render;
