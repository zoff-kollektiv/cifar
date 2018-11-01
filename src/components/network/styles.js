import css from 'styled-jsx/css';

export default css`
  :global(.network) {
    height: 95vh;
    margin: 0 auto;
    max-width: 1000px;
    width: 100%;
  }

  :global(.network > svg) {
    height: 100%;
    width: 100%;
  }

  :global(.network text) {
    text-anchor: middle;
    font-family: -apple-system, BlinkMacSystemFont, Arial;
    fill: rgb(26, 35, 97);
    font-size: 14px;
  }

  :global(.network .connection) {
    stroke: rgb(235, 231, 215);
    stroke-width: 3px;
  }

  :global(.network .connection--government) {
    stroke: rgb(247, 98, 50);
  }

  :global(.network .connection--corporate) {
    stroke: rgb(237, 232, 73);
  }

  :global(.network .person) {
    cursor: pointer;
    pointer-events: all;
  }

  :global(.network .person:hover .person-circle) {
    fill: rgb(26, 35, 97);
  }

  :global(.network .person:hover .person-name) {
    text-decoration: underline;
  }

  :global(.network .person-info) {
    transform: translateY(20px);
  }

  :global(.network .person-info--for-root) {
    transform: translateY(65px);
  }

  :global(.network .person-circle) {
    fill: rgb(235, 231, 215);
  }

  :global(.network .person-circle--is-root) {
    fill: white;
    stroke: rgb(26, 35, 97);
    stroke-width: 3px;
  }

  :global(.network .person-role) {
    font-size: 11px;
    letter-spacing: 1px;
  }

  :global(.network .person-name) {
    font-size: 12px;
    font-weight: 900;
    letter-spacing: 1px;
    line-height: 1.4;
  }
`;
