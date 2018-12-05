import React from 'react';

import CheckIcon from '../../static/check.svg';

import styles, { checkIconStyles } from './styles';

export default ({ title, items }) => (
  <div>
    <style jsx>{styles}</style>
    {checkIconStyles.styles}

    <h3>{title}</h3>

    <ul>
      {items.map(itemTitle => (
        <li>
          <CheckIcon className={checkIconStyles.className} />
          {itemTitle}
        </li>
      ))}
    </ul>
  </div>
);
