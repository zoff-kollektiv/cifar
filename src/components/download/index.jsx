import React, { Fragment } from 'react';

import DownloadIcon from '../../static/file-download.svg';

import styles, { downloadIconStyles } from './styles';

export default ({ title, link }) => (
  <Fragment>
    <style jsx>{styles}</style>
    {downloadIconStyles.styles}

    <a href={link}>
      <DownloadIcon className={downloadIconStyles.className} />
      <span className="title">{title}</span>
    </a>
  </Fragment>
);
