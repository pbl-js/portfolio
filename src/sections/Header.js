import React from "react";
import styled from "styled-components";
import person from "../assets/person.png";
import Button from "../components/atoms/Button";
import Navigation from "../components/organisms/Navigation";
import { ReactComponent as Dots } from "../assets/dots.svg";

const StyledWrapper = styled.div`
  height: 100vh;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
`;

const StyledSVG = styled(Dots)`
  width: 350px;
  height: 220px;
  color: red;
  position: absolute;
  bottom: 50px;
  right: 50px;
  .dots {
    fill: ${({ theme }) => theme.color.greyPrimary};
  }
`;

const OrangeDiv = styled.div`
  position: absolute;
  width: 200vw;
  height: 100%;
  top: 0;
  right: calc(100% - 300px);
  background: ${({ theme }) => theme.color.orange};
`;

const StyledImg = styled.img`
  max-height: 70%;
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 1;
  transform: translateX(40%);
`;

const InnerWrapper = styled.header`
  position: absolute;
  right: 50px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 30px;
`;

const StyledButton = styled(Button)`
  margin-left: 30px;
`;

const NameSurname = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.orange};
  letter-spacing: 3px;
`;

const JobTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.white};
`;

const Header = () => {
  return (
    <>
      <StyledWrapper>
        <OrangeDiv>
          <StyledImg src={person} />
        </OrangeDiv>
        <Navigation />
        <InnerWrapper>
          <NameSurname>paweł Miłczak</NameSurname>
          <JobTitle>frontend developer</JobTitle>
          <ButtonWrapper>
            <StyledButton secondary>Pobierz CV</StyledButton>
            <StyledButton>Zobacz projekty</StyledButton>
          </ButtonWrapper>
        </InnerWrapper>
        <StyledSVG />
      </StyledWrapper>
    </>
  );
};

export default Header;
