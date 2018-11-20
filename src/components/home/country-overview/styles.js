import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { colors } from '../../../tokens';

export default css`
  .intro,
  .outro {
    font-size: 1.875rem;
    font-weight: 600;
    line-height: 1.3;
    margin-bottom: 0;
    margin-top: 0;
  }

  .outro {
    margin-top: 3rem;
  }

  .countries {
    display: flex;
    flex-direction: row;
    list-style: none;
    margin: 3rem 0 1.5rem -2.5rem;
    padding: 0;
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
    color: ${colors.beige};
    font-size: 0.875rem;
    left: 50%;
    position: absolute;
    text-decoration: underline;
    text-transform: uppercase;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .country-container--for-ukraine .country-title {
    margin-left: 1.5rem;
  }

  .country-container--for-tunesia .country-title {
    margin-left: -0.5rem;
    transform: translate(-50%, -50%) rotate(-90deg);
  }
`;

export const countryStyles = css.resolve`
  a {
    color: ${colors.blue};
    display: block;
    padding: 1rem 1.5rem;
    position: relative;
    text-align: center;
    text-decoration: none;
  }
`;

export const countryShapeStyles = css.resolve`
  svg {
    fill: currentColor;
  }
`;
