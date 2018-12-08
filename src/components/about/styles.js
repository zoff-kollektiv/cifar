import css from 'styled-jsx/css';

import { colors, mq } from '../../tokens';

export default css`
  .about {
    color: ${colors.blue};
    font-size: 1.15rem;
    line-height: 1.35;
    padding-bottom: 3rem;
    padding-top: 3rem;
  }

  @media ${mq.phone} {
    .about {
      font-size: 1.5rem;
      line-height: 1.45;
      padding-bottom: 8rem;
      padding-top: 6rem;
    }
  }

  .title {
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 0.5rem;
    margin-top: 0;
  }

  @media ${mq.phone} {
    .title {
      font-size: 2.43rem;
    }
  }

  .about-content {
    letter-spacing: -0.01rem;
  }
`;
