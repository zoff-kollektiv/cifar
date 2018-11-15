import css from 'styled-jsx/css';

import { colors } from '../../../tokens';

export default css`
  section {
    background-color: ${colors.beige};
    color: ${colors.blue};
    padding-bottom: 3rem;
    padding-top: 2rem;
  }

  section.has-theme--white {
    background-color: white;
  }
`;
