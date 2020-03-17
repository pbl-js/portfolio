import React, { useState } from "react";
import styled from "styled-components";
import H2 from "../atoms/H2";
import H3 from "../atoms/H3";
import Paragraph from "../atoms/Paragraph";
import SmallButton from "../atoms/SmallButton";

import portfolio from "../../assets/portfolio.png";

const StyledSection = styled.section`
  position: relative;
  background-color: ${({ theme }) => theme.color.greySecondary};
  padding: 20px;
  display: grid;
  grid-template-columns: 250px auto;
  grid-gap: 20px;
  transition: height 1s;

  :hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);
    cursor: pointer;
  }

  @media ${({ theme }) => theme.device.tablet} {
    display: flex;
    flex-direction: column;
  }
`;

const SectionLeftSide = styled.div`
  display: flex;
  flex-direction: column;

  @media ${({ theme }) => theme.device.tablet} {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 20px;
    margin-top: 43px;
  }
`;

const StyledH2 = styled(H2)`
  @media ${({ theme }) => theme.device.tablet} {
    position: absolute;
    top: 20px;
    left: 20px;
  }
`;

const ButtonWrapper = styled.div`
  display: ${({ isOpen }) => (isOpen ? "grid" : "none")};
  grid-gap: 10px;

  @media ${({ theme }) => theme.device.tablet} {
    display: grid;
  }
`;

const SectionRightSide = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledParagraph = styled(Paragraph)`
  margin-top: 10px;
  margin-bottom: 20px;
`;

const ProjectPhoto = styled.img`
  width: 250px;
  height: 160px;
  margin-bottom: ${({ isOpen }) => isOpen && "20px"};
  box-shadow: -5px 5px ${({ theme }) => theme.color.orange};

  @media ${({ theme }) => theme.device.tablet} {
    height: 100%;
    box-shadow: none;
  }
`;

const TechnologyWrapper = styled.ul`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 10px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;

  @media ${({ theme }) => theme.device.tablet} {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  }
`;

const TechnologyItem = styled.li`
  padding: 10px 20px;
  margin-right: 10px;
  margin-bottom: 10px;
  background-color: rgba(0, 0, 0, 0.3);
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

const ProjectItem = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledSection onClick={() => setIsOpen(!isOpen)}>
      <SectionLeftSide>
        <ProjectPhoto src={portfolio} alt="portfolio.png" isOpen={isOpen} />

        <ButtonWrapper isOpen={isOpen}>
          <SmallButton onClick={() => console.log("elo")}>
            Wersja live
          </SmallButton>
          <SmallButton secondary>GitHub</SmallButton>
          <SmallButton secondary>Figma mockup</SmallButton>
        </ButtonWrapper>
      </SectionLeftSide>

      <SectionRightSide>
        <StyledH2>Generator CV</StyledH2>

        <TechnologyWrapper isOpen={isOpen}>
          <TechnologyItem>React</TechnologyItem>
          <TechnologyItem>styled-components</TechnologyItem>
          <TechnologyItem>react-router</TechnologyItem>
          <TechnologyItem>express.js</TechnologyItem>
          <TechnologyItem>MongoDB</TechnologyItem>
        </TechnologyWrapper>

        {isOpen && (
          <>
            <H3>Założenia projektu</H3>
            <StyledParagraph>
              W programowaniu najbardziej lubię fakt, że jeden dobrze napisany
              program jest w stanie wykonać pracę dziesiątek a nawet setek
              ludzi. Pewien znany wizjoner technologi określił komputer „rowerem
              dla umysłu”. Bardzo spodobało mi się to określenie.Dlatego, ucząc
              się programowania...
            </StyledParagraph>

            <H3>Użyte technologie</H3>
            <StyledParagraph>
              W programowaniu najbardziej lubię fakt, że jeden dobrze napisany
              program jest w stanie wykonać pracę dziesiątek a nawet setek
              ludzi. Pewien znany wizjoner technologi określił komputer „rowerem
              dla umysłu”. Bardzo spodobało mi się to określenie.Dlatego, ucząc
              się programowania...
            </StyledParagraph>

            <H3>Napotkane problemy</H3>
            <StyledParagraph>
              W programowaniu najbardziej lubię fakt, że jeden dobrze napisany
              program jest w stanie wykonać pracę dziesiątek a nawet setek
              ludzi. Pewien znany wizjoner technologi określił komputer „rowerem
              dla umysłu”. Bardzo spodobało mi się to określenie.Dlatego, ucząc
              się programowania...
            </StyledParagraph>
          </>
        )}
      </SectionRightSide>
    </StyledSection>
  );
};

export default ProjectItem;
