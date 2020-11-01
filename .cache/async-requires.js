// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("./../../dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-using-typescript-tsx": () => import("./../../../src/pages/using-typescript.tsx" /* webpackChunkName: "component---src-pages-using-typescript-tsx" */),
  "component---src-templates-page-index-js": () => import("./../../../src/templates/page/index.js" /* webpackChunkName: "component---src-templates-page-index-js" */),
  "component---src-templates-post-index-js": () => import("./../../../src/templates/post/index.js" /* webpackChunkName: "component---src-templates-post-index-js" */),
  "component---src-templates-post-listing-js": () => import("./../../../src/templates/post/listing.js" /* webpackChunkName: "component---src-templates-post-listing-js" */)
}

