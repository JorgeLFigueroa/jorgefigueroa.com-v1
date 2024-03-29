import styled from "styled-components";
import React, { Component } from 'react'
import Job from './Job'

const Amplify = {
    company: 'Amplify.',
    location: 'REMOTE',
    title: 'Software Test Engineer',
    dates: '05/2021 - 05/2022',
    description: [
        'Created accurate and successful test scripts to manage automated testing of certain products and features.',
        'Conducted regression testing, analyzed results and submitted observations to development team.',
        'Improved productivity and boosted workflows, by using pre-commit hooks, selenium grids, lint scripts, and more; to automate processes.',
        'Refactored our testing code-base to optimize tests.'
    ],
};

const Trellis = {
    company: 'Trellis Software Company.',
    location: 'REMOTE',
    title: 'Full Stack Software Engineer',
    dates: '03/2021 - 06/2021',
    description: [
        'Worked with software development and testing team members to design and develop robust solutions to meet client requirements for functionality, scalability and performance.',
        'Gathered and defined customer requirements to develop clear specifications for project plans.',
        'Gathered and defined customer requirements to develop clear specifications for project plans.'
    ],
}

const Bby = {
    company: 'BestBuy',
    location: 'REMOTE',
    title: 'Associate Software Engineer',
    dates: 'Current',
    description: [
        'Working on recreating the cart and checkout contracts.',
        'This includes creating new endpoints, classes, and refactoring legacy code.',
        'In addition to that, I work on new cart and checkout features.',
    ],
}

export default class Work extends Component {
    render() {
        return (
            <WorkHistoryContainer>
                <WorkHistoryTitle>Work History</WorkHistoryTitle>
                <Job data={Bby}></Job>
                <Job data={Amplify}></Job>
                <Job data={Trellis}></Job>
            </WorkHistoryContainer>
        )
    }
}


const WorkHistoryContainer = styled.div`
  padding-top: 7rem;
  color: #0496ff;
  padding-bottom: 20px;
`;

const WorkHistoryTitle = styled.h1`
  font-size: 2rem;
`;

// const ProjectCards = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;