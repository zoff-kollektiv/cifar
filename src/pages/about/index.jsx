import { graphql } from 'gatsby';
import React from 'react';

import About from '../../components/about';
import withLayout from '../../components/with-layout';
import withNavigation from '../../components/with-navigation';

const Page = ({ data: { site, page } }) => <About site={site} {...page} />;

export default withNavigation(withLayout(Page));

export const query = graphql`
  query {
    page: markdownRemark(
      fields: { folder: { eq: "pages" }, fileName: { eq: "about.md" } }
    ) {
      ...about
    }

    site: site {
      siteMetadata {
        title
      }
    }
  }
`;
