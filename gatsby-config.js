module.exports = {
  siteMetadata: {
    title: 'Default title',
  },

  plugins: [
    'gatsby-plugin-netlify-cms',

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/data/`,
      },
    },

    'gatsby-transformer-remark',
    'gatsby-plugin-styled-jsx',
  ]
};
