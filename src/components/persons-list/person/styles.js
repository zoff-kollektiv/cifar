import css from 'styled-jsx/css';

import { colors, mq } from '../../../tokens';

export default css`
  .person {
    align-items: center;
    color: ${colors.blue};
    display: flex;
    flex-direction: column;
    padding-bottom: 2rem;
    width: 50%;
  }

  @media ${mq.tablet} {
    .person {
      padding-bottom: 2.5rem;
      width: 33.3333%;
    }
  }

  .image,
  .image--has-file > img {
    background-color: ${colors.beige};
    border-radius: 50%;
    height: 7rem;
    margin: 0 auto 0.5rem auto;
    object-fit: cover;
    width: 7rem;
  }

  @media ${mq.tablet} {
    .image,
    .image--has-file > img {
      height: 11rem;
      margin-bottom: 1rem;
      width: 11rem;
    }
  }

  .title {
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 0;
    margin-top: 0;
    text-align: center;
  }

  @media ${mq.tablet} {
    .title {
      font-size: 1.5rem;
    }
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
    display: none;
    font-size: 0.85rem;
    font-weight: 400;
    margin-top: 0.25rem;
  }

  @media ${mq.tablet} {
    .role {
      display: block;
    }
  }
`;
