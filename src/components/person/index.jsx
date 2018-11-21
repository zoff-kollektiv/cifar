import { graphql } from 'gatsby';
import React, { Fragment } from 'react';

import Constraint from '../constraint';
import styles from './styles';

export default ({
  person: {
    frontmatter: { name, nativeName, story, ...table }
  }
}) => (
  <div className="person">
    <style jsx>{styles}</style>

    <Constraint>
      <header className="title-container">
        <h1 className="title">
          {name}
          <small className="title-native">{nativeName}</small>
        </h1>
      </header>

      {/* eslint-disable-next-line react/no-danger */}
      <div dangerouslySetInnerHTML={{ __html: story }} />

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

export const fragment = graphql`
  fragment person on MarkdownRemark {
    frontmatter {
      nativeName
      name
      identifyingInformation
      aliases
      suspectedOrConfirmedOverseasProperties
      story
    }
  }
`;
