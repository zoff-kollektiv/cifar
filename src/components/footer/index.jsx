import React from 'react';

import Constraint from '../constraint';

import styles from './styles';

export default () => (
  <footer>
    <style jsx>{styles}</style>

    <Constraint>
      <h4>
        <a href="https://cifar.eu/impressum/">Imprint</a>
      </h4>

      <ul className="columns">
        <li>
          <span className="label">Editorial</span>
          <a href="https://cifar.eu/" className="link">
            cifar.eu
          </a>
        </li>

        <li>
          <span className="label">Design &amp; Development</span>
          <a href="https://zoff-kollektiv.net/" className="link">
            Zoff
          </a>
        </li>

        <li>
          <span className="label">Contact</span>
          <a href="mailto:info@cifar.eu" className="link">
            info@cifar.eu
          </a>
        </li>
      </ul>
    </Constraint>
  </footer>
);
