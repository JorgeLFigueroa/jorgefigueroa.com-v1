import React, { Component } from "react";
import styled from "styled-components";
import github from "../Styles/github.svg";

export default class Icons extends Component {
  render() {
    return (
      <IconsContainer>
        <ul>
          <li>
            <a href={this.props.url}>
              <img src={github} alt="Github"></img>
            </a>
          </li>
        </ul>
      </IconsContainer>
    );
  }
}

const IconsContainer = styled.div`
  margin-top: .5rem;
  align-items: center;
  ul li {
    display: inline;
  }
  img {
    height: 1.5rem;
    width: 2rem;
  }
`;
