import { graphql } from 'gatsby';
import Link from 'gatsby-link';
import React from 'react';

import Block from '../block';
import Cta from '../../cta';

import countryShapes from '../../country-shapes';

import createSlug from '../../../lib/create-slug';
import styles, { countryStyles, countryShapeStyles } from './styles';

export default ({
  countries,
  rawMarkdownBody,
  frontmatter: { title, countriesTitle, buttonLabel, buttonLink }
}) => (
  <Block>
    <style jsx>{styles}</style>
    {countryStyles.styles}
    {countryShapeStyles.styles}

    <p className="intro">{title}</p>

    <small className="countries-title">{countriesTitle}</small>

    <ul className="countries">
      {countries.map(({ node: { frontmatter: { title: countryTitle } } }) => (
        <li
          className={`country-container country-container--for-${createSlug(
            countryTitle
          )}`}
        >
          <Link
            to={`/persons/${createSlug(countryTitle)}/`}
            className={countryStyles.className}
          >
            {countryShapes[createSlug(countryTitle)]({
              className: countryShapeStyles.className
            })}
            <span className="country-title">{countryTitle}</span>
          </Link>
        </li>
      ))}
    </ul>

    <p className="outro">{rawMarkdownBody}</p>

    <Cta href={buttonLink} label={buttonLabel} theme="light" />
  </Block>
);

export const fragment = graphql`
  fragment missionStatement on MarkdownRemark {
    rawMarkdownBody
    frontmatter {
      buttonLabel
      buttonLink
      countriesTitle
      title
    }
  }
`;
