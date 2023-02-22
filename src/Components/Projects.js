import React, { Component } from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import ckFrontPage from "../Styles/ck_front_page.jpg";
import smFrontPage from "../Styles/sm_front_page.jpg";

export default class Projects extends Component {
  render() {
    return (
      <ProjectsContainer id='projects'>
        <ProjectTitle>Projects</ProjectTitle>
        <ProjectCards>
          <ProjectCard
            img={ckFrontPage}
            title="Ranking Famous People"
            desc="An app ranking celebrities by popularity metrics."
            url="https://github.com/JorgeLFigueroa/RankingApp"
            tools="Android Studio / Java / JSoup"
          ></ProjectCard>
          <ProjectCard 
          img={smFrontPage} 
          title="Organize Me App"
          desc="A recreation of Momentum: a Google Chrome Extension."
          url="https://github.com/JorgeLFigueroa/CalendarApp"
          tools="Android Studio / Java"
          ></ProjectCard>
        </ProjectCards>
      </ProjectsContainer>
    );
  }
}

const ProjectsContainer = styled.div`
  padding-top: 7rem;
  color: #0496ff;
  padding-bottom: 20px;
`;

const ProjectTitle = styled.h1`
  font-size: 2rem;
`;

const ProjectCards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
