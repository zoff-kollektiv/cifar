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

  form {
    flex: 1 0 auto;
    margin-right: 1rem;
    max-width: 20rem;
    width: 40%;
  }

  @media ${mq.tablet} {
    form {
      max-width: 28rem;
    }
  }

  .filter {
    align-items: center;
    background-color: ${colors.blue};
    color: white;
    display: flex;
    flex-direction: row;
    position: relative;
    width: 100%;
  }

  .filter-label {
    color: ${colors.blue};
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.025rem;
    line-height: 1;
    margin-right: 0.5rem;
    position: absolute;
    text-transform: uppercase;
    top: -1rem;
    vertical-align: middle;
    white-space: nowrap;
  }

  @media ${mq.tablet} {
    .filter-label {
      color: white;
      font-size: 1rem;
      margin-left: 2rem;
      position: static;
    }
  }

  .filter-input {
    border: 2px solid ${colors.blue};
    color ${colors.blue};
    font-size: 1rem;
    font-weight: 600;
    padding: 0.2rem 0.5rem;
    vertical-align: middle;
    width: 100%;
  }

  @media ${mq.phone} {
    .filter-input {
      font-size: 1.1rem;
      padding: 0.3rem 0.5rem;
    }
  }

  .view {
    margin-right: 0.5rem;
    margin-top: -1.1rem;
    order: -1;
  }

  @media ${mq.phone} {
    .view {
      align-self: flex-end;
      margin-left: auto;
      margin-right: 0;
      margin-top: 0;
      order: inherit;
    }
  }

  .view-label {
    color: ${colors.blue};
    display: block;
    font-size: 0.7rem;
    font-weight: 600;
    margin-bottom: 0.2rem;
    margin-right: 0.25rem;
    text-transform: uppercase;
  }

  @media ${mq.phone} {
    .view-label {
      display: inline-block;
      font-size: 0.8rem;
      margin-bottom: 0;
      margin-right: 0.5rem;
    }
  }
`;

const viewSwitchCommon = `
  border: 2px solid ${colors.blue};
  border-radius: 3px;
  display: inline-block;
  font-size: 0.75rem;
  margin-right: 0.25rem;
  padding: 0.35rem 0.5rem 0.3rem 0.5rem;
  text-decoration: none;
`;

export const viewSwitchStyles = css.resolve`
  a {
    ${viewSwitchCommon}
    background-color: ${colors.blue};
    color: white;
  }

  @media ${mq.phone} {
    a {
      margin-right: 0.5rem;
      padding: 0.6rem 0.65rem 0.4rem 0.65rem;
    }
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

  @media ${mq.phone} {
    span {
      margin-right: 0.5rem;
      padding: 0.6rem 0.65rem 0.4rem 0.65rem;
    }
  }
`;

export const viewIconStyles = css.resolve`
  svg {
    display: none;
    height: 0.85rem;
    margin-right: 0.2rem;
    position: relative;
    top: -0.05rem;
    vertical-align: middle;
    width: 0.85rem;
  }

  @media ${mq.phone} {
    svg {
      display: inline;
      height: 1.2rem;
      margin-right: 0.4rem;
      width: 1.2rem;
    }
  }
`;
