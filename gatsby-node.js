const fetch = require('node-fetch');
const path = require('path');
const remark = require('remark');
const remarkHtml = require('remark-html');
const slugify = require('slugify');
const xregexp = require('xregexp');

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

const createStartpage = (graphql, createPage) =>
  Promise.all([
    fetchNews(),
    graphql(`
      query {
        missionStatement: markdownRemark(
          fields: {
            folder: { eq: "home" }
            fileName: { eq: "mission-statement" }
          }
        ) {
          rawMarkdownBody
          frontmatter {
            buttonLabel
            buttonLink
            countriesTitle
            title
          }
        }

        countries: allMarkdownRemark(
          filter: {
            fields: { fileName: { ne: "all" }, folder: { eq: "countries" } }
          }
          sort: { fields: [frontmatter___title] }
        ) {
          edges {
            node {
              frontmatter {
                title
              }
            }
          }
        }

        blocks: allMarkdownRemark(
          filter: {
            fields: {
              folder: { eq: "home" }
              fileName: { in: ["effectiveness", "private-sector", "sanctions"] }
            }
          }
          sort: { fields: [frontmatter___sort] }
        ) {
          edges {
            node {
              html
              frontmatter {
                buttonLabel
                buttonLink
                checklist {
                  text
                  icon
                }
                title
              }
            }
          }
        }

        site {
          siteMetadata {
            title
          }
        }
      }
    `)
  ]).then(([news, data]) => {
    // eslint-disable-next-line no-console
    console.log('create page: /');

    createPage({
      path: '/',
      component: path.resolve('src/templates/home/index.jsx'),
      context: {
        news,
        ...data
      }
    });

    return null;
  });

// eslint-disable-next-line no-unused-vars
const createReport = (graphql, createPage) =>
  graphql(`
    query {
      page: markdownRemark(
        fields: { folder: { eq: "pages" }, fileName: { eq: "report" } }
      ) {
        frontmatter {
          date
          author
          title
          downloadTitle
          downloadLink
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
      let index = 1;
      const footnotes = [];
      const newText = xregexp.replace(text, /##(.*?)##/gm, match => {
        const footnote = match.split('##')[1];
        const link = `<a href="#footnote-${index}" id="footnote-link-${index}" class="footnote-link">${index}</a>`;

        footnotes.push({
          index,
          footnote
        });

        index += 1;

        return link;
      });

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
    const fileName = absPath[absPath.length - 1].split('.');

    createNodeField({
      node,
      name: 'fileName',
      value: fileName[0]
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
      'suspectedOrConfirmedLinksToBankAccounts',
      'suspectedOrConfirmedLinksToLegalEntities',
      'suspectedOrConfirmedLinksToOtherAssets',
      'estimatesOfAssetsReturned'
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
    createStartpage(graphql, createPage)
  ]);
};
