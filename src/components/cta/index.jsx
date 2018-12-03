import Link from 'gatsby-link';
import React from 'react';

import styles, { linkStyles } from './styles';

export default ({ href, label, theme = 'dark' }) => (
  <div>
    <style jsx>{styles}</style>
    {linkStyles.styles}

    <Link
      className={`button button--theme-${theme} ${linkStyles.className}`}
      to={href}
    >
      {label}
    </Link>
  </div>
);
