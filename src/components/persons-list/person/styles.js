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

  .image {
    background-color: ${colors.beige};
    border-radius: 50%;
    display: flex;
    height: 7rem;
    justify-content: center;
    margin: 0 auto 0.5rem auto;
    overflow: hidden;
    width: 7rem;
  }

  @media ${mq.tablet} {
    .image {
      height: 11rem;
      margin-bottom: 1rem;
      width: 11rem;
    }
  }

  .image img {
    height: 7.45rem;
    width: 7.45rem;
  }

  @media ${mq.tablet} {
    .image img {
      height: 11.45rem;
      width: 11.45rem;
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

  @supports (font-variation-settings: normal) {
    .title {
      font-variation-settings: 'wght' 700;
      font-weight: inherit;
    }
  }

  @media ${mq.tablet} {
    .title {
      font-size: 1.25rem;
    }
  }

  :global(.person > a) {
    color: currentColor;
    text-decoration: none;
  }

  :global(.person > a:hover .title-name),
  :global(.person > a:focus .title-name) {
    text-decoration: underline;
  }

  .role {
    display: none;
    font-weight: 400;
    margin-top: 0.25rem;
  }

  @supports (font-variation-settings: normal) {
    .role {
      font-variation-settings: 'wght' 400;
      font-weight: inherit;
    }
  }

  @media ${mq.tablet} {
    .role {
      display: block;
      font-size: 1rem;
    }
  }
`;
