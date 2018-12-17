import Helmet from 'react-helmet';
import React from 'react';

import Constraint from '../../components/constraint';
import CountryTabs from '../../components/country-tabs';
import PersonsList from '../../components/persons-list';
import withLayout from '../../components/with-layout';
import withNavigation from '../../components/with-navigation';

import styles from './styles';

const Page = ({
  data: { countries, current, allPersons, personsByCountry, images, site },
  pathContext: { countryName, countrySlug }
}) => (
  <main>
    <Helmet>
      <title>
        {countryName} | {site.siteMetadata.title}
      </title>
    </Helmet>

    <style jsx>{styles}</style>

    <CountryTabs tabs={countries && countries.edges} />

    {current && (
      <Constraint>
        <h1 className="title">{current.edges[0].node.frontmatter.title}</h1>
        <div
          className="intro"
          dangerouslySetInnerHTML={{ __html: current.edges[0].node.html }}
        />
      </Constraint>
    )}

    <PersonsList
      persons={
        countrySlug !== 'all'
          ? personsByCountry && personsByCountry.edges
          : allPersons.edges
      }
      images={images}
      slug={countrySlug}
    />
  </main>
);

export default withNavigation(withLayout(Page));
