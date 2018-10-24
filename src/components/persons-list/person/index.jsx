import { graphql } from 'gatsby';
import React, { Fragment } from 'react';

export default ({ title }) => <Fragment>
  <h2>{title}</h2>
</Fragment>;

export const fragment = graphql`
  fragment persons on MarkdownRemarkConnection {
    edges {
      node {
        fileAbsolutePath
        frontmatter {
          title
        }
      }
    }
  }
`;
