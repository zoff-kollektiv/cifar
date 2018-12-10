import css from 'styled-jsx/css';

import { mq } from '../../tokens';

export default css`
  div {
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }

  @media ${mq.phone} {
    div {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }
  }

  @media ${mq.tablet} {
    div {
      max-width: 850px;
    }
  }

  @media ${mq.desktop} {
    div {
      padding-left: 0;
      padding-right: 0;
    }
  }
`;
