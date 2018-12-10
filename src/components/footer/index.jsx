import React from 'react';

import Constraint from '../constraint';

import LogoIcon from '../../static/cifar-logo.svg';
import styles, { logoStyles } from './styles';

export default () => (
  <footer>
    <style jsx>{styles}</style>
    {logoStyles.styles}

    <Constraint>
      <h4>
        <a href="https://cifar.eu/impressum/">Imprint</a>
      </h4>

      <div className="columns">
        <div className="column column--logo">
          <LogoIcon className={logoStyles.className} />
        </div>

        <ul className="columns">
          <li className="column">
            <span className="label">Editorial</span>
            <a href="https://cifar.eu/" className="link">
              cifar.eu
            </a>
          </li>

          <li className="column">
            <span className="label">Design &amp; Development</span>
            <a href="https://zoff-kollektiv.net/" className="link">
              Zoff
            </a>
          </li>

          <li className="column">
            <span className="label">Contact</span>
            <a href="mailto:info@cifar.eu" className="link">
              info@cifar.eu
            </a>
          </li>
        </ul>
      </div>
    </Constraint>
  </footer>
);
