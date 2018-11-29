import React from 'react';

import styles from './styles';

export default ({ className, children }) => (
  <div className={className}>
    <style jsx>{styles}</style>
    {children}
  </div>
);
