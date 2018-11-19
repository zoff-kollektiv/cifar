import { graphql } from 'gatsby';
import React from 'react';

import Country from './country';

export default props => {
  const { pathContext, ...rest } = props;
  const newPathContext = {
    ...pathContext,
    countryName: 'All affected persons',
    countrySlug: 'all'
  };

  return <Country {...rest} pathContext={newPathContext} />;
};

export const query = graphql`
  query AllPersons {
    countries: allMarkdownRemark(
      filter: { fields: { folder: { eq: "countries" } } }
      sort: { fields: [frontmatter___title] }
    ) {
      edges {
        node {
          frontmatter {
            title
          }
        }
      }
    }

    persons: allMarkdownRemark(
      filter: { fields: { folder: { eq: "persons" } } }
      sort: { fields: [frontmatter___title] }
    ) {
      ...personsList
    }

    site: site {
      siteMetadata {
        title
      }
    }

    images: allImageSharp {
      edges {
        node {
          parent {
            ... on File {
              absolutePath
            }
          }
          fluid(maxWidth: 150) {
            src
          }
        }
      }
    }
  }
`;
