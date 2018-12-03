import React from 'react';

import styles from './styles';

const formatDate = dateStr => {
  const date = new Date(dateStr);

  return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
};

export default ({ items }) => (
  <ul>
    <style jsx>{styles}</style>

    {items.map(
      ({
        date,
        link,
        excerpt: { rendered: renderedExcerpt },
        title: { rendered: renderedTitle }
      }) => (
        <li>
          <h3 className="title">
            <a className="title-link" href={link}>
              {renderedTitle}
            </a>

            <div className="content-container">
              <small className="date">{formatDate(date)}</small>
              {/* eslint-disable react/no-danger */}
              <span
                className="content"
                dangerouslySetInnerHTML={{ __html: renderedExcerpt }}
              />
              {/* eslint-enable react/no-danger */}
            </div>
          </h3>
        </li>
      )
    )}
  </ul>
);
