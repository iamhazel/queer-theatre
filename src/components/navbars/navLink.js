import React from "react";
import { Link } from "gatsby";
import styled from "styled-components"

const NavItem = styled(Link)`
  text-decoration: none;
  color: white;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;

  :visited {
    color: white;
  }

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: white;
    height: 2px;
    transition: all 0.25s ease-in;
  }

  :hover {
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`

const NavLinks = () => {
  return (
    <>
      <NavItem to="/">About</NavItem>
      <NavItem to="/">Services</NavItem>
      <NavItem to="/">Gallery</NavItem>
      <NavItem to="/">Contact</NavItem>
    </>
  );
};

export default NavLinks;
