import React, { Component } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"

import Layout from "../../components/layout"

class SingleProduction extends Component {
  render() {
    const post = this.props.data.wpPost
    return (
      <Layout>
        <div>
          <section>
            <h3>{ post.production.details.name }</h3>
            <p>Directed by { post.production.details.author }</p>
          </section>
        </div>
      </Layout>
    )
  }
}

SingleProduction.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default SingleProduction

export const pageQuery = graphql`
    query GetPost($postId: Int) {
      wpPost(databaseId: {eq: $postId}) {
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