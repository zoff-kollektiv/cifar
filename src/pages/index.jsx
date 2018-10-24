import { graphql } from 'gatsby';
import React from 'react';

import Home from '../components/home';
import withNavigation from '../components/with-navigation';

const Page = ({ data = {} }) => {
  const { edges } = data.allMarkdownRemark;
  return <div>
    <Home {...edges[0].node} />
  </div>
}

export default withNavigation(Page);

export const query = graphql`
  query Home {
    allMarkdownRemark(filter: { fields: { folder: { eq: "pages" }, fileName:{ eq: "home.md" } } }) {
      ...home
    }
  }
`;
