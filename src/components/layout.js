import React, { Fragment } from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import GlobalStyle from "../styles/GlobalStyle"
import Navbar from "./navbars/nav"
import styled, { css } from "styled-components"

const Container = styled.div`
    display: grid;
    height: 100vh;
    max-width: 1170px;
    margin: 0.5rem auto;
    padding: 1rem;

    font-weight: 800;
    text-transform: uppercase;
    text-align: center;

    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 0.2fr 2.3fr 0.8fr 0.4fr;
    grid-template-areas:
        "Header Header Header Header"
        "Sidebar Content Content Content"
        "Sidebar Content Content Content"
        "Sidebar Footer Footer Footer";
    grid-gap: 0.5rem;

    @media only screen and (max-width: 550px) {
        grid-template-columns: 1fr;
        grid-template-rows: 0.4fr 0.4fr 2.2fr 1.2fr 1.2fr 1.2fr 1fr;
        grid-template-areas:
            "Header"
            "Sidebar"
            "Content"
            "Content1"
            "Content2"
            "Content3"
            "Footer";
    }
`

const Header = styled.header`
    background: lightgreen;
    padding: var(--padding-main);
    border-radius: var(--radius-main);
    grid-area: Header;
`

const Content = styled.div`
    background: lightyellow;
    padding: var(--padding-main);
    border-radius: var(--radius-main);
    grid-area: Content;
`

const Sidebar = styled.div`
    background: lightblue;
    padding: var(--padding-main);
    border-radius: var(--radius-main);
    grid-area: Sidebar;
`

const Footer = styled.footer`
    background: orange;
    padding: var(--padding-main);
    border-radius: var(--radius-main);
    grid-area: Footer;
`

export default function Layout(props, { children }) {
    return (
        <Container>
            <GlobalStyle />
            <Header>{props.header}</Header> 
            <Content>{props.content}</Content>
            <Sidebar>{props.sidebar}</Sidebar>
            <Footer>{props.footer}</Footer>
        </Container>
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

