const path = require('path');
const slugify = require('slugify');

const createSlug = text =>
  slugify(text, {
    lower: true
  });

const createCountries = (graphql, createPage) =>
  graphql(`
    query {
      countries: allMarkdownRemark(
        filter: { fields: { folder: { eq: "countries" } } }
      ) {
        edges {
          node {
            frontmatter {
              title
              image
            }
          }
        }
      }
    }
  `).then(({ errors, data }) => {
    if (errors) {
      return Promise.reject(errors);
    }

    const countries = data.countries.edges;

    [...countries].forEach(({ node: { frontmatter: { title } } }) => {
      const slug = createSlug(title);
      const pagePath = `/persons/${slug}/`;

      // eslint-disable-next-line no-console
      console.log('create country', pagePath);

      createPage({
        path: pagePath,
        component: path.resolve('src/templates/country/index.jsx'),
        context: {
          countryName: title,
          countrySlug: slug
        }
      });
    });

    return null;
  });

const createPersons = (graphql, createPage) =>
  graphql(`
    query {
      persons: allMarkdownRemark(
        filter: { fields: { folder: { eq: "persons" } } }
      ) {
        edges {
          node {
            frontmatter {
              country
              title
              image
            }
          }
        }
      }
    }
  `).then(({ errors, data }) => {
    if (errors) {
      return Promise.reject(errors);
    }

    const persons = data.persons.edges;

    [...persons].forEach(
      ({
        node: {
          frontmatter: { title, country, image }
        }
      }) => {
        const pagePath = `/persons/${createSlug(country)}/${createSlug(
          title
        )}/`;
        const imageFileName = path.basename(image);

        // eslint-disable-next-line no-console
        console.log('create person', pagePath);

        createPage({
          path: pagePath,
          component: path.resolve('src/templates/person/index.jsx'),
          context: {
            title,
            imageFileName
          }
        });
      }
    );

    return null;
  });

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
  const { createPage, createRedirect } = actions;

  createRedirect({
    fromPath: '/persons',
    toPath: '/persons/all',
    redirectInBrowser: true,
    isPermanent: true
  });

  createPage({
    path: '/persons/all',
    component: path.resolve('src/templates/country/all.jsx')
  });

  return Promise.all([
    createCountries(graphql, createPage),
    createPersons(graphql, createPage)
  ]);
};
