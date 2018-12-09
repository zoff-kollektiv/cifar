import css from 'styled-jsx/css';

import { colors, mq } from '../../tokens';

export default css`
  ul {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  @media ${mq.tablet} {
    ul {
      flex-direction: row;
    }
  }

  li + li {
    margin-top: 1rem;
  }

  @media ${mq.tablet} {
    li + li {
      margin-left: 1.5rem;
      margin-top: 0;
    }
  }

  .title {
    color: ${colors.blue};
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 1.3;
  }

  @supports (font-variation-settings: normal) {
    .title {
      font-variation-settings: 'wght' 700;
      font-weight: inherit;
    }
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
    margin-top: 1rem;
  }

  @media ${mq.tablet} {
    .content-container {
      margin-top: 2rem;
    }
  }

  .date {
    display: inline;
    font-size: 0.95rem;
    font-weight: 900;
    margin-right: 0.25rem;
  }

  @supports (font-variation-settings: normal) {
    .date {
      font-variation-settings: 'wght' 900;
      font-weight: inherit;
    }
  }

  .content {
    color: ${colors.blue};
    display: inline;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.4;
  }

  @supports (font-variation-settings: normal) {
    .content {
      font-variation-settings: 'wght' 400;
      font-weight: inherit;
    }
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
