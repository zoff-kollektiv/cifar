import { graphql } from 'gatsby';
import React from 'react';

import Report from '../../components/report';
import withLayout from '../../components/with-layout';
import withNavigation from '../../components/with-navigation';

const Page = ({ data: { site, page } }) => <Report site={site} {...page} />;

export default withNavigation(withLayout(Page));

export const query = graphql`
  query {
    page: markdownRemark(
      fields: { folder: { eq: "pages" }, fileName: { eq: "report.md" } }
    ) {
      ...report
    }

    site: site {
      siteMetadata {
        title
      }
    }
  }
`;
