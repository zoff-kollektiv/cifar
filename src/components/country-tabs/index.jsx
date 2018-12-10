import Link from 'gatsby-link';
import React from 'react';

import Constraint from '../constraint';

import createSlug from '../../lib/create-slug';
import styles, {
  tabContainerStyles,
  tabStyles,
  tabStylesActive
} from './styles';

export default ({ tabs }) => (
  <nav className="country-tabs">
    <style jsx>{styles}</style>
    {tabStyles.styles}
    {tabStylesActive.styles}
    {tabContainerStyles.styles}

    <Constraint className={tabContainerStyles.className}>
      <ul>
        {tabs.map(({ node: { frontmatter: { slug, title } } }) => (
          <li key={title}>
            <Link
              to={`/persons/${createSlug(slug || title)}/`}
              className={`${tabStyles.className} ${tabStylesActive.className}`}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </Constraint>
  </nav>
);
