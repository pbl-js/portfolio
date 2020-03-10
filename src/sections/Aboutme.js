import React from "react";
import styled from "styled-components";

import workingMan from "../assets/workingMan.png";
import WhiteHeader from "../components/atoms/WhiteHeader";

const BackgroundWrapper = styled.div`
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => theme.color.greyPrimary};
  overflow: hidden;
`;

const MainWrapper = styled.article`
  height: 100vh;
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  position: relative;
`;

const OrangeDiv = styled.div`
  position: absolute;
  width: 200vw;
  height: 100%;
  top: 0;
  left: calc(100% - 35vh);
  background: ${({ theme }) => theme.color.orange};
`;

const StyledImg = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  max-height: 50%;
  height: 100%;
  right: 10vh;
  bottom: 0;
  z-index: 1;
`;

const Aboutme = () => {
  return (
    <BackgroundWrapper>
      <MainWrapper>
        <OrangeDiv />
        <WhiteHeader>Poznajmy się</WhiteHeader>
        <StyledImg src={workingMan} />
        <h1>O mnie</h1>
      </MainWrapper>
    </BackgroundWrapper>
  );
};

export default Aboutme;
