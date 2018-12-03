import React from 'react';

import styles from './styles';

const formatDate = dateStr => {
  const date = new Date(dateStr);
  let day = `${date.getDate()}`;
  let month = `${date.getDate()}`;
  const year = date.getFullYear();

  if (day.length === 1) {
    day = `0${day}`;
  }

  if (month.length === 1) {
    month = `0${month}`;
  }

  return `${day}/${month}/${year}`;
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
