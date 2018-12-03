import css from 'styled-jsx/css';

import { colors } from '../../tokens';

export default css`
  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li + li {
    margin-left: 1.5rem;
  }

  .title {
    color: ${colors.blue};
    font-size: 1.2rem;
    line-height: 1.3;
  }

  .title-link {
    color: currentColor;
    text-decoration: underline;
  }

  .title-link:hover,
  .title-link:focus {
    text-decoration: none;
  }

  .content-container {
    margin-top: 1.5rem;
  }

  .date {
    display: inline;
    font-size: 1rem;
    margin-right: 0.5rem;
  }

  .content {
    color: ${colors.blue};
    display: inline;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.4;
  }

  :global(.content > p) {
    display: inline;
    margin: 0;
    padding: 0;
  }

  :global(.content > p > a) {
    color: currentColor;
    margin-left: 0.5rem;
  }
`;
