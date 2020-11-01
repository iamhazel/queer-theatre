// src/components/PostEntry.js
import React from "react"
import { Link } from "gatsby"
import Image from "./image"
import { listingURI } from "../../globals"

const PostEntry = ({ post }) => {
  const { uri, title, featuredImage, excerpt } = post
  return (
    <div style={{ marginBottom: "30px" }}>
      <header>
        <Link to={`${listingURI}${uri}`}>
          <span style={{ marginBottom: "5px", fontSize:"1.3rem" }}>{title}</span>
          <Image image={featuredImage} style={{ margin: 0 }}/>
        </Link>
      </header>

      <div dangerouslySetInnerHTML={{ __html: excerpt }}/>
    </div>
  )
}

export default PostEntry