import { graphql } from 'gatsby';
import React from 'react';

import Constraint from '../constraint';
import styles from './styles';

export default ({ frontmatter, html }) => {
  const { title } = frontmatter;

  return (
    <div className="report">
      <style jsx>{styles}</style>

      <Constraint>
        <h1 className="title">{title}</h1>

        {/* eslint-disable-next-line react/no-danger */}
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Constraint>
    </div>
  );
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
