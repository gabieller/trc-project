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
        fonts: [`Poppins`, `Mulish`, `Roboto`],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://gmail.us7.list-manage.com/subscribe/post?u=c53f03f20d87a33cadfdaab38&amp;id=e39f7c1976",
      },
    },
  ],
}
