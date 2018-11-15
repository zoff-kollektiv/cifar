import React from 'react';

import Constraint from '../../constraint';
import Cta from '../../cta';

export default ({ title, intro, buttonLink, buttonLabel }) => (
  <section>
    <Constraint>
      <h2>{title}</h2>
      <p>{intro}</p>

      <Cta href={buttonLink} label={buttonLabel} />
    </Constraint>
  </section>
);
