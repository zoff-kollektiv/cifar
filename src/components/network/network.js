import * as d3 from 'd3';
import { navigate } from '@reach/router';
import createSlug from '../../lib/create-slug';
import findImageById from '../../lib/find-image-by-id';

const isRootPerson = person => !person.corruptionLink;

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

const drawPersons = (svg, data, { svgWidth }) => {
  const isLeft = posX => svgWidth / 2 > posX;

  const persons = svg
    .selectAll('.person')
    .data(data)
    .enter()
    .append('g')
    .attr('class', d => `person person--link-${d.corruptionLink}`)
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
    .attr('r', 70);

  persons
    .append('circle')
    .attr(
      'class',
      d => `person-circle ${isRootPerson(d) ? 'person-circle--is-root' : ''}`
    )
    .attr('r', d => (isRootPerson(d) ? 70 : 15));

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
    .attr('class', 'person-name')
    .attr('text-anchor', d => {
      if (isRootPerson(d)) {
        return 'middle';
      }

      return isLeft(d.x) ? 'end' : 'start';
    })
    .attr('y', d => {
      if (isRootPerson(d)) {
        return 87;
      }

      return -2;
    })
    .attr('x', d => {
      if (isRootPerson(d)) {
        return 0;
      }

      return isLeft(d.x) ? -1 * 23 : 23;
    });

  // role
  info
    .append('text')
    .text(d => d.identifyingInformation)
    .attr('class', 'person-role')
    .attr('text-anchor', d => {
      if (isRootPerson(d)) {
        return 'middle';
      }

      return isLeft(d.x) ? 'end' : 'start';
    })
    .attr('y', d => {
      if (isRootPerson(d)) {
        return 98;
      }

      return 10;
    })
    .attr('x', d => {
      if (isRootPerson(d)) {
        return 0;
      }

      return isLeft(d.x) ? -1 * 23 : 23;
    });

  return persons;
};

const drawConnections = (svg, links) => {
  const connections = svg
    .selectAll('.link')
    .data(links)
    .enter()
    .append('line')
    .attr('class', 'link')
    .attr('class', d => `link link--${d.source.corruptionLink}`)
    .attr('x1', d => d.source.x)
    .attr('y1', d => d.source.y)
    .attr('x2', d => d.target.x)
    .attr('y2', d => d.target.y);

  return connections;
};

const render = (root, data, images) => {
  if (!root) {
    return undefined;
  }

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
    .force('center', d3.forceCenter(width / 2, height / 2))
    .force(
      'collide',
      d3.forceCollide().radius(d => (isRootPerson(d) ? 100 : 60))
    )
    .force('link', d3.forceLink())
    .stop();

  simulation
    .force('link')
    .links(links)
    .distance(d => {
      switch (d.source.corruptionLink) {
        case 'family':
          return 20;
        case 'government':
          return 150;
        default:
          return 200;
      }
    });

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 500; ++i) {
    simulation.tick();
  }

  drawConnections(svg, links);
  drawPersons(svg, data, { svgWidth: width, svgHeight: height });

  return svg;
};

export default render;
