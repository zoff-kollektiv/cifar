import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { colors } from '../../tokens';

export default css`
  a {
    align-items: center;
    background-color: ${colors.blue};
    border: 3px solid ${colors.blue};
    color: white;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    font-size: 0.9rem;
    font-weight: 600;
    margin: 2.75rem 0;
    padding: 1.35rem;
    text-decoration: none;
    text-transform: uppercase;
  }

  a:hover,
  a:focus {
    background-color: white;
    color: ${colors.blue};
  }
`;

export const downloadIconStyles = css.resolve`
  svg {
    height: 2.25rem;
    margin-right: 1.25rem;
    width: 2.25rem;
  }
`;
