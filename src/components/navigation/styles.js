import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { colors, mq } from '../../tokens';

export default css`
  header {
    align-items: center;
    background-color: ${colors.beige};
    color: ${colors.blue};
    display: flex;
    flex-direction: column;
    padding: 0.7rem 1.5rem;
    position: sticky;
    top: 0;
    z-index: 100;
  }

  @media ${mq.phone} {
    header {
      flex-direction: row;
    }
  }

  @media ${mq.tablet} {
    header {
      padding-left: 2.5rem;
      padding-right: 2.5rem;
      position: static;
    }
  }

  nav {
    display: flex;
    flex-direction: row;
    font-size: 0;
    margin-top: 0.3rem;
  }

  @media ${mq.phone} {
    nav {
      align-self: flex-end;
      margin-left: auto;
      margin-top: 0;
    }
  }
`;

export const navLinkStyles = css.resolve`
  a {
    color: currentColor;
    font-size: 0.85rem;
    font-weight: 600;
    text-decoration: none;
  }

  @supports (font-variation-settings: normal) {
    a {
      font-variation-settings: 'wght' 600;
      font-weight: inherit;
    }
  }

  @media ${mq.phone} {
    a {
      font-size: 0.9rem;
    }
  }

  @media ${mq.tablet} {
    a {
      font-size: 1rem;
    }
  }

  a[aria-current],
  a:hover,
  a:focus {
    text-decoration: underline;
  }

  a + a {
    margin-left: 1rem;
  }

  @media ${mq.phone} {
    a + a {
      margin-left: 0.85rem;
    }
  }

  @media ${mq.tablet} {
    a + a {
      margin-left: 1.25rem;
    }
  }
`;

export const titleStyles = css.resolve`
  a {
    color: currentColor;
    font-size: 0.95rem;
    font-weight: 700;
    letter-spacing: 0.05rem;
    text-decoration: none;
    text-transform: uppercase;
    white-space: nowrap;
  }

  @supports (font-variation-settings: normal) {
    a {
      font-variation-settings: 'wght' 700;
      font-weight: inherit;
    }
  }

  @media ${mq.phone} {
    a {
      font-size: 0.9rem;
    }

    @supports (font-variation-settings: normal) {
      a {
        font-variation-settings: 'wght' 600;
        font-weight: inherit;
      }
    }
  }

  @media ${mq.tablet} {
    a {
      font-size: 1rem;
    }
  }
`;
