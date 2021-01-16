import React, { Component } from 'react'
import styled from 'styled-components';
import ProjectCard from './ProjectCard';

export default class Projects extends Component {
    render() {
        return (
            <ProjectsContainer>
                <h1>Projects</h1>
                <ProjectCards>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                </ProjectCards>                
            </ProjectsContainer>
        )
    }
}


const ProjectsContainer = styled.div ` 
    h1 {
        padding-top: 7rem;
        font-size: 2rem;
        padding-bottom: 20px;
        color: #0496ff;
    }
`

const ProjectCards = styled.div ` 
    display: flex;
    
`


