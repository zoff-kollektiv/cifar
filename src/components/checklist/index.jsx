import React from 'react';

import styles from './styles';

export default ({ title, items }) => (
  <div>
    <style jsx>{styles}</style>

    <h3>{title}</h3>

    <ul>
      {items.map(itemTitle => (
        <li>{itemTitle}</li>
      ))}
    </ul>
  </div>
);
