import css from 'styled-jsx/css';

import { colors, mq } from '../../tokens';

export default css`
  .report {
    color: ${colors.blue};
    font-size: 1.15rem;
    line-height: 1.35;
    padding-bottom: 3rem;
    padding-top: 3rem;
  }

  @media ${mq.phone} {
    .report {
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
      font-size: 2.7rem;
    }
  }

  .title-date,
  .title-author {
    display: block;
  }

  .title-date {
    font-size: 1rem;
    margin-bottom: 0.25rem;
    text-transform: uppercase;
  }

  .title-author {
    font-size: 1rem;
    font-weight: 400;
    margin-top: 1rem;
  }

  .report-content {
    letter-spacing: -0.01rem;
  }

  :global(.report-content h2) {
    font-size: 30px;
    font-weight: 600;
    line-height: 1.2;
    margin-bottom: 0;
    margin-top: 5rem;
  }

  :global(.report-content h3) {
    font-size: 24px;
    font-weight: 600;
    line-height: 1.2;
    margin-top: 3.5rem;
    text-transform: uppercase;
  }

  :global(.report-content h4) {
    font-size: 24px;
    font-weight: 600;
    line-height: 1.2;
    margin-bottom: 0;
    margin-top: 3.5rem;
  }

  :global(.report-content h3 + h4) {
    margin-top: -0.75rem;
  }
`;
