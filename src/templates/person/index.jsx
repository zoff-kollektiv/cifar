import { graphql } from 'gatsby';
import React, { Fragment } from 'react';

import Constraint from '../../components/constraint';
import withLayout from '../../components/with-layout';
import withNavigation from '../../components/with-navigation';

const Page = ({ data }) => {
  const { node } = data.allMarkdownRemark.edges[0];
  const { html, frontmatter } = node;
  const { title, nameNative, ...table } = frontmatter;

  return (
    <Constraint>
      <h1>
        {title}
        <small>{nameNative}</small>
      </h1>

      {/* eslint-disable-next-line react/no-danger */}
      <div dangerouslySetInnerHTML={{ __html: html }} />

      <dl>
        {Object.keys(table).map(key => (
          <Fragment key={key}>
            <dt>{key}</dt>
            <dd>{table[key]}</dd>
          </Fragment>
        ))}
      </dl>
    </Constraint>
  );
};

export default withNavigation(withLayout(Page));

export const query = graphql`
  query Person($title: String) {
    allMarkdownRemark(
      filter: {
        fields: { folder: { eq: "persons" } }
        frontmatter: { title: { eq: $title } }
      }
    ) {
      edges {
        node {
          html
          frontmatter {
            nameNative
            title
            role
            aliases
            overseasProperties
          }
        }
      }
    }
  }
`;
