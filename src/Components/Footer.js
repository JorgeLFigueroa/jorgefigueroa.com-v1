import React, { Component } from "react";
import styled from "styled-components";
import github from "../Styles/github.svg";
import linkedin from "../Styles/linkedin.svg";

export default class Footer extends Component {
  render() {
    return (
      <FooterContainer>
        <TextContainer>
          <a href="https://github.com/JorgeLFigueroa/jorgefigueroa.com-v1">
            <div>Designed &amp; Built by Jorge Figueroa</div>
          </a>
        </TextContainer>
        <IconsContainer>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/jorge-f/">
                <img src={linkedin} alt='Linkedin'></img>
              </a>
            </li>
            <li>
              <a href="https://github.com/JorgeLFigueroa">
                <img src={github} alt='Github'></img>
              </a>
            </li>
          </ul>
        </IconsContainer>
      </FooterContainer>
    );
  }
}

const FooterContainer = styled.div`
  text-align: center;
  background-color: #063970;
`;

const TextContainer = styled.div`
  a {
    text-decoration: none;
    color: #2af5ff;
  }
  div {
    padding-bottom: 0.5rem;
  }
`;

const IconsContainer = styled.div`
  align-items: center;
  ul li {
    padding-right: 0.5rem;
    display: inline;
  }
  img {
    height: 1.5rem;
    width: 2rem;
  }
`;
