import React from "react";
import styled from "styled-components";

export const Hero = () => {
  return (
    <HeroContainer>
      <h1>Hi, my name is</h1>
      <h2>Jorge Figueroa</h2>
      <h3>I build things for the web.</h3>
      <p>
          I'm a Software Engineering student from Rochester, NY. Studying to be a Full-Stack Engineer.
      </p>
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;

  h1 {
    margin: 0 0 30px 4px;
    color: white;
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;
  }
  @media (max-width: 480px) {
    margin: 0 0 20px 2px;
  }

  h3 {
    margin-top: 10px;
    color: var(--slate);
    line-height: 0.9;
  }
  p {
    margin: 20px 0 0;
    max-width: 500px;
  }
`;
