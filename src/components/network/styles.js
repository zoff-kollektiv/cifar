import css from 'styled-jsx/css';

export default css`
  :global(.network line) {
    stroke: red;
  }

  :global(.network text) {
    text-anchor: middle;
    font-family: -apple-system, BlinkMacSystemFont, Arial;
    fill: blue;
    font-size: 10px;
  }
`;
