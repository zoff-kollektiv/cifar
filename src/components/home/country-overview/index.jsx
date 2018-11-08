import Link from 'gatsby-link';
import React from 'react';

import Constraint from '../../constraint';

import styles from './styles';

export default () => (
  <section>
    <style jsx>{styles}</style>

    <Constraint>
      <p className="intro">
        Kleptocrats steal billions of Euros from their citizens every year. The
        European Union is trying to help the people of Tunisia, Egypt and
        Ukraine by freezing the assets of the corrupt people who ruled them.
      </p>

      <p className="outro">
        We are documenting the persons under sanction and analyzing sanctions as
        a tool against corruption.
      </p>

      <Link to="/persons/all">See who is affected</Link>
    </Constraint>
  </section>
);
