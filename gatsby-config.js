module.exports = {
  siteMetadata: {
    title: `COVID19 Info App`,
    description: `Web app that show the global impact of the COVID19 virus with stats and more.`,
    author: `@_rubenr`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/ico-world.png`,
      },
    },
    "gatsby-plugin-react-leaflet",
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: ["src/scss/bootstrap"],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-156169940-2",
      },
    },
  ],
}
