import React, { Fragment } from 'react';

import Navigation from '../navigation';

const withNavigation = Page => props => (
  <Fragment>
    <Navigation items={[1, 2, 3]} />
    <Page {...props} />
  </Fragment>
);

export default withNavigation;
