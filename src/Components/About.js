import React, { Component } from "react";
import styled from "styled-components";
import BulletPoints from './BulletPoints';

const data = {
  points: [
    'JavaScript',
    'React',
    'Express.js',
    'Node.js',
    'HTML & CSS',
    'Java',
    'Android Studio',
    'PostgreSQL',
    'Python',
    'Selenium Webdriver',
    'Jenkins',
    'Jira',
    'Firebase',
  ]
}
export default class About extends Component {
  render() {
    return (
      <Container id="about">
        <h1>About Me</h1>
        <p>
          Hello! I'm Jorge, a software engineering student based in Rochester,
          NY.
        </p>
        <p>
          I'm very passionate about creating things that live on the internet.
          <br />
          That includes websites, applications, or anything in between.
          <br />
          My goal is to take creative ideas and bring them to life while
          providing efficient experiences.
        </p>
        <p>
          I'm a 4th-year software engineering student at{" "}
          <a href="https://www.rit.edu/study/software-engineering-bs">
            Rochester Institute of Technology
          </a>
          <br />
          with an immersion in economics.
        </p>
        <p>Here are some technologies I've been working with:</p>
        <TechnologiesContainer>
          <BulletPoints data={data.points}></BulletPoints>
        </TechnologiesContainer>
      </Container>
    );
  }
}

const Container = styled.div`
  h1 {
    padding-top: 7rem;
    font-size: 2rem;
    padding-bottom: 20px;
    color: #0496ff;
  }
  p {
    color: #ece8ef;
    margin: 20px 0 0;
    max-width: 500px;
    font-size: 1.1rem;
  }
  a {
    text-decoration: none;
    color: #2af5ff;
    font-weight: 500;
  }
`;

const TechnologiesContainer = styled.div`
  padding-top: 1rem;
  ul {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 6rem;
    max-width: 22rem;
    list-style: none;
  }
  li {
    color: #ece8ef;
  }
  li::before {
    content: "• ";
    color: #2af5ff;
  }
`;
