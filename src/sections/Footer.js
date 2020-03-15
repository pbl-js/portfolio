import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  min-height: 100px;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
  background-color: ${({ theme }) => theme.color.orange};
`;

const Footer = () => {
  return (
    <StyledWrapper>
      <h1>Stopka</h1>
    </StyledWrapper>
  );
};

export default Footer;
