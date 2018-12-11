import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import React, { Fragment } from 'react';

import Block from '../../components/home/block';
import Checklist from '../../components/checklist';
import CountryOverview from '../../components/home/country-overview';
import Cta from '../../components/cta';
import News from '../../components/news';
import withLayout from '../../components/with-layout';
import withNavigation from '../../components/with-navigation';

const Page = ({
  pageContext: { news },
  data: {
    blocks,
    countries,
    missionStatement,
    site: {
      siteMetadata: { title }
    }
  }
}) => (
  <Fragment>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <CountryOverview countries={countries.edges} {...missionStatement} />

    {blocks &&
      blocks.edges.map(
        (
          {
            node: {
              html,
              frontmatter: {
                checklist,
                title: blockTitle,
                buttonLink,
                buttonLabel
              }
            }
          },
          index
        ) => (
          <Block
            theme={index % 2 === 0 ? 'white' : false}
            title={blockTitle}
            key={`block-${blockTitle}`}
          >
            {/* eslint-disable-next-line react/no-danger */}
            <div dangerouslySetInnerHTML={{ __html: html }} />

            {checklist && <Checklist items={checklist} />}

            {buttonLink && buttonLabel && (
              <Cta
                theme={index % 2 === 0 ? 'dark' : 'light'}
                href={buttonLink}
                label={buttonLabel}
              />
            )}
          </Block>
        )
      )}

    {news && news.length > 0 && (
      <Block title="News">
        <News items={news} />
      </Block>
    )}
  </Fragment>
);

export default withNavigation(withLayout(Page));

export const query = graphql`
  query {
    missionStatement: markdownRemark(
      fields: {
        folder: { eq: "home" }
        fileName: { eq: "mission-statement.md" }
      }
    ) {
      ...missionStatement
    }

    countries: allMarkdownRemark(
      filter: {
        fields: { fileName: { ne: "all.md" }, folder: { eq: "countries" } }
      }
      sort: { fields: [frontmatter___title] }
    ) {
      edges {
        node {
          frontmatter {
            title
          }
        }
      }
    }

    blocks: allMarkdownRemark(
      filter: {
        fields: {
          folder: { eq: "home" }
          fileName: {
            in: ["effectiveness.md", "private-sector.md", "sanctions.md"]
          }
        }
      }
      sort: { fields: [frontmatter___sort] }
    ) {
      edges {
        node {
          html
          frontmatter {
            buttonLabel
            buttonLink
            checklist {
              text
              icon
            }
            checklistTitle
            title
          }
        }
      }
    }

    site: site {
      siteMetadata {
        title
      }
    }
  }
`;
