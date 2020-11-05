import React from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"
import GlobalStyle from "../styles/GlobalStyle"
import Layout from "../components/layout"
import Wrapper from "../components/wrapper"
import Button from "../components/button"
import Hero from "../components/hero"

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

const IndexPage = () => (
            <Layout>
                <Helmet>
                    <title>Gatsby Styled Components</title>
                    <meta
                        name="description"
                        content="Gatsby example site using Styled Components"
                    />
                    <meta name="referrer" content="origin" />
                </Helmet>
                <GlobalStyle />
                <Hero />
                <Wrapper>
                    <Title>Hello World, this is my first styled component!</Title>
                    <Button primary>Primary Button</Button>
                    <Button primaryOutline>Primary Outline</Button>
                    <Button secondary>Secondary Button</Button>
                    <Button secondaryOutline>Secondary Outline</Button>
                    <Button tertiary>Tertiary Button</Button>
                    <Button tertiaryOutline>Tertiary Outline</Button>
                    <Button disabled>Disabled Button</Button>
                    <p>
                        <ExternalLink href="https://www.gatsbyjs.com/plugins/gatsby-plugin-styled-components/">
                            gatsby-plugin-styled-component docs
            </ExternalLink>
                    </p>
                </Wrapper>
            </Layout>
        )

export default IndexPage