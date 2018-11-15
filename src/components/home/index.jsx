import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import React, { Fragment } from 'react';

import CountryOverview from './country-overview';
import PrivateSector from './private-sector';

export default ({
  frontmatter: {
    title,
    missionStatement,
    missionStatementSecond,
    missionStatementButtonLabel,
    missionStatementButtonLink,
    privateSectorTitle,
    privateSectorIntro,
    privateSectorButtonLabel,
    privateSectorButtonLink
  }
}) => (
  <Fragment>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <CountryOverview
      missionStatement={missionStatement}
      missionStatementSecond={missionStatementSecond}
      buttonLabel={missionStatementButtonLabel}
      buttonLink={missionStatementButtonLink}
    />
    <PrivateSector
      title={privateSectorTitle}
      intro={privateSectorIntro}
      buttonLabel={privateSectorButtonLabel}
      buttonLink={privateSectorButtonLink}
    />
  </Fragment>
);

export const fragment = graphql`
  fragment home on MarkdownRemark {
    frontmatter {
      title
      missionStatement
      missionStatementSecond
      missionStatementButtonLabel
      missionStatementButtonLink

      privateSectorTitle
      privateSectorIntro
      privateSectorButtonLabel
      privateSectorButtonLink
    }
  }
`;
