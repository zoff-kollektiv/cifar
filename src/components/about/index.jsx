import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import React from 'react';

import Constraint from '../constraint';
import styles from './styles';

export default ({ site, frontmatter: { title }, html }) => (
  <div className="about">
    <Helmet>
      <title>
        {title} | {site.siteMetadata.title}
      </title>
    </Helmet>

    <style jsx>{styles}</style>

    <Constraint>
      <h1 className="title">{title}</h1>

      {/* eslint-disable react/no-danger */}
      <div
        className="about-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      {/* eslint-enable react/no-danger */}
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
