// create/createPosts.js
// const {
//   PostTemplateFragment,
//   ListingPreviewFragment,
// } = require("../src/templates/post/data.js")

const { listingURI } = require("../globals.js")

const postTemplate = require.resolve("../src/templates/post/index.js")
const listingTemplate = require.resolve("../src/templates/post/listing.js")

const GET_POSTS = `
  # Here we make use of the imported fragments which are referenced above

  query GET_POSTS {
      allWpPost {
        nodes {
          id
          title
          databaseId
          content
          excerpt
          uri
        }
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
      }
  }
`

const allPosts = []
const listingPages = [];
let pageNumber = 0;
const itemsPerPage = 10;

module.exports = async ({ actions, graphql, reporter }, options) => {

  const { createPage } = actions

  const fetchPosts = async (variables) =>
    await graphql(GET_POSTS, variables).then(({ data }) => {

      const {
          allWpPost: {
            nodes,
            pageInfo: { 
              hasNextPage, 
              hasPreviousPage 
            },
          },
      } = data

      const listingPagePath = !variables.after
        ? `${listingURI}/`
        : `${listingURI}/page/${pageNumber + 1}`

      listingPages[pageNumber] = {
        path: listingPagePath,
        component: listingTemplate,
        context: {
          nodes,
          pageNumber: pageNumber + 1,
          hasNextPage,
          itemsPerPage,
          allPosts,
        },
      }

      /** Map over the posts for later creation */
      nodes
      && nodes.map((posts) => {
        allPosts.push(posts)
      })

     /** If there's another post, fetch more so we can have all the data we need */
      if (hasNextPage) {
        pageNumber++
        reporter.info(`fetch post ${pageNumber} of posts...`)
        return fetchPosts({ first: itemsPerPage, after: hasPreviousPage })
      }

      return allPosts
    })

  /** Kick off our `fetchPosts` method which will get us all
   * the posts we need to create individual posts */
  await fetchPosts({ first: itemsPerPage, after: null }).then((wpPosts) => {

    wpPosts && wpPosts.map((post) => {
      const path = `${listingURI}${post.uri}`

      createPage({
        path: path,
        component: postTemplate,
        context: {
          post: post,
        },
      })

      reporter.info(`post created:  ${path}`)
    })

    reporter.info(`# -----> POSTS TOTAL: ${wpPosts.length}`)

    /** Map over the `listingPages` array to create the
     * paginated listing pages */
    listingPages
    && listingPages.map((listingPage) => {
      if (listingPage.context.pageNumber === 1) {
        listingPage.context.publisher = true;
        listingPage.context.label = listingPage.path.replace('/', '');
      }
      createPage(listingPage);
      reporter.info(`created listing archive page ${listingPage.context.pageNumber}`);
    });
  })
}