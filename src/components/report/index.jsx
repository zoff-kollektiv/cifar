import { graphql } from 'gatsby';
import React from 'react';

import Constraint from '../constraint';

export default ({ frontmatter, html }) => {
  const { title } = frontmatter;

  return (
    <div className="report">
      <Constraint>
        <h1>{title}</h1>

        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Constraint>
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
