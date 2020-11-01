// src/templates/posts/data.js
const PostTemplateFragment = `
  fragment PostTemplateFragment on WpPost {
    id
    databaseId
    title
    content
    link
    featuredImage {
      node {
        sourceUrl
      }
    }
    categories {
      nodes {
        name
        slug
        id
      }
    }
    tags {
      nodes {
        slug
        name
        id
      }
    }
    author {
      node {
        name
        slug
      }
    }
  }
`

const ListingPreviewFragment = `
  fragment ListingPreviewFragment on WpPost {
    id
    databaseId
    title
    uri
    date
    slug
    excerpt
    content
    featuredImage {
      node {
        sourceUrl
      }
    }
    author {
      node {
        name,
        slug,
      }
    }
  }
`

module.exports.PostTemplateFragment = PostTemplateFragment
module.exports.ListingPreviewFragment = ListingPreviewFragment