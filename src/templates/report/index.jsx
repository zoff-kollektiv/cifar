import React from 'react';

import Report from '../../components/report';
import withLayout from '../../components/with-layout';
import withNavigation from '../../components/with-navigation';

const Page = ({ pageContext: { site, page } }) => (
  <Report site={site} {...page} />
);

export default withNavigation(withLayout(Page));
