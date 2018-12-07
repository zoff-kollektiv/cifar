import * as d3 from 'd3';
import { navigate } from '@reach/router';
import createSlug from '../../lib/create-slug';
import findImageById from '../../lib/find-image-by-id';

const personInRadiusOfMiddle = (x, y, cx, cy, radius) =>
  (x - cx) * (x - cx) + (y - cy) * (y - cy) <= radius * radius;

const isRootPerson = person => !person.corruptionLink;

const getWindowWidth = () =>
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

let ROOT_PERSON_RADIUS = 45;
let PERSON_RADIUS = 7;

let LENGTH_FAMILY = 20;
let LENGTH_GOVERMENT = 90;
let LENGTH_DEFAULT = 120;

const appendImage = (svg, data, images) => {
  const size = ROOT_PERSON_RADIUS * 2;

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
    .attr('r', ROOT_PERSON_RADIUS);

  persons
    .append('circle')
    .attr(
      'class',
      d => `person-circle ${isRootPerson(d) ? 'person-circle--is-root' : ''}`
    )
    .attr('r', d => (isRootPerson(d) ? ROOT_PERSON_RADIUS : PERSON_RADIUS));

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
        return ROOT_PERSON_RADIUS * 1.24;
      }

      return -2;
    })
    .attr('x', d => {
      if (isRootPerson(d)) {
        return 0;
      }

      const x = PERSON_RADIUS * 1.3;

      return isLeft(d.x) ? -1 * x : x;
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
        return ROOT_PERSON_RADIUS * 1.4;
      }

      return 10;
    })
    .attr('x', d => {
      if (isRootPerson(d)) {
        return 0;
      }

      const x = PERSON_RADIUS * 1.3;

      return isLeft(d.x) ? -1 * x : x;
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
    return null;
  }

  // eslint-disable-next-line no-param-reassign
  root.innerHTML = '';

  if (getWindowWidth() > 500) {
    ROOT_PERSON_RADIUS = 65;
    PERSON_RADIUS = 12;

    LENGTH_FAMILY = 15;
    LENGTH_GOVERMENT = 120;
    LENGTH_DEFAULT = 120;
  }

  if (getWindowWidth() > 1000) {
    ROOT_PERSON_RADIUS = 65;
    PERSON_RADIUS = 14;

    LENGTH_FAMILY = 30;
    LENGTH_GOVERMENT = 140;
    LENGTH_DEFAULT = 180;
  }

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

  const simulation = d3
    .forceSimulation(data)
    .force('charge', d3.forceManyBody().strength(-100))
    .force('center', d3.forceCenter(width / 2, height / 2))
    .force(
      'collide',
      d3
        .forceCollide()
        .radius(d =>
          isRootPerson(d) ? ROOT_PERSON_RADIUS * 1.75 : PERSON_RADIUS * 1.2
        )
    )
    .force(
      'link',
      d3.forceLink(links).distance(d => {
        let value;
        const { x: tX, y: tY } = d.source;
        const shorterEdge = Math.min(width, height);
        let radius = 0.2;

        if (getWindowWidth() > 500) {
          radius = 0.5;
        }

        if (getWindowWidth() > 1000) {
          radius = 0.75;
        }

        switch (d.source.corruptionLink) {
          case 'family':
            value = LENGTH_FAMILY;
            break;
          case 'government':
            value = LENGTH_GOVERMENT;
            break;
          default:
            value = LENGTH_DEFAULT;
        }

        if (
          personInRadiusOfMiddle(
            tX,
            tY,
            width / 2,
            height / 2,
            (shorterEdge / 2) * radius
          )
        ) {
          value *= 1.6;
        } else {
          value *= 0.2;
        }

        return value;
      })
    )
    .stop();

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 300; ++i) {
    simulation.tick();
  }

  drawConnections(svg, links);
  drawPersons(svg, data, { svgWidth: width, svgHeight: height });

  appendImage(svg, data, images);

  return null;
};

export default render;
