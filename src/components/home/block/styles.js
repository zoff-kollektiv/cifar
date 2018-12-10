import css from 'styled-jsx/css';

import { colors, mq } from '../../../tokens';

export default css`
  .block {
    background-color: ${colors.beige};
    color: ${colors.blue};
    font-size: 1.25rem;
    line-height: 1.4;
    padding-bottom: 2rem;
    padding-top: 1rem;
  }

  @media ${mq.tablet} {
    .block {
      padding-bottom: 4rem;
      padding-top: 3rem;
    }
  }

  .block.block--has-theme-white {
    background-color: white;
  }

  .title {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.2;
  }

  @supports (font-variation-settings: normal) {
    .title {
      font-variation-settings: 'wght' 700;
      font-weight: inherit;
    }
  }

  @media ${mq.phone} {
    .title {
      font-size: 1.8rem;
    }
  }

  @media ${mq.tablet} {
    .title {
      font-size: 2.6rem;
    }
  }
`;
