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
        fields: { folder: { eq: "people" } }
      }
      sort: { fields: [frontmatter___id] }
    ) {
      ...personsList
    }

    personsByCountry: allMarkdownRemark(
      filter: {
        fields: { folder: { eq: "people" } }
        frontmatter: {
          name: { ne: "" }
          sanctionsCountry: { eq: $countryName }
        }
      }
      sort: { fields: [frontmatter___id] }
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
            maxWidth: 400
            duotone: { highlight: "#ebe7d6", shadow: "#192162" }
          ) {
            src
          }
        }
      }
    }
  }
`;
