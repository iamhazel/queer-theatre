// create/createPosts.js
const {
  PostTemplateFragment,
  ListingPreviewFragment,
} = require("../src/templates/post/data.js")

const { listingURI } = require("../globals.js")

const postTemplate = require.resolve("../src/templates/post/index.js")
const listingTemplate = require.resolve("../src/templates/post/listing.js")

const GET_POSTS = `
  # Here we make use of the imported fragments which are referenced above
  ${PostTemplateFragment}
  ${ListingPreviewFragment}
  query GET_POSTS($first: Int, $after: String) {
      allWpPost(where: {parent: "null"}, first: $first, after: $after) {
        nodes {
          id
          title
          databaseId
          content
          uri
        }
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
      }
  }
`



// create/createPosts.js
// Previous code excluded

const allPosts = []
const listingPages = [];
let pageNumber = 0;
const itemsPerPage = 10;

/** This is the export which Gatbsy will use to process.
 * @param { actions, graphql }
 * @returns {Promise<void>} */
module.exports = async ({ actions, graphql, reporter }, options) => {

  /** This is the method from Gatsby that we're going
   * to use to create posts in our static site */
  const { createPage } = actions

  /** Fetch posts method. This accepts variables to alter
   * the query. The variable `first` controls how many items to
   * request per fetch and the `after` controls where to start in
   * the dataset.
   * @param variables
   * @returns {Promise<*>} */
  const fetchPosts = async (variables) =>
    /** Fetch posts using the GET_POSTS query and the variables passed in */
    await graphql(GET_POSTS, variables).then(({ data }) => {
      /** Extract the data from the GraphQL query results */
      const {
          allWpPost: {
            nodes,
            pageInfo: { hasNextPage, hasPreviousPage },
          },
      } = data

      /** Define the path for the paginated listing page.
       * This is the url the page will live at
       * @type {string} */
      const listingPagePath = !variables.after
        ? `${listingURI}/`
        : `${listingURI}/page/${pageNumber + 1}`

      /** Add config for the listingPage to the listingPage array for creating later
       * @type {{
       *   path: string,
       *   component: string,
       *   context: {nodes: *, pageNumber: number, hasNextPage: *} }} */
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

      /** Once we're done, return all the posts so we can
       * create the necessary posts with all the data on hand */
      return allPosts
    })

  /** Kick off our `fetchPosts` method which will get us all
   * the posts we need to create individual posts */
  await fetchPosts({ first: itemsPerPage, after: null }).then((wpPosts) => {

    wpPosts && wpPosts.map((post) => {
      /** Build post path based of theme listingURI setting */
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