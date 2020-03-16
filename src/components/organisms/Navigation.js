import React from "react";
import styled from "styled-components";
import { Menu } from "@styled-icons/entypo/Menu";

const StyledNav = styled.nav`
  position: absolute;
  top: 50px;
  right: 50px;

  @media ${({ theme }) => theme.device.tablet} {
    top: 20px;
    right: 20px;
  }
`;

const Hamburger = styled(Menu)`
  width: 70px;
  display: none;
  cursor: pointer;

  @media ${({ theme }) => theme.device.tablet} {
    display: block;
  }
`;

const StyledUl = styled.ul`
  display: flex;
  list-style: none;

  @media ${({ theme }) => theme.device.tablet} {
    display: none;
  }
`;

const StyledA = styled.a`
  margin-left: 50px;
  text-decoration: none;
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  @media ${({ theme }) => theme.device.laptop} {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

const Navigation = () => {
  return (
    <StyledNav>
      <Hamburger />
      <StyledUl>
        <li>
          <StyledA href="#">O mnie</StyledA>
        </li>

        <li>
          <StyledA href="#">Umiejętności</StyledA>
        </li>

        <li>
          <StyledA href="#">Projekty</StyledA>
        </li>

        <li>
          <StyledA href="#">Kontakt</StyledA>
        </li>
      </StyledUl>
    </StyledNav>
  );
};

export default Navigation;
