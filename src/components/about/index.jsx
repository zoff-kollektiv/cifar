import { graphql } from 'gatsby';
import React from 'react';

import Constraint from '../constraint';
import styles from './styles';

export default ({ frontmatter: { title }, html }) => (
  <div className="about">
    <style jsx>{styles}</style>

    <Constraint>
      <h1 className="title">{title}</h1>

      {/* eslint-disable-next-line react/no-danger */}
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Constraint>
  </div>
);

export const fragment = graphql`
  fragment about on MarkdownRemark {
    frontmatter {
      title
    }
    html
  }
`;
