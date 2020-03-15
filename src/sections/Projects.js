import React from "react";
import styled from "styled-components";
import H1 from "../components/atoms/H1";
import ProjectItem from "../components/organisms/ProjectItem";

const BackgroundWrapper = styled.div`
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => theme.color.greyPrimary};
  overflow: hidden;
`;

const StyledWrapper = styled.div`
  /* min-height: 100vh; */
  width: 100%;
  max-width: 1440px;
  background-color: ${({ theme }) => theme.color.greyPrimary};
  margin: 0 auto;
  position: relative;
`;

const StyledArticle = styled.article`
  padding: 100px;
  width: 100%;
  display: grid;
  grid-gap: 50px;
`;

const Projects = () => {
  return (
    <BackgroundWrapper>
      <StyledWrapper>
        <StyledArticle>
          <H1>
            <span>{"<"}</span> Projekty <span>{"/>"}</span>
          </H1>

          <ProjectItem />

          <ProjectItem />

          <ProjectItem />
        </StyledArticle>
      </StyledWrapper>
    </BackgroundWrapper>
  );
};

export default Projects;
