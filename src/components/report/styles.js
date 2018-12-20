import css from 'styled-jsx/css';

import { colors, mq } from '../../tokens';

export default css`
  .report {
    color: ${colors.blue};
    font-size: 1.15rem;
    line-height: 1.35;
    padding-bottom: 3rem;
    padding-top: 3rem;
  }

  @media ${mq.phone} {
    .report {
      font-size: 1.5rem;
      line-height: 1.45;
      padding-bottom: 8rem;
      padding-top: 6rem;
    }
  }

  .title {
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 0.5rem;
    margin-top: 0;
  }

  @supports (font-variation-settings: normal) {
    .title {
      font-variation-settings: 'wght' 700;
      font-weight: inherit;
    }
  }

  @media ${mq.phone} {
    .title {
      font-size: 2.7rem;
    }
  }

  .title-date,
  .title-author {
    display: block;
  }

  .title-date {
    font-size: 1rem;
    margin-bottom: 0.25rem;
    text-transform: uppercase;
  }

  .title-author {
    font-size: 1rem;
    font-weight: 400;
    margin-top: 1rem;
  }

  @supports (font-variation-settings: normal) {
    .title-author {
      font-variation-settings: 'wght' 400;
      font-weight: inherit;
    }
  }

  .report-content {
    letter-spacing: -0.01rem;
  }

  :global(.report h2:not(:first-child)) {
    font-size: 30px;
    font-weight: 600;
    line-height: 1.2;
    margin-bottom: 0;
    margin-top: 5rem;
  }

  @supports (font-variation-settings: normal) {
    :global(.report h2) {
      font-variation-settings: 'wght' 600;
      font-weight: inherit;
    }
  }

  :global(.report h3) {
    font-size: 24px;
    font-weight: 600;
    line-height: 1.2;
    margin-top: 3.5rem;
    text-transform: uppercase;
  }

  @supports (font-variation-settings: normal) {
    :global(.report h3) {
      font-variation-settings: 'wght' 600;
      font-weight: inherit;
    }
  }

  :global(.report h4) {
    font-size: 24px;
    font-weight: 600;
    line-height: 1.2;
    margin-bottom: 0;
    margin-top: 3.5rem;
  }

  @supports (font-variation-settings: normal) {
    :global(.report h4) {
      font-variation-settings: 'wght' 600;
      font-weight: inherit;
    }
  }

  :global(.report h2 + h3) {
    margin-top: 1.2rem;
  }

  :global(.report h3 + h4) {
    margin-top: -0.75rem;
  }

  :global(.report-content a) {
    color: currentColor;
  }

  :global(.report-content .footnote-link) {
    font-size: 0.8rem;
    font-weight: 900;
    letter-spacing: 0.05rem;
    margin-left: 0.25rem;
    text-decoration: none;
    vertical-align: super;
  }

  @supports (font-variation-settings: normal) {
    :global(.report-content .footnote-link) {
      font-variation-settings: 'wght' 900;
      font-weight: inherit;
    }
  }

  :global(.report-content .footnote-link:hover),
  :global(.report-content .footnote-link:focus) {
    text-decoration: underline;
  }

  :global(.report-content dl) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  :global(.report-content dt),
  :global(.report-content dd) {
    padding: 0.35rem 0.5rem;
  }

  @media ${mq.phone} {
    :global(.report-content dt),
    :global(.report-content dd) {
      padding: 1rem;
    }
  }

  :global(.report-content dt) {
    background-color: ${colors.blue};
    color: white;
    font-size: 0.85rem;
    font-weight: 700;
    flex: 0 1 auto;
    letter-spacing: 0.02rem;
    text-transform: uppercase;
    width: 100%;
  }

  @supports (font-variation-settings: normal) {
    :global(.report-content dt) {
      font-variation-settings: 'wght' 700;
      font-weight: inherit;
    }
  }

  @media ${mq.phone} {
    :global(.report-content dt) {
      border-bottom: 2px solid ${colors.beige};
      font-size: 0.9rem;
      padding-top: 1.25rem;
      width: 40%;
    }
  }

  :global(.report-content dd) {
    border: 2px solid ${colors.blue};
    flex: 1 1 50%;
    font-size: 1rem;
    margin-left: 0;
    margin-bottom: 4px;
  }

  @media ${mq.phone} {
    :global(.report-content dd) {
      font-size: 1.125rem;
      margin-bottom: 0;
      margin-top: -2px;
    }
  }

  :global(.report-content dt:last-of-type) {
    border-bottom-color: ${colors.blue};
  }

  :global(.report-content dd:first-of-type) {
    margin-top: 0;
  }

  .footnote {
    padding: 0.25rem;
    word-break: break-all;
  }

  .footnote-back {
    font-size: 0.8rem;
    margin-left: 0.75rem;
    text-decoration: none;
    vertical-align: middle;
  }

  :global(.footnote a) {
    color: currentColor;
    text-decoration: none;
  }

  :global(.footnote a:hover),
  :global(.footnote a:focus) {
    text-decoration: underline;
  }

  :target {
    background-color: rgb(255, 243, 210);
  }
`;
