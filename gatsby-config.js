module.exports = {
  siteMetadata: {
    title: 'Default title',
  },

  plugins: [
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-netlify',

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/data/pages/`,
      },
    },

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'persons',
        path: `${__dirname}/data/persons/`,
      },
    },

    'gatsby-transformer-remark'
  ]
};
