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
    margin-bottom: 0;
    margin-top: 0.5rem;
  }

  @media ${mq.phone} {
    .intro,
    .outro {
      font-size: 1.875rem;
      line-height: 1.3;
    }
  }

  .outro {
    margin-top: 2rem;
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
    margin-top: 0.75rem;
    text-transform: uppercase;
  }

  @media ${mq.tablet} {
    .country-title {
      color: ${colors.beige};
      font-size: 0.875rem;
      left: 50%;
      position: absolute;
      text-decoration: underline;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }

  @media ${mq.tablet} {
    .country-container--for-ukraine .country-title {
      margin-left: 1.5rem;
    }
  }

  @media ${mq.tablet} {
    .country-container--for-tunisia .country-title {
      margin-left: -0.5rem;
      transform: translate(-50%, -50%) rotate(-90deg);
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
