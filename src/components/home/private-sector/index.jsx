import { graphql } from 'gatsby';
import React from 'react';

import Block from '../block';
import Cta from '../../cta';

export default ({
  rawMarkdownBody,
  frontmatter: { title, buttonLink, buttonLabel }
}) => (
  <Block theme="white">
    <h2>{title}</h2>
    <p>{rawMarkdownBody}</p>

    <Cta href={buttonLink} label={buttonLabel} />
  </Block>
);

export const fragment = graphql`
  fragment privateSector on MarkdownRemark {
    rawMarkdownBody
    frontmatter {
      buttonLabel
      buttonLink
      title
    }
  }
`;
