import type { GatsbyConfig, PluginRef } from "gatsby"
import "dotenv/config"

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

const config: GatsbyConfig = {
  siteMetadata: {
    // You can overwrite values here that are used for the SEO component
    // You can also add new values here to query them like usual
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-cara/gatsby-config.mjs
    siteTitle: `The Amitesh Tripathi`,
    siteTitleAlt: `Amitesh Tripathi - Data Engineer - Portfolio Website`,
    siteHeadline: `Amitesh Tripathi - Data Engineer - Portfolio Website`,
    siteUrl: `https://theamiteshtripathi.com`,
    siteDescription: `Portfolio website of Amitesh Tripathi Data Engineer`,
    siteImage: `/banner.jpg`,
    siteLanguage: `en`,
    author: `@theamiteshtripathi`,
  },
  trailingSlash: `never`,
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      // See the theme's README for all available options
      options: {},
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Amitesh Tripathi - Data Engineer - Portfolio Website`,
        short_name: `Amitesh Tripathi`,
        description: `Portfolio website of Amitesh Tripathi, a Data Engineer.`,
        start_url: `/`,
        background_color: `#141821`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#f6ad55`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean) as Array<PluginRef>,
}

export default config
