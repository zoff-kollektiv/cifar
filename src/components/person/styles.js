import css from 'styled-jsx/css';

import { colors } from '../../tokens';

export default css`
  .person {
    color: ${colors.blue};
    font-size: 1.5rem;
    line-height: 1.45;
    padding-bottom: 4rem;
  }

  .title-container {
    display: flex;
    flex-direction: row;
    margin-bottom: 3rem;
    margin-top: 4rem;
  }

  .title {
    font-size: 2.43rem;
    font-weight: 700;
    line-height: 1.2;
    margin-right: 1.5rem;
    margin-top: 0;
    width: 75%;
  }

  .title-native {
    display: block;
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
    padding: 1rem;
  }

  dt {
    background-color: ${colors.blue};
    border-bottom: 2px solid ${colors.beige};
    color: white;
    font-size: 1.125rem;
    font-weight: 700;
    flex: 0 1 auto;
    text-transform: uppercase;
    width: 40%;
    word-break: break-all;
  }

  dd {
    border: 2px solid ${colors.blue};
    flex: 1 1 50%;
    font-size: 1.125rem;
    margin-left: 0;
    margin-top: -2px;
  }

  dt:last-of-type {
    border-bottom-color: ${colors.blue};
  }

  dd:first-of-type {
    margin-top: 0;
  }
`;
