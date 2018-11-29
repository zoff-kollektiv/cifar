import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { colors } from '../../tokens';

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
  }

  .filter-label {
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 0.025rem;
    line-height: 1;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    text-transform: uppercase;
    vertical-align: middle;
  }

  .filter-input {
    border: 3px solid ${colors.blue};
    font-size: 1.4rem;
    vertical-align: middle;
    width: 12rem;
  }

  .filter-submit {
    background-color: ${colors.blue};
    border: none;
    border-radius: 2px;
    color: white;
    display: inline-block;
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 0.05rem;
    line-height: 1;
    margin-left: 0.5rem;
    padding: 0.6rem 1.5rem;
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
  border-radius: 3px;
  display: inline-block;
  font-size: 0.8rem;
  margin-right: 0.5rem;
  padding: 0.5rem 1rem;
  text-decoration: none;
`;

export const viewSwitchStyles = css.resolve`
  a {
    ${viewSwitchCommon}
    background-color: ${colors.blue};
    border: 1px solid transparent;
    color: white;
  }

  a:hover,
  a:focus {
    text-decoration: underline;
  }
`;

export const viewSwitchActiveStyles = css.resolve`
  span {
    ${viewSwitchCommon}
    background-color: white;
    border: 1px solid ${colors.blue};
    color: ${colors.blue};
  }
`;
