import React, { Fragment } from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"

import GlobalStyle from "../styles/GlobalStyle"

import Navbar from "./navbars/nav"
import Wrapper from "./wrapper"

export default function Layout({ children }) {
    return (
        <Fragment>
            <Helmet>
                <title>QTK</title>
                <meta
                    name="description"
                    content="Gatsby example site using Styled Components"
                />
                <meta name="referrer" content="origin" />
            </Helmet>
            <Navbar />
            <GlobalStyle />
            <Wrapper>
                {children}
            </Wrapper>
        </Fragment>
    );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

