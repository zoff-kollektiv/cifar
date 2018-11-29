// eslint-disable-next-line no-unused-vars
import React from 'react';
import css from 'styled-jsx/css';

import { colors, mq } from '../../tokens';

export default css`
  nav {
    background-color: ${colors.beige};
    color: white;
    padding-top: 1rem;
  }

  @media ${mq.phone} {
    nav {
      padding-top: 2rem;
    }
  }

  ul {
    display: flex;
    flex-direction: row;

    list-style: none;
    margin-bottom: 0;
    margin-top: 0;
    padding-left: 0;
  }

  li {
    flex: 1 0 auto;
  }

  @media ${mq.phone} {
    li {
      flex-grow: 0;
    }
  }

  li + li {
    margin-left: 0.075rem;
  }

  @media ${mq.phone} {
    li + li {
      margin-left: 0.15rem;
    }
  }
`;

export const tabContainerStyles = css.resolve`
  div {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }

  @media ${mq.phone} {
    div {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }
  }
`;

export const tabStyles = css.resolve`
  a {
    background-color: ${colors.blue};
    color: currentColor;
    display: block;
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 0.05rem;
    padding: 0.6rem 0.45rem;
    text-align: center;
    text-decoration: none;
    white-space: nowrap;
  }

  @media ${mq.phone} {
    a {
      font-size: 0.9rem;
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }
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
