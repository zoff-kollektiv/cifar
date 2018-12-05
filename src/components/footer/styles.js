import css from 'styled-jsx/css';

import { colors } from '../../tokens';

export default css`
  footer {
    background-color: ${colors.blue};
    color: white;
    padding-bottom: 6rem;
    padding-top: 2rem;
  }

  h4 {
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: 0.075rem;
  }

  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    display: flex;
    flex-direction: column;
    font-size: 1.125rem;
    margin-top: 2rem;
    width: 50%;
  }

  .label {
    display: block;
    font-weight: 700;
    margin-bottom: 0.3rem;
  }

  .link {
    font-weight: 400;
  }

  a {
    color: currentColor;
    text-decoration: none;
  }

  a:hover,
  a:focus {
    text-decoration: underline;
  }
`;
