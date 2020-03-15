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
`;

const SectionLeftSide = styled.div`
  display: flex;
  flex-direction: column;
`;

const SectionRightSide = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledParagraph = styled(Paragraph)`
  margin-top: 10px;
  margin-bottom: 20px;
`;

const Divider = styled.span`
  width: 100%;
  height: 1px;
  margin-bottom: 20px;
  display: block;
  background: ${({ theme }) => theme.color.greyTertiary};
`;

const ProjectPhoto = styled.img`
  width: 100%;
  margin-bottom: ${({ isOpen }) => isOpen && "20px"};
  box-shadow: -5px 5px ${({ theme }) => theme.color.orange};
`;

const TechnologyWrapper = styled.ul`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 10px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
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
        {isOpen && (
          <>
            <SmallButton>Wersja live</SmallButton>
            <SmallButton secondary>GitHub</SmallButton>
            <SmallButton secondary>Figma mockup</SmallButton>
          </>
        )}
      </SectionLeftSide>

      <SectionRightSide>
        <H2>Generator CV</H2>

        <TechnologyWrapper>
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
