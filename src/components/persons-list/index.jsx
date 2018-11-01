import React, { Fragment } from 'react';

import Network from '../network';
import Person from './person';

export default ({ persons }) => <Fragment>
  <Network />

  <ul>
    {persons && persons.map(({ node }) => <Person key={node.frontmatter.title} {...node.frontmatter} />)}
  </ul>;
</Fragment>
