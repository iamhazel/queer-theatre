// src/templates/post/listing.js
import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import PostEntry from "../../components/post-entry"
import Pagination from "../../components/pagination"

const Listing = ({ pageContext }) => {
  const { nodes, pageNumber, hasNextPage, itemsPerPage, allPosts }
  = pageContext

  return (
    <Layout>
      <SEO
        title="Article Listing"
        description="Listing of all published articles and posts"
        keywords={[`blog`, 'listing', 'posts']}
      />
      
      {nodes && nodes.map(post => <PostEntry key={post.postId}
        post={post}/>)}

      <Pagination
        pageNumber={pageNumber}
        hasNextPage={hasNextPage}
        allPosts={allPosts}
        itemsPerPage={itemsPerPage}
      />
    </Layout>
  )
}

export default Listing