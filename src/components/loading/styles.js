import css from 'styled-jsx/css';

import { colors } from '../../tokens';

export default css`
  p {
    background-color: ${colors.beige};
    color: ${colors.blue};
    font-size: 1rem;
    font-weight: 700;
    margin: 1.5rem auto 0 auto;
    padding-bottom: 2rem;
    padding-top: 2rem;
    text-align: center;
  }

  @supports (font-variation-settings: normal) {
    p {
      font-variation-settings: 'wght' 700;
      font-weight: inherit;
    }
  }
`;
