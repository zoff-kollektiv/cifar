import css from 'styled-jsx/css';

import { colors, mq } from '../../tokens';

export default css`
  div {
    background-color: ${colors.blue};
    color: white;
    margin-top: 3.5rem;
    padding: 2.5rem;
  }

  @media ${mq.tablet} {
    div {
      padding: 4.5rem 4.5rem 4.5rem 12.5rem;
    }
  }

  h3 {
    line-height: 1.2;
    margin-bottom: 2.5rem;
    margin-top: 0;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0 0 0 4.5rem;
  }

  @media ${mq.tablet} {
    ul {
      padding-left: 0;
    }
  }

  li {
    font-size: 1rem;
    font-weight: 700;
  }

  li + li {
    margin-top: 1.5rem;
  }
`;
