import css from 'styled-jsx/css';

import { colors, mq } from '../../../tokens';

export default css`
  section {
    background-color: ${colors.beige};
    color: ${colors.blue};
    padding-bottom: 2rem;
    padding-top: 1rem;
  }

  @media ${mq.tablet} {
    section {
      padding-bottom: 4rem;
      padding-top: 3rem;
    }
  }

  section.has-theme--white {
    background-color: white;
  }

  .title {
    font-size: 1.5rem;
    font-weight: 900;
    line-height: 1.2;
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
