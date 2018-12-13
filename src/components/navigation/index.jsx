import Link from 'gatsby-link';
import React from 'react';

import styles, { titleStyles, navLinkStyles } from './styles';

export default () => (
  <header>
    <style jsx>{styles}</style>
    {titleStyles.styles}
    {navLinkStyles.styles}

    <Link to="/" className={titleStyles.className}>
      EU sanctions watch
    </Link>

    <nav>
      <Link
        to="/people/all/"
        getProps={({ isPartiallyCurrent }) =>
          isPartiallyCurrent ? { 'aria-current': 'partially' } : null
        }
        className={navLinkStyles.className}
      >
        People
      </Link>

      <Link to="/guidelines/" className={navLinkStyles.className}>
        Guidelines
      </Link>

      <Link to="/report/" className={navLinkStyles.className}>
        Report
      </Link>

      <Link to="/about/" className={navLinkStyles.className}>
        About
      </Link>
    </nav>
  </header>
);
