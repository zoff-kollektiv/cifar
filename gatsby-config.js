module.exports = {
  siteMetadata: {
    title: 'EU sanctions watch',
    twitter: 'https://twitter.com/CiFAR_EU',
    facebook: 'https://www.facebook.com/civilforumAR/'
  },

  plugins: [
    'gatsby-plugin-netlify',

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/data/`
      }
    },

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'countries',
        path: `${__dirname}/data/countries`
      }
    },

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'home',
        path: `${__dirname}/data/home`
      }
    },

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/data/pages`
      }
    },

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'uploads',
        path: `${__dirname}/static/media`
      }
    },

    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /static/
        }
      }
    },

    'gatsby-transformer-remark',
    'gatsby-plugin-styled-jsx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet'
  ]
};
