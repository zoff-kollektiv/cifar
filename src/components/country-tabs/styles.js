// eslint-disable-next-line no-unused-vars
import React from 'react';
import css from 'styled-jsx/css';

import { colors } from '../../tokens';

export default css`
  nav {
    background-color: ${colors.beige};
    color: white;
    padding-top: 2rem;
  }

  ul {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    list-style: none;
    margin-bottom: 0;
    margin-top: 0;
    padding-left: 0;
  }
`;

export const tabStyles = css.resolve`
  a {
    background-color: ${colors.blue};
    color: currentColor;
    display: block;
    padding: 0.65rem 3.5rem;
    text-decoration: none;
  }
`;

export const tabStylesActive = css.resolve`
  a[aria-current] {
    background-color: white;
    color: ${colors.blue};
  }
`;
