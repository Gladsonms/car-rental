import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";
import SCREENS from "../responsive";
import menuStyle from "./menuStyles";

const ListContainer = styled.ul`
  ${tw`
flex
list-none`}
`;

const NavItem = styled.li<{ menu?: any }>`
  ${tw`
    text-sm
    md:text-base
    text-black
    font-medium
    mr-1
    md:mr-5
    cursor-pointer
    transition
    duration-300
    ease-in-out
    hover:text-gray-700
  `};
`;

const MbNavItem = styled.li<{ menu?: any }>`
  ${tw`
  text-white
  text-xl
  mb-3
  focus:text-white
  `};
  )
`;

function NavItems() {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });
  if (isMobile) {
    return (
      <Menu right styles={menuStyle}>
        <ListContainer>
          <MbNavItem>
            <a href="http://localhost:3000/dashboard">Home</a>
          </MbNavItem>
          <MbNavItem menu>
            <a href="http://localhost:3000/dashboard">Cars</a>
          </MbNavItem>
          <MbNavItem menu>
            <a href="http://localhost:3000/dashboard">Services</a>
          </MbNavItem>
          <MbNavItem menu>
            <a href="http://localhost:3000/dashboard">Contact us</a>
          </MbNavItem>
        </ListContainer>
      </Menu>
    );
  }
  return (
    <ListContainer>
      <NavItem>
        <a href="http://localhost:3000/dashboard">Home</a>
      </NavItem>
      <NavItem>
        <a href="http://localhost:3000/dashboard">Cars</a>
      </NavItem>
      <NavItem>
        <a href="http://localhost:3000/dashboard">Services</a>
      </NavItem>
      <NavItem>
        <a href="http://localhost:3000/dashboard">Contact us</a>
      </NavItem>
    </ListContainer>
  );
}

export default NavItems;
