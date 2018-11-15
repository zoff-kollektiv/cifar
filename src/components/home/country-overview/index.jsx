import React from 'react';

import Block from '../block';
import Cta from '../../cta';

import styles from './styles';

export default ({
  missionStatement,
  missionStatementSecond,
  buttonLabel,
  buttonLink
}) => (
  <Block>
    <style jsx>{styles}</style>

    <p className="intro">{missionStatement}</p>

    <p className="outro">{missionStatementSecond}</p>

    <Cta href={buttonLink} label={buttonLabel} />
  </Block>
);
