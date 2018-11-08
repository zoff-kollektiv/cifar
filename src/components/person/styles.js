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

  dt {
    background-color: ${colors.blue};
    clear: left;
    color: white;
    float: left;
    font-size: 1.125rem;
    font-weight: 700;
    padding: 0.5rem;
    text-transform: uppercase;
    width: 40%;
  }

  dd {
    border: 1px solid ${colors.blue};
    float: left;
    margin-left: 0;
    padding: 0.5rem;
    width: 50%;
  }
`;
