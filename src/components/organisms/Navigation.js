import React from "react";
import styled from "styled-components";

const StyledNav = styled.nav`
  position: absolute;
  top: 50px;
  right: 50px;
`;

const StyledUl = styled.ul`
  display: flex;
  list-style: none;
`;

const StyledA = styled.a`
  margin-left: 50px;
  text-decoration: none;
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

const Navigation = () => {
  return (
    <StyledNav>
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
