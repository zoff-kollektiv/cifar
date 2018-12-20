import Helmet from 'react-helmet';
import React, { Fragment } from 'react';

import styles from './styles';

export default Wrapped => props => (
  <Fragment>
    <Helmet>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
    </Helmet>

    <style jsx>{styles}</style>

    <Wrapped {...props} />
  </Fragment>
);
