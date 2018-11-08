import css from 'styled-jsx/css';

import { colors } from '../../../tokens';

export default css`
  section {
    background-color: ${colors.beige};
    color: ${colors.blue};
    padding-bottom: 4rem;
    padding-top: 2rem;
  }

  .intro,
  .outro {
    font-size: 1.875rem;
    font-weight: 600;
    line-height: 1.3;
    margin-bottom: 0;
    margin-top: 0;
  }

  .outro {
    margin-top: 4rem;
  }
`;
