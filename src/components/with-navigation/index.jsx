import React, { Fragment } from 'react';

import Footer from '../footer';
import Navigation from '../navigation';

const withNavigation = Page => props => (
  <Fragment>
    <Navigation items={[1, 2, 3]} />
    <Page {...props} />
    <Footer />
  </Fragment>
);

export default withNavigation;
