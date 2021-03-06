// src/components/Pagination.js
import React from "react"
import { Link } from "gatsby"
import { listingURI } from "../../globals"

const Pagination = ({ pageNumber, hasNextPage }) => {
  if (pageNumber === 1 && !hasNextPage) return null

  return (
    <div style={{ margin: "60px auto 20px", textAlign: "center" }}>
      <div className="nav-links">
        {
          pageNumber > 1 && (
            <Link
              className="prev page-numbers"
              style={{
                padding: "8px 8px 5px 4px",
              }}
           to={pageNumber > 2 ? `${listingURI}/page/${pageNumber - 1}`: `${listingURI}/`}
            >
              ← <span> Previous</span>
            </Link>
          )
        }
          <span className="meta-nav screen-reader-text"></span>
          {pageNumber}

        {
          hasNextPage && (
            <Link
              style={{
                padding: "4px 8px 5px 8px",
              }}
              className="next page-numbers"
              to={`${listingURI}/page/${pageNumber + 1}`
              }
            >
              <span>Next </span> →
            </Link>
          )
        }
      </div>
    </div>
  )
}

export default Pagination