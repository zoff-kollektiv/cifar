import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { colors, mq } from '../../tokens';

export default css`
  div {
    padding-bottom: 0.2rem;
    text-align: center;
  }
`;

export const linkStyles = css.resolve`
  .button {
    border-radius: 0.15rem;
    display: inline-block;
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.05rem;
    margin-top: 1.5rem;
    padding: 0.6rem 1.25rem;
    text-decoration: none;
    text-transform: uppercase;
    transition: transform 150ms ease;
  }

  @supports (font-variation-settings: normal) {
    .button {
      font-variation-settings: 'wght' 600;
      font-weight: inherit;
    }
  }

  @media ${mq.phone} {
    .button {
      font-size: 0.95rem;
      letter-spacing: 0.075rem;
      margin-top: 2.5rem;
      padding: 0.65rem 2rem;
    }
  }

  .button:active {
    transform: translateY(2px);
  }

  .button--theme-dark {
    background-color: ${colors.blue};
    border: 2px solid ${colors.blue};
    color: white;
  }

  .button:hover,
  .button:focus {
    transform: scale(1.02);
  }

  .button--theme-dark:hover,
  .button--theme-dark:focus {
    background-color: white;
    border-color: currentColor;
    color: ${colors.blue};
  }

  .button--theme-light {
    background-color: white;
    border: 2px solid white;
    color: ${colors.blue};
  }

  .button--theme-light:hover,
  .button--theme-light:focus {
    background-color: ${colors.blue};
    border-color: ${colors.blue};
    color: white;
  }
`;
