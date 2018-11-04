import css from 'styled-jsx/css';

import { colors } from '../../tokens';

export default css`
  nav {
    background-color: ${colors.blue};
    color: white;
  }

  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    list-style: none;
    margin-bottom: 0;
    margin-top: 0;
    padding-left: 0;
  }

  li + li {
    margin-left: 1.5rem;
  }

  :global(.country-tabs a) {
    color: currentColor;
    display: block;
    padding: 1rem 1.5rem;
    text-decoration: none;
  }
`;
