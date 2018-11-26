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
            slug
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

    allPersons: allMarkdownRemark(
      filter: {
        frontmatter: { name: { ne: "" } }
        fields: { folder: { eq: "persons" } }
      }
      sort: { fields: [frontmatter___title] }
    ) {
      ...personsList
    }

    personsByCountry: allMarkdownRemark(
      filter: {
        fields: { folder: { eq: "persons" } }
        frontmatter: {
          name: { ne: "" }
          sanctionsCountry: { eq: $countryName }
        }
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
          fluid(
            maxWidth: 180
            duotone: { highlight: "#ebe7d6", shadow: "#192162" }
          ) {
            src
          }
        }
      }
    }
  }
`;
