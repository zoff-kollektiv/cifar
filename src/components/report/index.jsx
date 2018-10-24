import { graphql } from 'gatsby';
import React from 'react';

export default ({ frontmatter, html }) => {
  const { title } = frontmatter;

  return (
    <div className="report">
      <h1>{title}</h1>

      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
};

export const fragment = graphql`
  fragment report on MarkdownRemarkConnection {
    edges {
      node {
        frontmatter {
          title
        }
        html
      }
    }
  }
`;
