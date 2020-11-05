import React, { Fragment } from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import GlobalStyle from "../styles/GlobalStyle"
import Navbar from "./navbars/nav"
import styled, { css } from "styled-components"


const Header = styled.header`
    background: lightyellow;
    padding: 1rem 2rem;
`

const Sidebar = styled.nav`
    background: lightblue;
    padding: 1rem 2rem;
`

const Content = styled.section`
    background: lightgreen;
    padding: 1rem 2rem;
`

const Footer = styled.footer`
    background: orange;
    padding: 1rem 2rem;
`

export default function Layout({ children }) {
    return (
        <>
            <Header>header</Header>
            <Sidebar>sidenav</Sidebar>
            <Content>content</Content>
            <Footer>footer</Footer>
        </>
    )
}



// const Section = styled.section`
//     border: black 1px dotted;
//     display: flex;
//     flex-direction: row;
//     justify-content: center;
// `
// 
// const ListItem = styled.li`
//     list-style: none;
//     border: black 1px dotted;
// `
// 
//  export default function LayoutOld({ children }) {
//      return (
//          <Fragment>
//              <Helmet>
//                  <title>QTK</title>
//                  <meta
//                      name="description"
//                      content="Gatsby example site using Styled Components"
//                  />
//                  <meta name="referrer" content="origin" />
//              </Helmet>
//              <Navbar />
//              <GlobalStyle />
//  
//                  {children}
//  
//          </Fragment>
//      );
//  }

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

