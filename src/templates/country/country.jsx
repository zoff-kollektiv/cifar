import React, { Fragment } from 'react';

import Constraint from '../../components/constraint';
import CountryTabs from '../../components/country-tabs';
import PersonsList from '../../components/persons-list';
import withLayout from '../../components/with-layout';
import withNavigation from '../../components/with-navigation';

const Page = ({
  data: { countries, current, persons, images },
  pathContext: { countrySlug }
}) => (
  <Fragment>
    <CountryTabs tabs={countries && countries.edges} />

    {current && (
      <Constraint>
        <h1>{current.edges[0].node.frontmatter.title}</h1>
        <p>{current.edges[0].node.rawMarkdownBody}</p>
      </Constraint>
    )}

    {persons && persons.edges && (
      <PersonsList persons={persons.edges} images={images} slug={countrySlug} />
    )}
  </Fragment>
);

export default withNavigation(withLayout(Page));
