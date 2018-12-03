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
  a {
    background-color: ${colors.blue};
    border: 2px solid ${colors.blue};
    border-radius: 0.25rem;
    color: white;
    display: inline-block;
    font-size: 0.95rem;
    margin-top: 1.5rem;
    padding: 0.6rem 1.25rem;
    text-decoration: none;
  }

  a:hover,
  a:focus {
    background-color: white;
    border-color: currentColor;
    color: ${colors.blue};
  }

  a:active {
    transform: translateY(2px);
  }

  @media ${mq.phone} {
    a {
      font-size: 1rem;
      margin-top: 2.5rem;
      padding: 0.75rem 2rem;
    }
  }
`;
