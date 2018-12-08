import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import React from 'react';

import Constraint from '../constraint';

import styles from './styles';

export default ({
  footnotes,
  site,
  html,
  frontmatter: { author, date, title }
}) => (
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

      {footnotes && (
        <>
          <h2>Footnotes</h2>

          <ol className="footnotes">
            {footnotes.map(({ number, footnote }) => (
              <li
                className="footnote"
                id={`footnote-${number}`}
                key={`footnote-${number}`}
              >
                {/* eslint-disable-next-line react/no-danger */}
                <span dangerouslySetInnerHTML={{ __html: footnote }} />
                <a
                  href={`#footnote-link-${number}`}
                  aria-label="Back to content"
                  className="footnote-back"
                >
                  ↵
                </a>
              </li>
            ))}
          </ol>
        </>
      )}
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
