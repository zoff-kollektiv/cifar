import css from 'styled-jsx/css';

import { colors } from '../../../tokens';

export default css`
  section {
    background-color: ${colors.beige};
    color: ${colors.blue};
    padding-bottom: 4rem;
    padding-top: 3rem;
  }

  section.has-theme--white {
    background-color: white;
  }

  .title {
    font-size: 2.6rem;
    font-weight: 900;
    line-height: 1.2;
  }
`;
