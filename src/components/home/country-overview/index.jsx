import React from 'react';

import Constraint from '../../constraint';
import Cta from '../../cta';

import styles from './styles';

export default ({
  missionStatement,
  missionStatementSecond,
  buttonLabel,
  buttonLink
}) => (
  <section>
    <style jsx>{styles}</style>

    <Constraint>
      <p className="intro">{missionStatement}</p>

      <p className="outro">{missionStatementSecond}</p>

      <Cta href={buttonLink} label={buttonLabel} />
    </Constraint>
  </section>
);
