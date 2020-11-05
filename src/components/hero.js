import React from "react"
import styled, { css } from "styled-components"
import hero from "../images/hero.jpg"
import Button from "./button"

const HeroContainer = styled.section`
    background: #f2f2f2;
    border-radius: 0.4em;
    width: 90%;
    height: 20rem;
    margin: 1rem auto;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 4px 10px 0 rgba(0, 0, 0, 0.1);
`

const HeroStyles = styled.div`
    background: #D0E4F5 url(${hero}) no-repeat scroll 50% 50%;
    background-size: cover;
    border-radius: 0.4em;
    margin: 0 auto;
    width: 100%;
    height: 20rem;
    overflow: none;
    transition-duration: 0.5s;
`

const Dim = styled.div`
    width: 90%;
    height: 20rem;
    background: transparent;
    transition-duration: 0.4s;
    border-radius: 0.4em;
    position: absolute;
    display: flex;
    flex-direction: column;

    :hover {
        background: rgba(0, 0, 0, 0.4)
    }
`

const Content = styled.div `
    border: 1px dotted;
`

const MyButton = styled(Button)`
    margin: 0 auto;
    }
`

const Hero = () => {
    return (
      <HeroContainer>
        <HeroStyles>
          <Dim>
            <MyButton primary>Hello</MyButton>
            <Content>
                <p>Text</p>
                <p>More Text</p>
                <p>Even More</p>
            </Content>
          </Dim>
        </HeroStyles>
      </HeroContainer>
    );
}

export default Hero