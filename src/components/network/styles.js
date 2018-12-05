import css from 'styled-jsx/css';

import { colors } from '../../tokens';

export default css`
  .labels {
    background-color: ${colors.beige};
  }

  .labels-list-container {
    border-top: 1px solid ${colors.blue};
    margin-top: 1.5rem;
    padding-bottom: 3rem;
    padding-top: 1.5rem;
  }

  h5 {
    color: ${colors.blue};
    font-size: 0.7rem;
    font-weight: 900;
    letter-spacing: 0.05rem;
    margin-bottom: 1rem;
    margin-top: 0;
    text-transform: uppercase;
  }

  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    color: ${colors.blue};
    font-size: 0.8rem;
    font-weight: 600;
  }

  li + li {
    margin-left: 2rem;
  }

  .color {
    background-color: currentColor;
    border-radius: 50%;
    color: white;
    display: inline-block;
    height: 1.75rem;
    margin-right: 1rem;
    position: relative;
    vertical-align: middle;
    width: 1.75rem;
  }

  .color::after {
    background-color: currentColor;
    content: '';
    height: 3px;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-10%, -50%);
    width: 1.75rem;
  }

  .color--family {
    color: rgb(244, 82, 31);
  }

  .color--government {
    color: ${colors.blue};
  }

  .network {
    background-color: ${colors.beige};
    height: 75vh;
    margin: 1.5rem auto 0 auto;
    width: 100%;
  }

  :global(.network > svg) {
    height: 100%;
    width: 100%;
  }

  :global(.network text) {
    fill: ${colors.blue};
    font-size: 14px;
  }

  :global(.network .link) {
    stroke: white;
    stroke-width: 2px;
  }

  :global(.network .link--government) {
    stroke: ${colors.blue};
  }

  :global(.network .link--family) {
    stroke: rgb(244, 82, 31);
  }

  :global(.network .person) {
    cursor: pointer;
    pointer-events: all;
  }

  :global(.network .person:hover .person-name) {
    font-weight: 900;
  }

  :global(.network .person-background-circle),
  :global(.network .person-circle) {
    fill: white;
  }

  :global(.network .person-circle--is-root) {
    fill: url(#image);
  }

  :global(.network .person--link-government .person-circle) {
    fill: ${colors.blue};
  }

  :global(.network .person--link-family .person-circle) {
    fill: rgb(244, 82, 31);
  }

  :global(.network .person-role) {
    font-size: 10px;
    letter-spacing: 0.025rem;
  }

  :global(.network .person-name) {
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.025rem;
    line-height: 1.4;
  }
`;
