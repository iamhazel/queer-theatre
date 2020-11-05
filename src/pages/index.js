import React from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"
import GlobalStyle from "../styles/GlobalStyle"
import Layout from "../components/layout"
import Wrapper from "../components/wrapper"
import Button from "../components/button"
import Hero from "../components/hero"
import Navbar from "../components/navbars/nav"

// // Create a Title component that'll render an <h1> tag with some styles
// const Title = styled.h1`
//   font-size: 1.5em;
//   text-align: center;
//   color: palevioletred;
// `
// 
// // Create an ExternalLink component that'll render an <a> tag with some styles
// const ExternalLink = styled.a`
//   text-decoration: none;
//   color: #1e88e5;
// `

const IndexPage = () => (
            <Layout header="{<Navbar />}">
                <Helmet>
                    <title>QueerTK</title>
                    <meta
                        name="QTK Layout"
                        content="Responsive Grid Layout for Queer Theatre Kalamazoo"
                    />
                    <meta name="referrer" content="origin" />
                </Helmet>
                <GlobalStyle />
                <div>Header</div>
            </Layout>
        )

export default IndexPage