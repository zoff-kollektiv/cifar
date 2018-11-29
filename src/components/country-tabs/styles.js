// eslint-disable-next-line no-unused-vars
import React from 'react';
import css from 'styled-jsx/css';

import { colors, mq } from '../../tokens';

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

  li + li {
    margin-left: 0.15rem;
  }
`;

export const tabStyles = css.resolve`
  a {
    background-color: ${colors.blue};
    color: currentColor;
    display: block;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.05rem;
    padding: 0.6rem 0.45rem;
    text-decoration: none;
    white-space: nowrap;
  }

  @media ${mq.tablet} {
    a {
      font-size: 1.125rem;
      letter-spacing: 0.075rem;
      padding-left: 2.5rem;
      padding-right: 2.5rem;
    }
  }

  a:not([aria-current]):hover,
  a:not([aria-current]):focus {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const tabStylesActive = css.resolve`
  a[aria-current] {
    background-color: white;
    color: ${colors.blue};
  }
`;
