import css from 'styled-jsx/css';

import { colors } from '../../../tokens';

export default css`
  .person {
    align-items: center;
    color: ${colors.blue};
    display: flex;
    flex-direction: column;
    padding-bottom: 2.5rem;
    width: 33.3333%;
  }

  .image,
  .image--has-file > img {
    background-color: ${colors.beige};
    border-radius: 50%;
    height: 11rem;
    margin: 0 auto 1rem auto;
    object-fit: cover;
    width: 11rem;
  }

  .title {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.2;
    margin-bottom: 0;
    margin-top: 0;
    text-align: center;
  }

  :global(.person > a) {
    color: currentColor;
    text-decoration: none;
  }

  :global(.person > a:hover .title),
  :global(.person > a:focus .title) {
    text-decoration: underline;
  }

  .role {
    display: block;
    font-size: 0.9rem;
    font-weight: 700;
    margin-top: 0.25rem;
  }
`;
