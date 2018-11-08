import React, { Fragment } from 'react';

import CountryTabs from '../../components/country-tabs';
import PersonsList from '../../components/persons-list';
import withLayout from '../../components/with-layout';
import withNavigation from '../../components/with-navigation';

const Page = ({ countries, persons, images }) => (
  <Fragment>
    <CountryTabs tabs={countries && countries.edges} />
    {persons && persons.edges && (
      <PersonsList persons={persons.edges} images={images} />
    )}
  </Fragment>
);

export default withNavigation(withLayout(Page));
