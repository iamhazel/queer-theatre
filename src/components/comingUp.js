import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"

const Wrapper = styled.div`
    background-color: #fff;
    color: black;
    border-radius: 0.3rem;
    box-shadow: var(--shadow);
`

const Title = styled.div`
    padding: 0.5rem 0.6rem;
    font-weight: 500;
`

const Content = styled.div`
    border-radius: 0 0 0.3rem 0.3rem;
`

const Image = styled.img`
    margin-top: 0.3rem;
    border-radius: 0.25rem;
`

const ComingUp = () => {
    return (
    <>
        <Wrapper>
            <Content>
                Hello
            </Content>
        </Wrapper>
    </>
)}

export default ComingUp