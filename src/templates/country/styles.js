import css from 'styled-jsx/css';

import { colors, mq } from '../../tokens';

export default css`
  .title {
    color: ${colors.blue};
    font-size: 2.2rem;
    font-weight: 700;
    line-height: 1.12;
    margin-bottom: 0;
    margin-top: 3.5rem;
  }

  @media ${mq.tablet} {
    .title {
      font-size: 3.34rem;
    }
  }

  .intro {
    color: ${colors.blue};
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.45;
    margin-bottom: 3rem;
  }

  @media ${mq.tablet} {
    .intro {
      font-size: 1.5rem;
      line-height: 1.58;
    }
  }
`;
