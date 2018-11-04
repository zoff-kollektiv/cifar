const path = require('path');
const slugify = require('slugify');

const createSlug = text => slugify(text, {
  lower: true
});

const createCountries = (graphql, createPage) => {
  return graphql(`
    query AllCountries {
      allMarkdownRemark(filter: { fields: { folder: { eq: "countries" } } }) {
        edges {
          node {
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)
    .then(({ errors, data }) => {
      if (errors) {
        return Promise.reject(errors);
      }

      const countries = data.allMarkdownRemark.edges;

      [...countries, { node: { frontmatter: { title: 'All' }}}].forEach(({ node: { frontmatter: { title }} }) => {
        const pagePath = `/persons/${createSlug(title)}/`;

        console.log('create country', pagePath);

        createPage({
          path: pagePath,
          component: path.resolve('src/templates/country/index.jsx'),
          context: {
            countryName: title
          }
        });
      });
    });
};

const createPersons = (graphql, createPage) => {
  return graphql(`
    query AllPersons {
      allMarkdownRemark(filter: { fields: { folder: { eq: "persons" } } }) {
        edges {
          node {
            frontmatter {
              country
              title
            }
          }
        }
      }
    }
  `)
    .then(({ errors, data }) => {
      if (errors) {
        return Promise.reject(errors);
      }

      const persons = data.allMarkdownRemark.edges;

      [...persons].forEach(({ node: { frontmatter: { title, country } } }) => {
        const pagePath = `/persons/${createSlug(country)}/${createSlug(title)}/`;

        console.log('create person', pagePath);

        createPage({
          path: pagePath,
          component: path.resolve('src/templates/person/index.jsx')
        });
      });
    });
};

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const absPath = node.fileAbsolutePath.split('/');
    const folder = absPath[absPath.length - 2];
    const fileName = absPath[absPath.length - 1];

    createNodeField({
      node,
      name: 'fileName',
      value: fileName
    });

    createNodeField({
      node,
      name: 'folder',
      value: folder
    });
  }
};

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return Promise.all([
    createCountries(graphql, createPage),
    createPersons(graphql, createPage)
  ]);
};
