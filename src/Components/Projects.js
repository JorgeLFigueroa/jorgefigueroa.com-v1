import React, { Component } from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import ckFrontPage from "../Styles/ck_front_page.jpg";
import smFrontPage from "../Styles/sm_front_page.jpg";

export default class Projects extends Component {
  render() {
    return (
      <ProjectsContainer>
        <h1>Projects</h1>
        <ProjectCards>
          <ProjectCard
            img={ckFrontPage}
            title="Ranking Famous People"
            desc="Ranking App based on famous people's popularity."
            url="https://github.com/JorgeF010/RankingApp"
            tools="Android Studio / Java / JSoup"
          ></ProjectCard>
          <ProjectCard 
          img={smFrontPage} 
          title="Organize Me App"
          desc="A recreation of the chrome extension Momentum."
          url="https://github.com/JorgeF010/CalendarApp"
          tools="Android Studio / Java"
          ></ProjectCard>
        </ProjectCards>
      </ProjectsContainer>
    );
  }
}

const ProjectsContainer = styled.div`
  h1 {
    padding-top: 7rem;
    font-size: 2rem;
    padding-bottom: 20px;
    color: #0496ff;
  }
`;

const ProjectCards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
