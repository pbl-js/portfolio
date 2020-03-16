import React from "react";
import styled from "styled-components";

import workingMan from "../assets/workingMan.png";
import H1 from "../components/atoms/H1";
import H2 from "../components/atoms/H2";
import Paragraph from "../components/atoms/Paragraph";
import { ReactComponent as Dots } from "../assets/dots.svg";

const BackgroundWrapper = styled.div`
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => theme.color.greyPrimary};
  overflow: hidden;
`;

const DotsSVG = styled(Dots)`
  width: 200px;
  height: 90px;
  color: red;
  position: absolute;
  bottom: 50px;
  left: 50px;
  .dots {
    fill: ${({ theme }) => theme.color.white};
  }
`;

const MainWrapper = styled.div`
  /* height: 100vh; */
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const OrangeDiv = styled.div`
  position: absolute;
  width: 200vw;
  height: 100%;
  top: 0;
  left: calc(100% - 300px);
  background: ${({ theme }) => theme.color.orange};
`;

const StyledImg = styled.img`
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  max-height: 50%;
  height: 40%;
  left: 0;
  bottom: 0;
  z-index: 1;
`;

const StyledArticle = styled.article`
  margin: 100px 0;
  margin-left: 100px;
  width: 40%;
`;

const StyledH2 = styled(H2)`
  margin-bottom: 20px;
`;

const StyledSection = styled.section`
  margin-bottom: 40px;
  position: relative;
  max-width: 500px;
`;

const SectionBackground = styled.span`
  display: block;
  background-color: black;
  opacity: 0.3;
  width: 200vw;
  height: 100%;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 0;
  transform: translateX(30px);
`;

const InnerSection = styled.div`
  padding: 30px 0;
  position: relative;
  z-index: 1;
`;

const Aboutme = () => {
  return (
    <BackgroundWrapper>
      <MainWrapper>
        <OrangeDiv>
          <StyledImg src={workingMan} />

          <DotsSVG />
        </OrangeDiv>

        <StyledArticle>
          <H1>
            <span>{"<"}</span> Poznajmy się <span>{"/>"}</span>
          </H1>

          <StyledSection>
            <Paragraph>
              W programowaniu najbardziej lubię fakt, że jeden dobrze napisany
              program jest w stanie wykonać pracę dziesiątek a nawet setek
              ludzi. Pewien znany wizjoner technologi określił komputer „rowerem
              dla umysłu”. Bardzo spodobało mi się to określenie.Dlatego, ucząc
              się programowania, robiłem to na W programowaniu najbardziej lubię
              fakt, że jeden dobrze napisany program jest w stanie wykonać pracę
              dziesiątek a nawet setek ludzi. Pewien znany wizjoner technologi
              określił komputer „rowerem dla umysłu”. Bardzo spodobało mi się to
              określenie.Dlatego, ucząc się programowania, robiłem to na
            </Paragraph>
          </StyledSection>

          <StyledSection>
            <InnerSection>
              <StyledH2>Dlaczego programowanie?</StyledH2>

              <Paragraph>
                W programowaniu najbardziej lubię fakt, że jeden dobrze napisany
                program jest w stanie wykonać pracę dziesiątek a nawet setek
                ludzi. Pewien znany wizjoner technologi określił komputer
                „rowerem dla umysłu”. Bardzo spodobało mi się to
                określenie.Dlatego, ucząc się programowania, robiłem to na W
                programowaniu najbardziej lubię fakt, że jeden dobrze napisany
                program jest w setek ludzi. Pewien znany wizjoner technologi
                określił komputer „rowerem dla umysłu”. Bardzo spodobało mi się
                to określenie.Dlatego, ucząc się programowania, robiłem to na
              </Paragraph>
            </InnerSection>
            <SectionBackground />
          </StyledSection>
        </StyledArticle>
      </MainWrapper>
    </BackgroundWrapper>
  );
};

export default Aboutme;
