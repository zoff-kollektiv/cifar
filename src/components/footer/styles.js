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
    flex-direction: column;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  @media ${mq.phone} {
    .columns {
      flex-direction: row;
    }

    ul.columns {
      width: 60%;
    }
  }

  .column {
    display: flex;
    flex-direction: column;
    font-size: 0.8rem;
    width: 100%;
  }

  @media ${mq.phone} {
    .column {
      font-size: 1.125rem;
      width: 50%;
    }

    .column--logo {
      width: 40%;
    }
  }

  .label {
    align-self: flex-start;
    font-weight: 700;
    margin-bottom: 0.3rem;
    margin-top: 1.5rem;
  }

  @media ${mq.phone} {
    .label {
      margin-top: 2rem;
    }
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

  .link + .link {
    margin-left: 0.5rem;
  }

  a {
    color: currentColor;
    text-decoration: none;
  }

  a:hover,
  a:focus {
    text-decoration: underline;
  }

  .social-container {
    margin-top: 0.5rem;
  }
`;

export const logoStyles = css.resolve`
  svg {
    color: white;
    height: 4rem;
    margin-top: 1.5rem;
    width: 6rem;
  }

  @media ${mq.phone} {
    svg {
      height: 8rem;
      margin-top: 2rem;
      width: 10rem;
    }
  }

  path {
    fill: white;
  }
`;

export const socialStyles = css.resolve`
  svg {
    height: 1.25rem;
    vertical-align: middle;
    width: 1.25rem;
  }

  @media ${mq.phone} {
    svg {
      height: 1.5rem;
      width: 1.5rem;
    }
  }
`;
