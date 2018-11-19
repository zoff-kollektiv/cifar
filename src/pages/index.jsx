import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import React, { Fragment } from 'react';

import CountryOverview from '../components/home/country-overview';
import PrivateSector from '../components/home/private-sector';
import withLayout from '../components/with-layout';
import withNavigation from '../components/with-navigation';

const Page = ({
  data: {
    countries,
    missionStatement,
    privateSector,
    site: {
      siteMetadata: { title }
    }
  }
}) => (
  <Fragment>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <CountryOverview countries={countries.edges} {...missionStatement} />
    <PrivateSector {...privateSector} />
  </Fragment>
);

export default withNavigation(withLayout(Page));

export const query = graphql`
  query {
    missionStatement: markdownRemark(
      fields: {
        folder: { eq: "home" }
        fileName: { eq: "mission-statement.md" }
      }
    ) {
      ...missionStatement
    }

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

    privateSector: markdownRemark(
      fields: { folder: { eq: "home" }, fileName: { eq: "private-sector.md" } }
    ) {
      ...privateSector
    }

    site: site {
      siteMetadata {
        title
      }
    }
  }
`;
