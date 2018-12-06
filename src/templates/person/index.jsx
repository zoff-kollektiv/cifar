import { graphql } from 'gatsby';
import React from 'react';

import Person from '../../components/person';
import withLayout from '../../components/with-layout';
import withNavigation from '../../components/with-navigation';

const Page = ({ data }) => <Person {...data} />;

export default withNavigation(withLayout(Page));

export const query = graphql`
  query Person($name: String) {
    images: allImageSharp {
      edges {
        node {
          parent {
            ... on File {
              absolutePath
            }
          }
          fluid(
            maxWidth: 600
            duotone: { highlight: "#ebe7d6", shadow: "#192162" }
          ) {
            src
          }
        }
      }
    }

    person: markdownRemark(
      fields: { folder: { eq: "persons" } }
      frontmatter: { name: { eq: $name } }
    ) {
      ...person
    }

    site: site {
      siteMetadata {
        title
      }
    }
  }
`;
