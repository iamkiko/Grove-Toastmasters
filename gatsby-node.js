const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  //1. Get path to template
  const newsTemplate = path.resolve("./src/templates/news.js")

  //2. Get markdown data
  const res = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  //3. Create new pages
  res.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      component: newsTemplate,
      path: `/news/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
