import { graphql } from 'gatsby';
import React, { Fragment } from 'react';

import Constraint from '../../components/constraint';
import withLayout from '../../components/with-layout';
import withNavigation from '../../components/with-navigation';

const Page = ({ data }) => {
  const { image, person } = data;
  const { html, frontmatter } = person;
  const { title, nameNative, ...table } = frontmatter;

  return (
    <Constraint>
      <h1>
        {title}
        <small>{nameNative}</small>
      </h1>

      <img src={image.childImageSharp.fluid.src} alt={title} />

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
  query Person($title: String, $imageFileName: String) {
    image: file(relativePath: { eq: $imageFileName }) {
      childImageSharp {
        fluid(maxWidth: 900) {
          src
          srcSet
        }
      }
    }

    person: markdownRemark(
      fields: { folder: { eq: "persons" } }
      frontmatter: { title: { eq: $title } }
    ) {
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
`;
