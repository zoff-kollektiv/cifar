import { graphql } from 'gatsby';
import React from 'react';

import Block from '../block';
import Cta from '../../cta';

import styles from './styles';

export default ({
  rawMarkdownBody,
  frontmatter: { title, buttonLabel, buttonLink }
}) => (
  <Block>
    <style jsx>{styles}</style>

    <p className="intro">{title}</p>

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
