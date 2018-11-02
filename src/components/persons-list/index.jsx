import React, { Fragment } from 'react';

import Network from '../network';
import Person from './person';

import data from './data';

export default ({ persons }) => <Fragment>
  <Network data={data} />

  <ul>
    {persons && persons.map(({ node }) => <Person key={node.frontmatter.title} {...node.frontmatter} />)}
  </ul>;
</Fragment>
