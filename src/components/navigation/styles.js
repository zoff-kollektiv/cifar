import css from 'styled-jsx/css';

import { colors, mq } from '../../tokens';

export default css`
  header {
    background-color: ${colors.beige};
    color: ${colors.blue};
    display: flex;
    padding: 1.25rem 1.5rem;
  }

  @media ${mq.tablet} {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }

  :global(header .title) {
    font-variation-settings: 'wght' 500;
    letter-spacing: 0.05rem;
    text-decoration: none;
    text-transform: uppercase;
  }

  nav {
    align-self: flex-end;
    margin-left: auto;
  }

  :global(header a) {
    color: currentColor;
    text-decoration: none;
  }

  :global(header a:not(.title)[aria-current]),
  :global(header a:hover),
  :global(header a:focus) {
    text-decoration: underline;
  }

  :global(header a + a) {
    margin-left: 1.5rem;
  }
`;
