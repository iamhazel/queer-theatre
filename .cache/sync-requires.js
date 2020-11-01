const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/hazel/gatsby/queer-theatre/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/hazel/gatsby/queer-theatre/src/pages/404.js"))),
  "component---src-pages-using-typescript-tsx": hot(preferDefault(require("/home/hazel/gatsby/queer-theatre/src/pages/using-typescript.tsx"))),
  "component---src-templates-page-index-js": hot(preferDefault(require("/home/hazel/gatsby/queer-theatre/src/templates/page/index.js"))),
  "component---src-templates-post-index-js": hot(preferDefault(require("/home/hazel/gatsby/queer-theatre/src/templates/post/index.js"))),
  "component---src-templates-post-listing-js": hot(preferDefault(require("/home/hazel/gatsby/queer-theatre/src/templates/post/listing.js")))
}

