module.exports = {
  siteMetadata: {
    title: `The Routing Company`,
    siteUrl: `https://theroutingcompany.com/`,
    description: `Transportation that moves with you`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Poppins`, `Mulish`],
        display: "swap",
      },
    },
  ],
}
