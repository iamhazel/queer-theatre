import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";

import Layout from "../../components/layout";

export default function SingleProduction({ data }) {
  const post = data.wpPost
  return (
      <Layout>
        <section>
          <h3>{post.production.details.name}</h3>
          <p>Directed by {post.production.details.author}</p>
        </section>
      </Layout>
  )
}

SingleProduction.propTypes = {
  databaseId: PropTypes.number,
  production: PropTypes.array,
  performances: PropTypes.array,
}

export const pageQuery = graphql`
  query GetPost($postId: Int) {
    wpPost(databaseId: { eq: $postId }) {
      databaseId
      production {
        season
        details {
          name
          author
          description
          synopsis
        }
        performances {
          date(formatString: "")
          status
        }
      }
    }
  }
`;
