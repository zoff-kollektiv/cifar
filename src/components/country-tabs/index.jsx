import Link from 'gatsby-link';
import React from 'react';

import createSlug from '../../lib/create-slug';
import styles from './styles';

export default ({ tabs }) => (
  <nav className="country-tabs">
    <style jsx>{styles}</style>

    <ul>
      <li>
        <Link to="/persons/all/">All</Link>
      </li>

      {tabs.map(({ node: { frontmatter: { title } } }) => (
        <li key={title}>
          <Link to={`/persons/${createSlug(title)}/`}>{title}</Link>
        </li>
      ))}
    </ul>
  </nav>
);
