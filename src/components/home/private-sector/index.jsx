import React from 'react';

import Block from '../block';
import Cta from '../../cta';

export default ({ title, intro, buttonLink, buttonLabel }) => (
  <Block theme="white">
    <h2>{title}</h2>
    <p>{intro}</p>

    <Cta href={buttonLink} label={buttonLabel} />
  </Block>
);
