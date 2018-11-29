import css from 'styled-jsx/css';

import { colors, mq } from '../../tokens';

export default css`
  .person {
    color: ${colors.blue};
    font-size: 1.25rem;
    line-height: 1.35;
    padding-bottom: 4rem;
  }

  @media ${mq.phone} {
    .person {
      font-size: 1.5rem;
      line-height: 1.45;
    }
  }

  .title-container {
    display: flex;
    flex-direction: row;
    margin-bottom: 1rem;
    margin-top: 2.5rem;
  }

  @media ${mq.phone} {
    .title-container {
      margin-bottom: 3rem;
      margin-top: 4rem;
    }
  }

  .title {
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 1.2;
    margin-top: 0;
  }

  @media ${mq.phone} {
    .title {
      font-size: 2.43rem;
    }
  }

  .title-native {
    display: block;
    margin-top: 0.2rem;
  }

  .image {
    background-color: ${colors.beige};
    border-radius: 50%;
    flex: 1 0 auto;
    margin: 0;
    overflow: hidden;
    height: 15rem;
    width: 15rem;
  }

  .image-image {
    height: auto;
    width: 100%;
  }

  dl {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  dt,
  dd {
    padding: 0.35rem 0.5rem;
  }

  @media ${mq.phone} {
    dt,
    dd {
      padding: 1rem;
    }
  }

  dt {
    background-color: ${colors.blue};
    color: white;
    font-size: 0.85rem;
    font-weight: 700;
    flex: 0 1 auto;
    letter-spacing: 0.02rem;
    text-transform: uppercase;
    width: 100%;
  }

  @media ${mq.phone} {
    dt {
      border-bottom: 2px solid ${colors.beige};
      font-size: 0.9rem;
      width: 40%;
    }
  }

  dd {
    border: 2px solid ${colors.blue};
    flex: 1 1 50%;
    font-size: 1rem;
    margin-left: 0;
    margin-bottom: 4px;
  }

  @media ${mq.phone} {
    dd {
      font-size: 1.125rem;
      margin-bottom: 0;
      margin-top: -2px;
    }
  }

  dt:last-of-type {
    border-bottom-color: ${colors.blue};
  }

  dd:first-of-type {
    margin-top: 0;
  }
`;
