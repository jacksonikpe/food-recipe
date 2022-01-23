/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Delight Recipes",
    description: "Nice and clean recipes site",
    author: "@jackson",
    person: { name: "jackson", age: 24 },
    simpleData: ["item 1", "item 2"],
    complexData: [
      { name: "jackson", age: 24 },
      { name: "steve", age: 23 },
    ],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `qytvk2q187r0`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONSTENTFUL_API_KEY,
      },
    },
  ],
}
