import { graphql } from 'gatsby';
import React from 'react';

import PersonsList from '../../components/persons-list';
import withNavigation from '../../components/with-navigation';

const Page = ({ data }) => <div>
  <h1>Persons</h1>

  <PersonsList persons={data.allMarkdownRemark && data.allMarkdownRemark.edges} />
</div>

export default withNavigation(Page);

export const query = graphql`
  query AllPersonsPage {
    allMarkdownRemark(filter: { fields: { folder: { eq: "persons" } } }, sort: { fields: [frontmatter___title] }) {
      ...persons
    }
  }
`;
