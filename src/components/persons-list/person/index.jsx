import { graphql } from 'gatsby';
import Link from 'gatsby-link';
import React, { Fragment } from 'react';

import createSlug from '../../../lib/create-slug';

export default ({ frontmatter: { country, title } }) => <Fragment>
  <h2>
    <Link to={`/persons/${createSlug(country)}/${createSlug(title)}/`}>
      {title}
    </Link>
  </h2>
</Fragment>;

export const fragment = graphql`
  fragment personsList on MarkdownRemarkConnection {
    edges {
      node {
        frontmatter {
          country
          title
        }
      }
    }
  }
`;
