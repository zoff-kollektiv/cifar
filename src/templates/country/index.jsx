import { graphql } from 'gatsby';
import React from 'react';

import Country from './country';

export default props => <Country {...props} />;

export const query = graphql`
  query AllPersonsPerCountry($countryName: String) {
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

    current: allMarkdownRemark(
      filter: {
        frontmatter: { title: { eq: $countryName } }
        fields: { folder: { eq: "countries" } }
      }
    ) {
      edges {
        node {
          rawMarkdownBody
          frontmatter {
            title
          }
        }
      }
    }

    persons: allMarkdownRemark(
      filter: {
        fields: { folder: { eq: "persons" } }
        frontmatter: { country: { eq: $countryName } }
      }
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
