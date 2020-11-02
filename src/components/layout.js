import React, { Fragment } from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import GlobalStyle from "../styles/GlobalStyle"

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
    background: papayawhip;
    max-width: 90%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    background-color: rgb(245, 245, 245);
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    
    return={(data) => (
      <Fragment>
        <Helmet>
          <title>{ data.site.siteMetaData.Query }</title>
          <meta
            name="description"
            content="Gatsby example site using Styled Components"
          />
          <meta name="referrer" content="origin" />
        </Helmet>
        <GlobalStyle />
        <Wrapper>
          { children }
        </Wrapper>
      </Fragment>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout