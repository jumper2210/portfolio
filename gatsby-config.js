module.exports = {
  siteMetadata: {
    title: `Krzysztof Skoczek | Portfolio`,
    description: `It's Portfolio made with Gatsby and TypeScript by Krzysztof Skoczek - Front End | React Developer.`,
    author: `@jumper2210`,
    language: "en",
    url: "https://krzysztof-skoczek.netlify.app/",
    previewImage: "",
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-json`,
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
        name: `data`,
        path: `${__dirname}/src/data`,
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
