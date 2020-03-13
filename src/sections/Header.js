import React from "react";
import styled from "styled-components";
import person from "../assets/person.png";
import Button from "../components/atoms/Button";
import Navigation from "../components/organisms/Navigation";

const StyledWrapper = styled.div`
  height: 100vh;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
`;

const OrangeDiv = styled.div`
  position: absolute;
  width: 200vw;
  height: 100%;
  top: 0;
  right: calc(100% - 35vh);
  background: ${({ theme }) => theme.color.orange};
`;

const StyledImg = styled.img`
  max-height: 80%;
  position: absolute;
  bottom: 0;
  z-index: 1;
  transform: scaleX(-1);
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
        <OrangeDiv />
        <StyledImg src={person} />

        <Navigation />
        <InnerWrapper>
          <NameSurname>paweł Miłczak</NameSurname>
          <JobTitle>frontend developer</JobTitle>
          <ButtonWrapper>
            <StyledButton secondary>Pobierz CV</StyledButton>
            <StyledButton>Zobacz projekty</StyledButton>
          </ButtonWrapper>
        </InnerWrapper>
      </StyledWrapper>
    </>
  );
};

export default Header;
