import React from "react";
import styled from "styled-components";

const MainWrapper = styled.article`
  height: 100vh;
  background-color: ${({ theme }) => theme.color.greyPrimary};
`;

const Aboutme = () => {
  return (
    <MainWrapper>
      <h1>O mnie</h1>
    </MainWrapper>
  );
};

export default Aboutme;
