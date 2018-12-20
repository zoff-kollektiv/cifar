import Helmet from 'react-helmet';
import React from 'react';

import Constraint from '../constraint';
import Download from '../download';

import styles from './styles';

export default ({
  footnotes,
  site,
  html,
  frontmatter: { author, date, title, downloadTitle, downloadLink }
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

      {downloadLink && <Download title={downloadTitle} link={downloadLink} />}

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
            {footnotes.map(({ index, footnote }) => (
              <li
                className="footnote"
                id={`footnote-${index}`}
                key={`footnote-${index}`}
              >
                {/* eslint-disable-next-line react/no-danger */}
                <span dangerouslySetInnerHTML={{ __html: footnote }} />
                <a
                  href={`#footnote-link-${index}`}
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
