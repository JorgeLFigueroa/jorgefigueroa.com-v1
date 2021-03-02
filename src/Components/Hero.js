import React from "react";
import styled from "styled-components";
import Button from "./Button";

export const Hero = () => {
  return (
    <HeroContainer>
      <h1>My name is</h1>
      <h2>Jorge Figueroa.</h2>
      <h3>I build things for the web.</h3>
      <p>
        I'm a Software Engineering student from Rochester, NY. Studying to be a
        Full-Stack Engineer.
      </p>
      <Button
        bttnText="Get In Touch"
        link="mailto:softwarebyjorge@gmail.com"
      ></Button>
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  margin-top: 40%;
  flex-direction: column;
  align-items: flex-start;
  min-height: 50vh;

  h1 {
    margin: 0 0 5px 4px;
    color: #ffc09f;
    font-size: 1.5rem;
    font-weight: 400;
  }
  h2 {
    color: #0496ff;
    font-size: 4rem;
  }
  h3 {
    margin-top: 10px;
    color: #2af5ff;
    line-height: 0.9;
    font-size: 5rem;
    padding-bottom: 10px;
  }
  p {
    color: #ece8ef;
    margin: 20px 0 0;
    max-width: 500px;
    font-size: 1.1rem;
    padding-bottom: 2rem;
  }
  @media (max-width: 480px) {
    margin: 0 0 20px 2px;
  }

  @media only screen and (min-width: 1600px) {
    margin-top: 5%;
    margin-bottom: 16rem;
    h1 {
      font-size: 2rem;
    }
    h2 {
      font-size: 4rem;
    }
    h3 {
      font-size: 5rem;
    }
    p {
      font-size: 1.25rem;
    }
  }

  @media only screen and (max-width: 600px) {
    margin-top: 62%;
    margin-bottom: 5rem;
    h1 {
      font-size: 1.1rem;
    }
    h2 {
      font-size: 2rem;
    }
    h3 {
      font-size: 3rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;
