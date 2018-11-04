import React from 'react';

import Constraint from '../../components/constraint';
import withLayout from '../../components/with-layout';
import withNavigation from '../../components/with-navigation';

const Page = () => <Constraint>Single Person view</Constraint>;

export default withNavigation(withLayout(Page));
