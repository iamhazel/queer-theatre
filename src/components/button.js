import styled, { css } from "styled-components"

const Button = styled.button`
  border: 0.12rem solid;
  border-radius: 0.3rem;
  margin: 0.5em 1em;
  padding: 0.3em 0.7em;
  transition: 0.3s;

    ${props =>
        props.primary &&
        css`
        background: var(--primary);
        border-color: var(--primary);
        color: white;

        :hover {
          background: var(--primary-alt);
          border-color: var(--primary-alt);
          }`}

    ${props =>
        props.secondary &&
        css`
        background: var(--secondary);
        border-color: var(--secondary);
        color: white;

        :hover {
          background: var(--secondary-alt);
          border-color: var(--secondary-alt);
        }`}

    ${props =>
        props.tertiary &&
        css`
        background: var(--tertiary);
        border-color: var(--tertiary);
        color: #644b12;

        :hover {
          background: var(--tertiary-alt);
          border-color: var(--tertiary-alt);
        }`}

    ${props =>
        props.primaryOutline &&
        css`
        background: transparent;
        border-color: var(--primary);
        color: var(--primary);

        :hover {
          background: var(--primary-alt);
          border-color: var(--primary-alt);
          color: white;
          }`}
        
    ${props =>
    props.secondaryOutline &&
    css`
        background: transparent;
        border-color: var(--secondary);
        color: var(--secondary);
    
        :hover {
          background: var(--secondary-alt);
          border-color: var(--secondary-alt);
          color: white;
        }`}
      
    ${props =>
    props.tertiaryOutline &&
    css`
        background: transparent;
        border-color: var(--tertiary);
        color: #987422;
    
        :hover {
          background: var(--tertiary-alt);
          border-color: var(--tertiary-alt);
          color: #644b12;
        }`}

    ${props =>
        props.disabled &&
        css`
        background: lightgray;
        border-color: lightgray;
        color: dimgray;

        :hover {
          background: lightgray;
          border-color: lightgray;
          color: dimgray;
        }`}
`

export default Button