import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Constraint from '../constraint';

import FacebookIcon from '../../static/facebook-f.svg';
import LogoIcon from '../../static/cifar-logo.svg';
import TwitterIcon from '../../static/twitter.svg';
import styles, { logoStyles, socialStyles } from './styles';

export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            twitter
            facebook
          }
        }
      }
    `}
    render={({
      site: {
        siteMetadata: { twitter, facebook }
      }
    }) => (
      <footer>
        <style jsx>{styles}</style>
        {logoStyles.styles}
        {socialStyles.styles}

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
                <span className="label">Contact</span>
                <a href="mailto:info@cifar.eu" className="link">
                  info@cifar.eu
                </a>

                <span className="label">Follow us on</span>
                <div className="social-container">
                  <a href={twitter} className="link" aria-label="Twitter">
                    <TwitterIcon className={socialStyles.className} />
                  </a>

                  <a href={facebook} className="link" aria-label="Facebook">
                    <FacebookIcon className={socialStyles.className} />
                  </a>
                </div>
              </li>

              <li className="column">
                <span className="label">Design &amp; Development</span>
                <a href="https://zoff-kollektiv.net/" className="link">
                  Zoff
                </a>
              </li>

              <li className="column">
                <span className="label">Editorial</span>
                <a href="https://cifar.eu/" className="link">
                  cifar.eu
                </a>
              </li>
            </ul>
          </div>
        </Constraint>
      </footer>
    )}
  />
);
