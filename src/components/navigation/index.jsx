import Link from 'gatsby-link';
import React from 'react';

import styles from './styles';

export default () => (
  <header>
    <style jsx>{styles}</style>

    <Link to="/" className="title">
      EU sanctions watch
    </Link>

    <nav>
      <Link
        to="/persons/all/"
        getProps={({ isPartiallyCurrent }) =>
          isPartiallyCurrent ? { 'aria-current': 'partially' } : null
        }
      >
        Persons
      </Link>
      <Link to="/report/">Report</Link>
    </nav>
  </header>
);
