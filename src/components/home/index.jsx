import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import React, { Fragment } from 'react';

import CountryOverview from './country-overview';

export default () => (
  <Fragment>
    <Helmet>
      <title>EU sanctions | cifar</title>
    </Helmet>
    <CountryOverview />
  </Fragment>
);

export const fragment = graphql`
  fragment home on MarkdownRemark {
    node {
      frontmatter {
        title
      }
    }
  }
`;
