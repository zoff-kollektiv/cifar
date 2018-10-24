import { graphql } from 'gatsby';
import React from 'react';

export default () => (
  <div>
    <h1>Home</h1>
  </div>
);

export const fragment = graphql`
  fragment home on MarkdownRemarkConnection {
    edges {
      node {
        frontmatter {
          title
        }
      }
    }
  }
`;
