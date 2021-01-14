import React from "react";
import styled from "styled-components";
import Button from "./Button";

export const Hero = () => {
  return (
    <HeroContainer>
      <h1>My name is</h1>
      <h2>Jorge Figueroa</h2>
      <h3>I build things for the web.</h3>
      <p>
          I'm a Software Engineering student from Rochester, NY.
          Studying to be a Full-Stack Engineer.
      </p>
      <Button bttnText="Get In Touch" link='mailto:figueroajorge010@gmail.com'></Button>
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  flex-direction: column;
  align-items: flex-start;
  min-height: 50vh;

  h1 {
    margin: 0 0 10px 4px;
    color: #FFC09F;
    font-size: 1.5rem;
    font-weight: 400;
  }
  @media (max-width: 480px) {
    margin: 0 0 20px 2px;
  }

  h2 {
    color: #0496FF;
    font-size: 4rem;
  }

  h3 {
    margin-top: 10px;
    color: #2AF5FF;
    line-height: 0.9;
    font-size: 5rem;
    padding-bottom: 10px;
  }
  p {
    color: #ECE8EF;
    margin: 20px 0 0;
    max-width: 500px;
    font-size: 1.1rem;
    padding-bottom: 1rem;
  }
`;
