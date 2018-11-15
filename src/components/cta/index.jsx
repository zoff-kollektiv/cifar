import Link from 'gatsby-link';
import React from 'react';

import styles, { linkStyles } from './styles';

export default ({ href, label }) => (
  <div>
    <style jsx>{styles}</style>
    {linkStyles.styles}

    <Link className={linkStyles.className} to={href}>
      {label}
    </Link>
  </div>
);
