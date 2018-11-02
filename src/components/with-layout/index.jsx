import React, { Fragment } from 'react';

import styles from './styles';

export default Wrapped => props => (
  <Fragment>
    <style jsx>{styles}</style>

    <Wrapped {...props} />
  </Fragment>
);
