module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en'
      }
    },
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Open Sans`,
            variants: [`200`, `400`, `600`]
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {}
    },
    'gatsby-plugin-offline'
  ]
};
