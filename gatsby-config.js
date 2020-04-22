module.exports = {
  siteMetadata: {
    title: `どんどこすすむのホームページ`,
    description: `どんどこすすむ公式ホームページ`,
    author: `@dondoko_susumu`,
    siteURL: 'https://xn--28jma5da5l6e.com',
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
        name: `どんどこすすむのホームページ`,
        short_name: `どんどこのHP`,
        lang: `ja`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#000`,
        display: `browser`,
        icon: `src/images/dondoko-icon.png`, // This path is relative to the root of the site.
        localize: [
          {
            start_url: `/en/`,
            lang: `en`,
            name: `Dondoko Susumu's Web Site`,
            short_name: `Dondoko Web`,
            description: `Dondoko Susumu's Official Web Site.`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-91753467-4",
      },
    },    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
