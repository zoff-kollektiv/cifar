import React from 'react';

import Constraint from '../../constraint';

import styles from './styles';

export default ({ children, theme = 'beige', title }) => (
  <section className={`has-theme--${theme}`}>
    <style jsx>{styles}</style>

    <Constraint>
      <h2 className="title">{title}</h2>
      {children}
    </Constraint>
  </section>
);
