import React from 'react';

import Constraint from '../../constraint';

import styles from './styles';

export default ({ children, theme = 'beige' }) => (
  <section className={`has-theme--${theme}`}>
    <style jsx>{styles}</style>

    <Constraint>{children}</Constraint>
  </section>
);
