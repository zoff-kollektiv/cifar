import { graphql } from 'gatsby';
import React from 'react';

import CountryOverview from './country-overview';

export default () => (
  <div>
    <CountryOverview />
  </div>
);

export const fragment = graphql`
  fragment home on MarkdownRemarkConnection {
    edges {
      node {
        frontmatter {
          title
        }
      }
    }
  }
`;
