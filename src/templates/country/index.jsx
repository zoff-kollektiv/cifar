import { graphql } from 'gatsby';
import React from 'react';

import CountryTabs from '../../components/country-tabs';
import PersonsList from '../../components/persons-list';
import withLayout from '../../components/with-layout';
import withNavigation from '../../components/with-navigation';

const Page = ({ data }) => <div>
  <CountryTabs tabs={data.countries && data.countries.edges} />
  <PersonsList persons={data.persons && data.persons.edges} />
</div>

export default withNavigation(withLayout(Page));

export const query = graphql`
  query AllPersonsPage($countryName: String) {
    countries: allMarkdownRemark(filter: { fields: { folder: { eq: "countries" } } }, sort: { fields: [frontmatter___title] }) {
      edges {
        node {
          frontmatter {
            title
          }
        }
      }
    }

    persons: allMarkdownRemark(filter: { fields: { folder: { eq: "persons" } }, frontmatter: { country: { eq: $countryName } } }, sort: { fields: [frontmatter___title] }) {
      ...personsList
    }
  }
`;
