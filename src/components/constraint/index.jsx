import React from 'react';

import styles from './styles';

export default ({ children }) => (
  <div>
    <style jsx>{styles}</style>
    {children}
  </div>
);
