import { graphql } from 'gatsby';
import React from 'react';

import Person from '../../components/person';
import withLayout from '../../components/with-layout';
import withNavigation from '../../components/with-navigation';

const Page = ({ data }) => <Person {...data} />;

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
