import { graphql } from 'gatsby';
import Link from 'gatsby-link';
import React from 'react';

import Block from '../block';
import Cta from '../../cta';

import createSlug from '../../../lib/create-slug';
import styles, { countryStyles } from './styles';

export default ({
  countries,
  rawMarkdownBody,
  frontmatter: { title, buttonLabel, buttonLink }
}) => (
  <Block>
    <style jsx>{styles}</style>
    {countryStyles.styles}

    <p className="intro">{title}</p>

    <ul className="countries">
      {countries.map(({ node: { frontmatter: { title: countryTitle } } }) => (
        <li className="country-container">
          <Link
            to={`/persons/${createSlug(countryTitle)}/`}
            className={countryStyles.className}
          >
            {countryTitle}
          </Link>
        </li>
      ))}
    </ul>

    <p className="outro">{rawMarkdownBody}</p>

    <Cta href={buttonLink} label={buttonLabel} />
  </Block>
);

export const fragment = graphql`
  fragment missionStatement on MarkdownRemark {
    rawMarkdownBody
    frontmatter {
      buttonLabel
      buttonLink
      title
    }
  }
`;
