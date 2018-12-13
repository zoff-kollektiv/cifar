import { graphql } from 'gatsby';
import React from 'react';

import Page from '../../components/page';
import withLayout from '../../components/with-layout';
import withNavigation from '../../components/with-navigation';

export default withNavigation(
  withLayout(({ data: { site, page } }) => <Page site={site} {...page} />)
);

export const query = graphql`
  query {
    page: markdownRemark(
      fields: { folder: { eq: "pages" }, fileName: { eq: "guidelines.md" } }
    ) {
      ...page
    }

    site: site {
      siteMetadata {
        title
      }
    }
  }
`;
