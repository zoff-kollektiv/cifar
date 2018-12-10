import React from 'react';

import Constraint from '../../constraint';

import styles from './styles';

export default ({ children, theme = 'beige', title, ...rest }) => (
  <section className={`block block--has-theme-${theme}`} {...rest}>
    <style jsx>{styles}</style>

    <Constraint>
      {title && <h2 className="title">{title}</h2>}
      {children}
    </Constraint>
  </section>
);
