import React, { Fragment } from 'react';

import Constraint from '../constraint';
import styles from './styles';

export default ({
  image,
  person: {
    html,
    frontmatter: { title, nameNative, ...table }
  }
}) => (
  <div className="person">
    <style jsx>{styles}</style>

    <Constraint>
      <header className="title-container">
        <h1 className="title">
          {title}
          <small className="title-native">{nameNative}</small>
        </h1>

        <figure className="image">
          <img
            src={image.childImageSharp.fluid.src}
            alt={title}
            className="image-image"
          />
        </figure>
      </header>

      {/* eslint-disable-next-line react/no-danger */}
      <div dangerouslySetInnerHTML={{ __html: html }} />

      <h2>Information</h2>

      <dl>
        {Object.keys(table).map(key => (
          <Fragment key={key}>
            <dt>{key}</dt>
            <dd>{table[key]}</dd>
          </Fragment>
        ))}
      </dl>
    </Constraint>
  </div>
);
