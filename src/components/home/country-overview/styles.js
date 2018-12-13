import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { colors, mq } from '../../../tokens';

export default css`
  .intro,
  .outro {
    font-size: 1.2rem;
    font-weight: 600;
    line-height: 1.2;
    letter-spacing: -0.015rem;
    margin-bottom: 0;
    margin-top: 0;
  }

  @supports (font-variation-settings: normal) {
    .intro,
    .outro {
      font-variation-settings: 'wght' 600;
      font-weight: inherit;
    }
  }

  @media ${mq.phone} {
    .intro,
    .outro {
      font-size: 1.5rem;
      line-height: 1.3;
    }
  }

  @media ${mq.tablet} {
    .intro,
    .outro {
      font-size: 1.875rem;
    }
  }

  .outro {
    margin-top: 1.75rem;
  }

  @media ${mq.phone} {
    .outro {
      margin-top: 3rem;
    }
  }

  .countries-title {
    display: block;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.05rem;
    margin-bottom: 1.5rem;
    margin-top: 2rem;
    text-align: center;
    text-transform: uppercase;
  }

  @supports (font-variation-settings: normal) {
    .countries-title {
      font-variation-settings: 'wght' 600;
      font-weight: inherit;
    }
  }

  .countries {
    display: flex;
    flex-direction: row;
    list-style: none;
    margin: 0 0.5rem 0 -0.5rem;
    padding: 0;
  }

  @media ${mq.tablet} {
    .countries {
      margin-bottom: 1.5rem;
      margin-left: -2.5rem;
    }
  }

  .country-container {
    flex: 1 0 auto;
    text-align: center;
    width: 33.3333%;
  }

  .country-container + .country-container {
    margin-left: 0.5rem;
  }

  .country-title {
    color: ${colors.blue};
    display: inline-block;
    font-size: 0.8rem;
    letter-spacing: 0.05rem;
    margin-top: 0.75rem;
    text-transform: uppercase;
  }

  @media ${mq.tablet} {
    .country-title {
      color: ${colors.beige};
      font-size: 0.7rem;
      left: 50%;
      margin-top: 0;
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }

  @media ${mq.tablet} {
    .country-container--for-ukraine .country-title {
      margin-left: 1.5rem;
      margin-top: -0.5rem;
    }

    .country-container--for-egypt .country-title {
      margin-left: -0.75rem;
    }

    .country-container--for-tunisia .country-title {
      margin-left: -1.05rem;
    }
  }
`;

export const countryStyles = css.resolve`
  a {
    color: ${colors.blue};
    display: block;
    position: relative;
    text-align: center;
    text-decoration: none;
    transition: transform 150ms ease;
  }

  a:hover,
  a:focus {
    transform: scale(1.08);
  }

  @media ${mq.phone} {
    a {
      padding: 1rem 1.5rem;
    }
  }
`;

export const countryShapeStyles = css.resolve`
  svg {
    fill: currentColor;
  }
`;
