import css from 'styled-jsx/css';

import { colors, mq } from '../../tokens';

export default css`
  .title {
    color: ${colors.blue};
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1.12;
    margin-bottom: 0;
    margin-top: 2rem;
  }

  @supports (font-variation-settings: normal) {
    .title {
      font-variation-settings: 'wght' 700;
      font-weight: inherit;
    }
  }

  @media ${mq.phone} {
    .title {
      font-size: 2.2rem;
    }
  }

  @media ${mq.tablet} {
    .title {
      font-size: 3.34rem;
      margin-top: 3.5rem;
    }
  }

  .intro {
    color: ${colors.blue};
    font-size: 1.125rem;
    font-weight: 500;
    letter-spacing: -0.01rem;
    line-height: 1.35;
    margin-bottom: 2rem;
  }

  @supports (font-variation-settings: normal) {
    .intro {
      font-variation-settings: 'wght' 500;
      font-weight: inherit;
    }
  }

  @media ${mq.phone} {
    .intro {
      font-size: 1.25rem;
      line-height: 1.45;
      margin-bottom: 3rem;
    }
  }

  @media ${mq.tablet} {
    .intro {
      font-size: 1.5rem;
      line-height: 1.58;
    }
  }

  :global(.intro a) {
    color: currentColor;
  }
`;
