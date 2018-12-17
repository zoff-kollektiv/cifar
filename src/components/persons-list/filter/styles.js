import css from 'styled-jsx/css';

import { colors, mq } from '../../../tokens';

export default css`
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
    font-size: 0.65rem;
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

  @supports (font-variation-settings: normal) {
    .filter-label {
      font-variation-settings: 'wght' 600;
      font-weight: inherit;
    }
  }

  @media ${mq.tablet} {
    .filter-label {
      color: white;
      font-size: 1rem;
      margin-left: 0.5rem;
      position: static;
    }
  }

  .filter-input {
    background: white;
    border: 2px solid ${colors.blue};
    border-radius: 0;
    color ${colors.blue};
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    margin: 0;
    padding: 0.2rem 0.5rem;
    vertical-align: middle;
    width: 100%;
  }

  @supports (font-variation-settings: normal) {
    .filter-input {
      font-variation-settings: 'wght' 600;
      font-weight: inherit;
    }
  }

  @media ${mq.phone} {
    .filter-input {
      font-size: 1.1rem;
      padding: 0.3rem 0.5rem;
    }
  }
`;
