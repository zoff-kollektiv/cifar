import css from 'styled-jsx/css';

import { mq } from '../../tokens';

export default css`
  div {
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  @media ${mq.tablet} {
    div {
      padding-left: 0;
      padding-right: 0;
    }
  }
`;
