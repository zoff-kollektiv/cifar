import css from 'styled-jsx/css';

import { colors } from '../../tokens';

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
    fill: ${colors.blue};
    font-size: 14px;
  }

  :global(.network .connection) {
    stroke: ${colors.beige};
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

  :global(.network .person:hover .person-circle:not(.person-circle--is-root)) {
    fill: ${colors.blue};
  }

  :global(.network .person:hover .person-background-circle) {
    fill: ${colors.beige};
  }

  :global(.network .person:hover .person-name) {
    font-variation-settings: "wght" 900;
    font-weight: 900;
  }

  :global(.network .person-info) {
    transform: translateY(25px);
  }

  :global(.network .person-info--for-root) {
    transform: translateY(85px);
  }

  :global(.network .person-background-circle) {
    fill: white;
  }

  :global(.network .person-circle) {
    fill: ${colors.beige};
  }

  :global(.network .person-circle--is-root) {
    fill: url(#image);
    stroke: ${colors.blue};
    stroke-width: 3px;
  }

  :global(.network .person-role) {
    font-size: 10px;
    letter-spacing: 0.025rem;
  }

  :global(.network .person-name) {
    font-size: 12px;
    font-variation-settings: "wght" 600;
    font-weight: 600;
    letter-spacing: 0.05rem;
    line-height: 1.4;
  }
`;
