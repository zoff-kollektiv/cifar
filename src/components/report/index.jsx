import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import React from 'react';

import Constraint from '../constraint';

import styles from './styles';

export default ({ site, html, frontmatter: { author, date, title } }) => (
  <div className="report">
    <style jsx>{styles}</style>

    <Helmet>
      <title>
        {title} | {site.siteMetadata.title}
      </title>
    </Helmet>

    <Constraint>
      <h1 className="title">
        <small className="title-date">{date}</small>
        {title}
        <small className="title-author">{author}</small>
      </h1>

      {/* eslint-disable react/no-danger */}
      <div
        className="report-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      {/* eslint-enable react/no-danger */}
    </Constraint>
  </div>
);

export const fragment = graphql`
  fragment report on MarkdownRemark {
    frontmatter {
      date
      author
      title
    }
    html
  }
`;
