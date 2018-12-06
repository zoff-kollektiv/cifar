import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { colors, mq } from '../../tokens';

export default css`
  .person-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    list-style: none;
    margin-bottom: 5rem;
    margin-top: 3.5rem;
    padding-left: 0;
  }

  .filter-container {
    align-items: flex-start;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }

  .filter {
    background-color: ${colors.blue};
    color: white;
    display: inline-block;
    position: relative;
  }

  .filter-label {
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.025rem;
    line-height: 1;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    text-transform: uppercase;
    vertical-align: middle;
  }

  @media ${mq.phone} {
    .filter-label {
      font-size: 1rem;
      margin-left: 2rem;
    }
  }

  .filter-input {
    border: 3px solid ${colors.blue};
    color ${colors.blue};
    font-size: 1rem;
    font-weight: 600;
    padding: 0.3rem 0.5rem;
    vertical-align: middle;
    width: 10rem;
  }

  @media ${mq.phone} {
    .filter-input {
      font-size: 1.1rem;
      width: 12rem;
    }
  }

  .view {
    align-self: flex-end;
    margin-left: auto;
  }

  .view-label {
    color: ${colors.blue};
    font-size: 0.8rem;
    font-weight: 600;
    margin-right: 0.5rem;
    text-transform: uppercase;
  }
`;

const viewSwitchCommon = `
  border: 2px solid ${colors.blue};
  border-radius: 3px;
  display: inline-block;
  font-size: 0.75rem;
  margin-right: 0.5rem;
  padding: 0.6rem 0.65rem 0.4rem 0.65rem;
  text-decoration: none;
`;

export const viewSwitchStyles = css.resolve`
  a {
    ${viewSwitchCommon}
    background-color: ${colors.blue};
    color: white;
  }

  a:hover,
  a:focus {
    background-color: white;
    color: ${colors.blue};
  }
`;

export const viewSwitchActiveStyles = css.resolve`
  span {
    ${viewSwitchCommon}
    background-color: white;
    color: ${colors.blue};
  }
`;

export const viewIconStyles = css.resolve`
  svg {
    height: 1.2rem;
    margin-right: 0.4rem;
    position: relative;
    top: -0.05rem;
    vertical-align: middle;
    width: 1.2rem;
  }
`;
