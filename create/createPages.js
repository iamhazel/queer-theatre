const pageTemplate = require.resolve("../src/templates/page/index.js")

const GET_PAGES = `
  query GET_PAGES {
    allWpPage {
      nodes {
        id
        title
        databaseId
        uri
        isFrontPage
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
    }
  }
`

const allPages = []
let pageNumber = 0
const itemsPerPage = 5

module.exports = async ({ actions, graphql, reporter }, options) => {

  const { createPage } = actions

  const fetchPages = async (variables) =>
    await graphql(GET_PAGES, variables).then(({ data }) => {

      const {
          allWpPage: {
            nodes,
            pageInfo: { 
              hasNextPage, 
              hasPreviousPage 
            },
          },
      } = data

      nodes
      && nodes.map((pages) => {
        allPages.push(pages)
      })

      if (hasNextPage) {
        pageNumber++
        reporter.info(`fetch page ${pageNumber} of pages...`)
        return fetchPages({ first: itemsPerPage, after: hasPreviousPage })
      }

      return allPages
    }
  )

  await fetchPages({ first: itemsPerPage, after: null }).then((wpPages) => {

    wpPages && wpPages.map((page) => {
      let pagePath = `${page.uri}`

      if(page.isFrontPage) {
        pagePath = '/'
      }

      createPage({
        path: pagePath,
        component: pageTemplate,
        context: {
          page: page,
        },
      })

      reporter.info(`page created: ${page.uri}`)
    })

    reporter.info(`# -----> PAGES TOTAL: ${wpPages.length}`)
  })
}