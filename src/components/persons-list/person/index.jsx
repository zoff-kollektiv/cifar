import { graphql } from 'gatsby';
import Link from 'gatsby-link';
import React from 'react';

import createSlug from '../../../lib/create-slug';
import styles from './styles';

export default ({ frontmatter: { country, title, role } }) => (
  <li className="person">
    <style jsx>{styles}</style>

    <figure className="image" />

    <h2 className="title">
      <Link to={`/persons/${createSlug(country)}/${createSlug(title)}/`}>
        {title}

        <small className="role">{role}</small>
      </Link>
    </h2>
  </li>
);

export const fragment = graphql`
  fragment personsList on MarkdownRemarkConnection {
    edges {
      node {
        frontmatter {
          country
          title
          role
        }
      }
    }
  }
`;
