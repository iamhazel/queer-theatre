import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"

const LogoWrap = styled.div`
  margin: auto 0;
  flex: 0 1 36px;

  @media (max-width: 768px) and (orientation: landscape) {
    flex: 0 1 25px;
  }
`

const NavLogo = () => {
    const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "gatsby-icon" }, extension: { eq: "png" }) {
        childImageSharp {
          fluid(maxWidth: 50, pngQuality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

    return (
        <LogoWrap as={Link} to="/">
            <Img fluid={data.file.childImageSharp.fluid} alt="logo" />
        </LogoWrap>
    )
}

export default NavLogo