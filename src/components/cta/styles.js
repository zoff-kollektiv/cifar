import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { colors } from '../../tokens';

export default css`
  div {
    text-align: center;
  }
`;

export const linkStyles = css.resolve`
  a {
    background-color: ${colors.blue};
    border-radius: 0.25rem;
    color: white;
    display: inline-block;
    margin-top: 2.5rem;
    padding: 0.75rem 2rem;
    text-decoration: none;
  }
`;
