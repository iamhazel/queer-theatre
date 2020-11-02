const path = require(`path`)
const slash = require(`slash`)

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
// Will create pages for WordPress posts (route : /blog/{slug})
// Will create pages for WordPress projects (route : /projects/{slug})
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const posts = await graphql(`
    {
      allWpPost(filter: {categories: {nodes: {elemMatch: {name: {eq: "Productions"}}}}}) {
        edges {
          node {
            id
            databaseId
            slug
          }
        }
      }
    }
  `
)

  // Check for any errors
  if (posts.errors) {
    throw new Error(posts.errors)
  }

  // Access query posts via object destructuring
  const { allWpPost } = posts.data

  const productionTemplate = path.resolve(`./src/templates/events/singleProduction.js`)
  // We want to create a detailed page for each
  // post node. We'll just use the WordPress Slug for the slug.
  // The Post ID is prefixed with 'POST_'
  allWpPost.edges.forEach(edge => {
    createPage({
      path: `${edge.node.slug}/`,
      component: slash(productionTemplate),
      context: {
        id: edge.node.id,
        postId: edge.node.databaseId,
      },
    })
  })
}