import Helmet from 'react-helmet';
import React, { Fragment } from 'react';

import styles from './styles';

export default Wrapped => props => (
  <Fragment>
    <Helmet>
      <link rel="icon" type="image/jpeg" href="/favicon.jpg" />
    </Helmet>

    <style jsx>{styles}</style>

    <Wrapped {...props} />
  </Fragment>
);
