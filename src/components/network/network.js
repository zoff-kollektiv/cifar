import * as d3 from 'd3';
import { navigate } from '@reach/router';
import createSlug from '../../lib/create-slug';
import findImageById from '../../lib/find-image-by-id';

const isRootPerson = person => person.name === 'Hosni Mubarak';

const appendImage = (svg, data, images) => {
  const size = 180;

  svg
    .append('defs')
    .append('pattern')
    .attr('id', 'image')
    .attr('x', -0.5 * size)
    .attr('y', -0.5 * size)
    .attr('patternUnits', 'userSpaceOnUse')
    .attr('width', size)
    .attr('height', size)
    .append('image')
    .attr('x', 0)
    .attr('y', 0)
    .attr('width', size)
    .attr('height', size)
    .attr('xlink:href', () => {
      const { id } = data.find(_ => isRootPerson(_));
      const image = findImageById(images, id);
      return image && image.node.fluid.src;
    });
};

const drawPersons = (svg, data) => {
  const persons = svg
    .selectAll('.person')
    .data(data)
    .enter()
    .append('g')
    .attr('class', 'person')
    .attr('cx', d => d.x)
    .attr('cy', d => d.y)
    .attr('transform', ({ x, y }) => `translate(${x},${y})`)
    .on('click', ({ sanctionsCountry, name }) => {
      navigate(`/persons/${createSlug(sanctionsCountry)}/${createSlug(name)}/`);
    });

  // add a background-circle on the root person (for a background-color)
  persons
    .filter(d => isRootPerson(d))
    .append('circle')
    .attr('class', 'person-background-circle')
    .attr('r', d => (isRootPerson(d) ? 70 : 10));

  persons
    .append('circle')
    .attr(
      'class',
      d => `person-circle ${isRootPerson(d) ? 'person-circle--is-root' : ''}`
    )
    .attr('r', d => (isRootPerson(d) ? 70 : 10));

  const info = persons
    .append('g')
    .attr(
      'class',
      d => `person-info ${isRootPerson(d) ? 'person-info--for-root' : ''}`
    );

  // name
  info
    .append('text')
    .text(d => d.name)
    .attr('class', 'person-name');

  // role
  info
    .append('text')
    .text(d => d.identifyingInformation)
    .attr('class', 'person-role')
    .attr('y', 13);

  return persons;
};

const drawConnections = (svg, links) => {
  const connections = svg
    .selectAll('.connection')
    .data(links)
    .enter()
    .append('line')
    .attr('class', 'connection')
    .attr('class', d => `connection connection--${d.target.corruptionLink}`)
    .attr('x1', d => d.source.x)
    .attr('y1', d => d.source.y)
    .attr('x2', d => d.target.x)
    .attr('y2', d => d.target.y);

  return connections;
};

const render = (root, data, images) => {
  // eslint-disable-next-line no-param-reassign
  root.innerHTML = '';

  const svg = d3.select(root).append('svg');
  const { height, width } = root.getBoundingClientRect();
  const nodesById = d3.map();
  const rootPerson = data.find(_ => isRootPerson(_));

  const links = data
    .map(({ name }) => {
      if (rootPerson) {
        return {
          source: name,
          target: rootPerson.name
        };
      }

      return null;
    })
    .filter(Boolean);

  // setup links by name
  data.forEach(_ => nodesById.set(_.name, _));
  links.forEach(_ => {
    // eslint-disable-next-line no-param-reassign
    _.source = nodesById.get(_.source);
    // eslint-disable-next-line no-param-reassign
    _.target = nodesById.get(_.target);
  });

  svg
    .attr('viewBox', `0 0 ${width} ${height}`)
    .attr('preserveAspectRatio', 'xMidYMid meet');

  appendImage(svg, data, images);

  const simulation = d3
    .forceSimulation(data)
    .force('charge', d3.forceManyBody().strength(-100))
    .force('center', d3.forceCenter(width / 2, height / 2))
    .force(
      'collide',
      d3.forceCollide().radius(d => (isRootPerson(d) ? 80 : 55))
    )
    .force('link', d3.forceLink())
    .stop();

  simulation
    .force('link')
    .links(links)
    .distance(10);

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 300; ++i) {
    simulation.tick();
  }

  drawConnections(svg, links);
  drawPersons(svg, data);

  return svg;
};

export default render;
