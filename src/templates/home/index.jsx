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
  pageContext: {
    news,
    data: {
      blocks,
      countries,
      missionStatement,
      site: {
        siteMetadata: { title }
      }
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
