import css from 'styled-jsx/css';

import { colors, mq } from '../../tokens';

export default css`
  .labels {
    background-color: ${colors.beige};
  }

  .labels-list-container {
    border-top: 1px solid ${colors.blue};
    margin-top: 0;
    padding-bottom: 3rem;
    padding-top: 1.5rem;
  }

  h5 {
    color: ${colors.blue};
    font-size: 0.6rem;
    font-weight: 900;
    letter-spacing: 0.05rem;
    margin-bottom: 0.75rem;
    margin-top: 0;
    text-transform: uppercase;
  }

  @supports (font-variation-settings: normal) {
    h5 {
      font-variation-settings: 'wght' 900;
      font-weight: inherit;
    }
  }

  @media ${mq.tablet} {
    h5 {
      font-size: 0.75rem;
      margin-bottom: 1.25rem;
    }
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
    font-size: 0.6rem;
    font-weight: 600;
    white-space: nowrap;
  }

  @supports (font-variation-settings: normal) {
    h5 {
      font-variation-settings: 'wght' 600;
      font-weight: inherit;
    }
  }

  @media ${mq.phone} {
    li {
      font-size: 0.8rem;
    }
  }

  li + li {
    margin-left: 1rem;
  }

  @media ${mq.phone} {
    .li + li {
      margin-left: 1.5rem;
    }
  }

  @media ${mq.tablet} {
    .li + li {
      margin-left: 2rem;
    }
  }

  .color {
    background-color: currentColor;
    border-radius: 50%;
    color: white;
    display: inline-block;
    height: 1.25rem;
    margin-right: 0.75rem;
    position: relative;
    vertical-align: middle;
    width: 1.25rem;
  }

  @media ${mq.phone} {
    .color {
      display: inline-block;
      height: 1.4rem;
      margin-right: 1.25rem;
      width: 1.4rem;
    }
  }

  .color::after {
    background-color: currentColor;
    content: '';
    height: 3px;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-10%, -50%);
    width: 1.25rem;
  }

  @media ${mq.phone} {
    .color::after {
      width: 1.75rem;
    }
  }

  .color--family {
    color: rgb(244, 82, 31);
  }

  .color--government {
    color: ${colors.blue};
  }

  .network {
    background-color: ${colors.beige};
    height: 50vh;
    margin: 1.5rem auto 0 auto;
    width: 100%;
  }

  @media ${mq.phone} {
    .network {
      height: 80vh;
    }

    .network--egypt {
      height: 70vh;
    }

    .network--tunisia {
      height: 120vh;
    }
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

  :global(.network .person-name) {
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.025rem;
  }

  @supports (font-variation-settings: normal) {
    :global(.network .person-name) {
      font-variation-settings: 'wght' 700;
      font-weight: inherit;
    }
  }

  @media ${mq.phone} {
    :global(.network .person-name) {
      font-size: 12px;
    }
  }

  :global(.network .person:hover .person-name),
  :global(.network .person:focus .person-name) {
    font-weight: 900;
  }

  @supports (font-variation-settings: normal) {
    :global(.network .person:hover .person-name),
    :global(.network .person:focus .person-name) {
      font-variation-settings: 'wght' 900;
      font-weight: inherit;
    }
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
    font-size: 9px;
    letter-spacing: 0.025rem;
  }

  @media ${mq.phone} {
    :global(.network .person-role) {
      font-size: 10px;
    }
  }
`;
