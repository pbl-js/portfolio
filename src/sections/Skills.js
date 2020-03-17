import React from "react";
import styled, { css } from "styled-components";
import H1 from "../components/atoms/H1";
import H2 from "../components/atoms/H2";

import { StyledIconBase } from "@styled-icons/styled-icon";
import { ReactLogo } from "@styled-icons/fa-brands/ReactLogo";
import { Nodejs } from "@styled-icons/boxicons-logos/Nodejs";
import { Adobe } from "@styled-icons/boxicons-logos/Adobe";

import { ReactComponent as Wave } from "../assets/wave.svg";

const StyledWrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
`;

const WaveSVG = styled(Wave)`
  width: 200px;
  height: 160px;
  color: red;
  position: absolute;
  top: 0;
  left: 0;
  /* transform: translateY(-50%); */
  .wave {
    fill: ${({ theme }) => theme.color.orange};
  }
`;

const StyledArticle = styled.article`
  padding: 100px 50px;
  width: 100%;
`;

const SectionsWrapper = styled.div`
  margin-top: 120px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 70px;

  @media ${({ theme }) => theme.device.laptop} {
    margin-top: 60px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    grid-gap: 30px;
  }
`;

const StyledSection = styled.section`
  position: relative;
  z-index: 1;
  padding: 40px 30px;
  background-color: ${({ theme, primary }) =>
    primary ? theme.color.greySecondary : theme.color.greyPrimary};
  transform: ${({ primary }) => (primary ? "scale(1.12)" : "none")};
  color: ${({ theme, primary }) =>
    primary ? theme.color.whitey : theme.color.greyTertiary};
  box-shadow: -7px 7px 0
    ${({ theme, primary }) => (primary ? theme.color.orange : "transparent")};

  @media ${({ theme }) => theme.device.laptop} {
    ${({ primary }) =>
      primary &&
      css`
        box-shadow: none;
        grid-area: 1/1/2/3;
        transform: scale(1);
      `}
  }
`;

const StyledUl = styled.ul`
  margin-top: 20px;
  margin-left: 20px;
  line-height: 250%;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  display: grid;

  @media ${({ theme }) => theme.device.laptop} {
    ${({ primary }) =>
      primary &&
      css`
        /* grid-template-rows: auto auto auto auto; */
        grid-template-columns: auto auto;
      `}
  }
`;

const SectionHeaderWrapper = styled.header`
  display: flex;
  align-items: center;
`;

const IconStyleWrapper = styled.div`
  ${StyledIconBase} {
    width: 40px;
    margin-right: 15px;
  }
`;

const Skills = () => {
  return (
    <StyledWrapper>
      <WaveSVG />

      <StyledArticle>
        <H1 orange center>
          <span>{"<"}</span> Umiejętności <span>{"/>"}</span>
        </H1>

        <SectionsWrapper>
          <StyledSection>
            <SectionHeaderWrapper>
              <IconStyleWrapper>
                <Nodejs />
              </IconStyleWrapper>
              <H2>Backend</H2>
            </SectionHeaderWrapper>

            <StyledUl>
              <li>React | HOOKS</li>
              <li>HTML 5</li>
              <li>JavaScript</li>
              <li>CSS | SASS | BEM</li>
              <li>styled-components</li>
              <li>Redux | redux-thunk</li>
              <li>React router</li>
              <li>Axios</li>
            </StyledUl>
          </StyledSection>

          <StyledSection primary>
            <SectionHeaderWrapper>
              <IconStyleWrapper>
                <ReactLogo />
              </IconStyleWrapper>
              <H2>Frontend</H2>
            </SectionHeaderWrapper>

            <StyledUl primary>
              <li>React | HOOKS</li>
              <li>HTML 5</li>
              <li>JavaScript</li>
              <li>CSS | SASS | BEM</li>
              <li>styled-components</li>
              <li>Redux | redux-thunk</li>
              <li>React router</li>
              <li>Axios</li>
              <li>styled-components</li>
            </StyledUl>
          </StyledSection>

          <StyledSection>
            <SectionHeaderWrapper>
              <IconStyleWrapper>
                <Adobe />
              </IconStyleWrapper>
              <H2>Frontend</H2>
            </SectionHeaderWrapper>

            <StyledUl>
              <li>React | HOOKS</li>
              <li>HTML 5</li>
              <li>JavaScript</li>
              <li>CSS | SASS | BEM</li>
              <li>styled-components</li>
              <li>Redux | redux-thunk</li>
              <li>React router</li>
              <li>Axios</li>
            </StyledUl>
          </StyledSection>
        </SectionsWrapper>
      </StyledArticle>
    </StyledWrapper>
  );
};

export default Skills;
