import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { colors, mq } from '../../tokens';

export default css`
  footer {
    background-color: ${colors.blue};
    color: white;
    padding-bottom: 4rem;
    padding-top: 1rem;
  }

  @media ${mq.phone} {
    footer {
      padding-bottom: 6rem;
      padding-top: 2rem;
    }
  }

  h4 {
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: 0.075rem;
    margin-bottom: 0;
  }

  @supports (font-variation-settings: normal) {
    .h4 {
      font-variation-settings: 'wght' 700;
      font-weight: inherit;
    }
  }

  @media ${mq.phone} {
    h4 {
      font-size: 1.5rem;
    }
  }

  .columns {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  ul.columns {
    width: 60%;
  }

  .column {
    display: flex;
    flex-direction: column;
    font-size: 0.8rem;
    margin-top: 1.5rem;
    width: 50%;
  }

  @media ${mq.phone} {
    .column {
      font-size: 1.125rem;
      margin-top: 2rem;
    }
  }

  .column--logo {
    width: 40%;
  }

  .label {
    display: block;
    font-weight: 700;
    margin-bottom: 0.3rem;
  }

  @supports (font-variation-settings: normal) {
    .label {
      font-variation-settings: 'wght' 700;
      font-weight: inherit;
    }
  }

  .link {
    font-weight: 400;
  }

  @supports (font-variation-settings: normal) {
    .link {
      font-variation-settings: 'wght' 400;
      font-weight: inherit;
    }
  }

  a {
    color: currentColor;
    text-decoration: none;
  }

  a:hover,
  a:focus {
    text-decoration: underline;
  }
`;

export const logoStyles = css.resolve`
  svg {
    color: white;
    height: 4rem;
    width: 6rem;
  }

  @media ${mq.phone} {
    svg {
      height: 8rem;
      width: 10rem;
    }
  }

  path {
    fill: white;
  }
`;
