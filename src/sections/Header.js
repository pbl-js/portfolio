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
  max-width: 350px;
  color: red;
  position: absolute;
  bottom: 50px;

  right: 50px;
  .dots {
    fill: ${({ theme }) => theme.color.greySecondary};
  }

  @media ${({ theme }) => theme.device.tablet} {
    bottom: 30px;
    right: 30px;
  }
`;

const OrangeDiv = styled.div`
  position: absolute;
  width: 200vw;
  height: 100%;
  top: 0;
  right: calc(100% - 500px);
  background: ${({ theme }) => theme.color.orange};

  @media ${({ theme }) => theme.device.laptopL} {
    right: calc(100% - 280px);
  }

  @media ${({ theme }) => theme.device.laptop} {
    right: calc(100% - 170px);
  }

  @media ${({ theme }) => theme.device.tablet} {
    right: calc(100% - 80px);
  }

  @media ${({ theme }) => theme.device.mobileL} {
    right: calc(100% - 40px);
  }
`;

const StyledImg = styled.img`
  max-height: 70%;
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 1;
  transform: translateX(40%);

  @media ${({ theme }) => theme.device.laptopL} {
    max-height: 65%;
  }

  @media ${({ theme }) => theme.device.laptop} {
    max-height: 40%;
  }

  @media ${({ theme }) => theme.device.tablet} {
    display: none;
  }
`;

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: calc(100% - 500px);
  height: 100%;
  margin-left: 500px;
  padding: 50px;

  @media ${({ theme }) => theme.device.laptopL} {
    width: calc(100% - 280px);
    margin-left: 280px;
  }

  @media ${({ theme }) => theme.device.laptop} {
    width: calc(100% - 170px);
    margin-left: 170px;
  }

  @media ${({ theme }) => theme.device.tablet} {
    width: calc(100% - 80px);
    margin-left: 80px;
    padding: 30px;
  }
`;

const InnerWrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 20px;
  margin-top: 30px;

  @media ${({ theme }) => theme.device.mobileM} {
    grid-template-columns: auto;
  }
`;

const StyledButton = styled(Button)`
  /* margin-left: 30px; */
`;

const NameSurname = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xxxl};
  text-transform: uppercase;
  text-align: right;
  color: ${({ theme }) => theme.color.orange};
  letter-spacing: 3px;

  @media ${({ theme }) => theme.device.laptop} {
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }
`;

const JobTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  letter-spacing: 2px;
  text-transform: uppercase;
  text-align: right;
  color: ${({ theme }) => theme.color.white};
  margin-top: 10px;

  @media ${({ theme }) => theme.device.laptop} {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;

const Header = ({ executeScroll, refs }) => {
  return (
    <>
      <StyledWrapper>
        <OrangeDiv>
          <StyledImg src={person} />
        </OrangeDiv>
        <Navigation refs={refs} executeScroll={executeScroll} />
        <Container>
          <InnerWrapper>
            <NameSurname>paweł Miłczak</NameSurname>
            <JobTitle>frontend developer</JobTitle>
            <ButtonWrapper>
              <StyledButton secondary>Pobierz CV</StyledButton>
              <StyledButton onClick={() => executeScroll(refs.projects)}>
                Zobacz projekty
              </StyledButton>
            </ButtonWrapper>
          </InnerWrapper>
          {/* <StyledSVG /> */}
        </Container>
      </StyledWrapper>
    </>
  );
};

export default Header;
