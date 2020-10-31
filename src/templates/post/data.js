// src/templates/posts/data.js
const PostTemplateFragment = `
  fragment PostTemplateFragment on WpPost {
    id
    postId
    title
    content
    link
    featuredImage {
      sourceUrl
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
      name
      slug
    }
  }
`

const ListingPreviewFragment = `
  fragment ListingPreviewFragment on WpPost {
    id
    postId
    title
    uri
    date
    slug
    excerpt
    content
    featuredImage {
      sourceUrl
    }
    author {
      name
      slug
    }
  }
`

module.exports.PostTemplateFragment = PostTemplateFragment
module.exports.ListingPreviewFragment = ListingPreviewFragment