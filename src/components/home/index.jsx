import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import React, { Fragment } from 'react';

import CountryOverview from './country-overview';

export default ({ frontmatter: { title } }) => (
  <Fragment>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <CountryOverview />
  </Fragment>
);

export const fragment = graphql`
  fragment home on MarkdownRemark {
    frontmatter {
      title
    }
  }
`;
