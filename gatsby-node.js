const fetch = require('node-fetch');
const path = require('path');
const remark = require('remark');
const remarkHtml = require('remark-html');
const slugify = require('slugify');

/**
 * Categories
 *
 * 22: Tunisia
 * 27: Egypt
 * 46: Ukraine
 * 66: sanctions
 */

const POSTS_WP_ENDPOINT =
  'https://cifar.eu/wp-json/wp/v2/posts/?per_page=3&categories=22,27,46,66';

const createSlug = text =>
  slugify(text, {
    lower: true
  });

const fetchNews = () => fetch(POSTS_WP_ENDPOINT).then(res => res.json());

const createStartpage = createPage =>
  fetchNews().then(news => {
    // eslint-disable-next-line no-console
    console.log('create page: /');

    createPage({
      path: '/',
      component: path.resolve('src/templates/home/index.jsx'),
      context: {
        news
      }
    });

    return null;
  });

const createReport = (graphql, createPage) =>
  graphql(`
    query {
      page: markdownRemark(
        fields: { folder: { eq: "pages" }, fileName: { eq: "report.md" } }
      ) {
        frontmatter {
          date
          author
          title
        }
        html
      }

      site: site {
        siteMetadata {
          title
        }
      }
    }
  `).then(({ errors, data }) => {
    if (errors) {
      return Promise.reject(errors);
    }

    const { page, site } = data;

    const replaceFootnotes = text => {
      let newText = text;
      const search = /#(.*)#/g;
      const matches = newText.match(search);
      const footnotes = [];

      if (matches) {
        matches.forEach((match, index) => {
          const footnote = match.split('#')[1];
          const number = index + 1;
          const link = `<a href="#footnote-${number}" id="footnote-link-${number}" class="footnote-link">[${number}]</a>`;

          footnotes.push({
            number,
            footnote
          });

          newText = newText.replace(match, link);
        });
      }

      return {
        text: newText,
        footnotes
      };
    };

    const { text: newText, footnotes } = replaceFootnotes(page.html);

    page.html = newText;

    // eslint-disable-next-line no-console
    console.log('create page: /report/');

    createPage({
      path: '/report/',
      component: path.resolve('src/templates/report/index.jsx'),
      context: {
        page,
        footnotes,
        site
      }
    });

    return null;
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
              slug
              title
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

    [...countries].forEach(
      ({
        node: {
          frontmatter: { slug: countrySlug, title }
        }
      }) => {
        const slug = createSlug(countrySlug || title);
        const pagePath = `/people/${slug}/`;

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
      }
    );

    return null;
  });

const createPersons = (graphql, createPage) =>
  graphql(`
    query {
      persons: allMarkdownRemark(
        filter: {
          frontmatter: { name: { ne: "" } }
          fields: { folder: { eq: "people" } }
        }
      ) {
        edges {
          node {
            frontmatter {
              sanctionsCountry
              name
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
          frontmatter: { name, sanctionsCountry: country }
        }
      }) => {
        const pagePath = `/people/${createSlug(country)}/${createSlug(name)}/`;

        // eslint-disable-next-line no-console
        console.log('create person', pagePath);

        createPage({
          path: pagePath,
          component: path.resolve('src/templates/person/index.jsx'),
          context: {
            name
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

  // parse frontmatter fields of persons to markdown
  if (node.internal.type === 'MarkdownRemark') {
    [
      'startOfSanctions',
      'suspectedOrConfirmedOverseasProperties',
      'estimatesOfAssetsFrozenOrConfiscated',
      'suspectedOrConfirmedLinksToBankAccounts'
    ].forEach(key => {
      if (node.frontmatter && node.frontmatter[key]) {
        // eslint-disable-next-line no-param-reassign
        node.frontmatter[key] = remark()
          .use(remarkHtml)
          .processSync(node.frontmatter[key])
          .toString();
      }
    });
  }
};

exports.createPages = ({ actions, graphql }) => {
  const { createPage, createRedirect } = actions;

  createRedirect({
    fromPath: '/people',
    toPath: '/people/all/',
    redirectInBrowser: true,
    isPermanent: true
  });

  return Promise.all([
    createCountries(graphql, createPage),
    createPersons(graphql, createPage),
    createReport(graphql, createPage),
    createStartpage(createPage)
  ]);
};
