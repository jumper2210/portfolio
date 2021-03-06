module.exports = {
  siteMetadata: {
    title: `Krzysztof Skoczek | Portfolio`,
    description: `It's Portfolio made with Gatsby and TypeScript by Krzysztof Skoczek - Front End | React Developer.`,
    author: `@jumper2210`,
    url: `http://skoczekk.pl/`,
    language: "en",
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/layouts/index.tsx`),
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Poppins:300,400,500,600,700`, "Kalam: 400,700"],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
        plugins: [`gatsby-transformer-json`],
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

        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `./src/assets/images/Logo.png`,
      },
    },
  ],
}
