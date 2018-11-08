import { graphql } from 'gatsby';
import React from 'react';

import Home from '../components/home';
import withLayout from '../components/with-layout';
import withNavigation from '../components/with-navigation';

const Page = ({ data = {} }) => {
  const { page } = data;
  return (<Home {...page} />);
};

export default withNavigation(withLayout(Page));

export const query = graphql`
  query {
    page: markdownRemark(
      fields: { folder: { eq: "pages" }, fileName: { eq: "home.md" } }
    ) {
      ...home
    }
  }
`;
