import { graphql } from 'gatsby';
import React from 'react';

import PersonsList from '../../components/persons-list';
import withLayout from '../../components/with-layout';
import withNavigation from '../../components/with-navigation';

const Page = ({ data }) => <div>
  <PersonsList persons={data.allMarkdownRemark && data.allMarkdownRemark.edges} />
</div>

export default withNavigation(withLayout(Page));

export const query = graphql`
  query AllPersonsPage {
    allMarkdownRemark(filter: { fields: { folder: { eq: "persons" } } }, sort: { fields: [frontmatter___title] }) {
      ...persons
    }
  }
`;
