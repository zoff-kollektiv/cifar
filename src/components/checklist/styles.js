import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { colors, mq } from '../../tokens';

export default css`
  div {
    background-color: ${colors.blue};
    color: white;
    margin-top: 3.5rem;
    padding: 1.5rem;
  }

  @media ${mq.phone} {
    div {
      padding: 2.5rem;
    }
  }

  @media ${mq.tablet} {
    div {
      padding: 3rem 4.5rem 3rem 12.5rem;
    }
  }

  h3 {
    font-size: 1.2rem;
    line-height: 1.2;
    margin-bottom: 2.5rem;
    margin-top: 0;
  }

  @media ${mq.phone} {
    h3 {
      font-size: 1.4rem;
    }
  }

  @media ${mq.tablet} {
    h3 {
      font-size: 1.8rem;
    }
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0 0 0 3rem;
  }

  @media ${mq.tablet} {
    ul {
      padding-left: 0;
    }
  }

  li {
    font-size: 0.9rem;
    font-weight: 700;
    position: relative;
  }

  @media ${mq.phone} {
    li {
      font-size: 1rem;
    }
  }

  li + li {
    margin-top: 1.5rem;
  }
`;

export const checkIconStyles = css.resolve`
  svg {
    background-color: white;
    border-radius: 50%;
    color: ${colors.blue};
    height: 0.85rem;
    left: -2.75rem;
    padding: 0.5rem;
    position: absolute;
    width: 0.85rem;
  }

  @media ${mq.phone} {
    svg {
      height: 1.25rem;
      left: -3.5rem;
      width: 1.25rem;
    }
  }

  @media ${mq.desktop} {
    svg {
      top: 50%;
      transform: translateY(-50%);
    }
  }
`;
