import React from "react";
import styled from "styled-components";
import H1 from "../components/atoms/H1";
import ProjectItem from "../components/organisms/ProjectItem";

const BackgroundWrapper = styled.div`
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => theme.color.greyPrimary};
  overflow: hidden;
  padding: 100px 50px;

  @media ${({ theme }) => theme.device.tablet} {
    padding: 100px 30px;
  }
`;

const StyledWrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  background-color: ${({ theme }) => theme.color.greyPrimary};
  margin: 0 auto;
  position: relative;
`;

const StyledArticle = styled.article`
  width: 100%;
  display: grid;
  grid-gap: 50px;

  @media ${({ theme }) => theme.device.tablet} {
    grid-gap: 30px;
  }
`;

const Projects = () => {
  return (
    <BackgroundWrapper>
      <StyledWrapper>
        <H1>
          <span>{"<"}</span> Projekty <span>{"/>"}</span>
        </H1>
        <StyledArticle>
          <ProjectItem />

          <ProjectItem />

          <ProjectItem />
        </StyledArticle>
      </StyledWrapper>
    </BackgroundWrapper>
  );
};

export default Projects;
