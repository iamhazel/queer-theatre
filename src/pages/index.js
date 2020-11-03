import React from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"
import GlobalStyle from "../styles/GlobalStyle"

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`

// Create an ExternalLink component that'll render an <a> tag with some styles
const ExternalLink = styled.a`
  text-decoration: none;
  color: #1e88e5;
`

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

const IndexPage = () => (
            <>
                <Helmet>
                    <title>Gatsby Styled Components</title>
                    <meta
                        name="description"
                        content="Gatsby example site using Styled Components"
                    />
                    <meta name="referrer" content="origin" />
                </Helmet>
                <GlobalStyle />
                <Wrapper>
                    <Title>Hello World, this is my first styled component!</Title>
                    <p>
                        <ExternalLink href="https://www.gatsbyjs.com/plugins/gatsby-plugin-styled-components/">
                            gatsby-plugin-styled-component docs
            </ExternalLink>
                    </p>
                </Wrapper>
            </>
        )

export default IndexPage