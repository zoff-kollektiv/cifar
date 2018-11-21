import css from 'styled-jsx/css';

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
    margin-left: 2rem;
    margin-right: 0.5rem;
    text-transform: uppercase;
    vertical-align: middle;
  }

  .filter-input {
    border: 3px solid ${colors.blue};
    font-size: 1.4rem;
    vertical-align: middle;
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
`;
