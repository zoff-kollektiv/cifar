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
    margin-top: 4rem;
  }

  .countries {
    display: flex;
    flex-direction: row;
    list-style: none;
    margin: 3rem 0 1.5rem 0;
    padding: 0;
  }

  .country-container {
    flex: 1 0 auto;
    text-align: center;
    width: 33.3333%;
  }

  .country-container + .country-container {
    margin-left: 1.5rem;
  }
`;

export const countryStyles = css.resolve`
  a {
    background-color: ${colors.blue};
    color: white;
    display: block;
    padding: 4rem 1.5rem;
    text-decoration: none;
  }
`;
