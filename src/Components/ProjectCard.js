import React, { Component } from "react";
import styled from "styled-components";
import Icons from "./Icons";

export default class ProjectCard extends Component {
  render() {
    return (
      <CardContainer>
        <ImageContainer>
          <img src={this.props.img} alt="default"></img>
        </ImageContainer>
        <InfoContainer>
          <h1>{this.props.title}</h1>
          <DescriptionContainer>
            <p>{this.props.desc}</p>
          </DescriptionContainer>
          <p>{this.props.tools}</p>
        </InfoContainer>
        <Icons url={this.props.url} />
      </CardContainer>
    );
  }
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* outline: 5px solid #001c30; */
  width: fit-content;
  /* padding-right: 5rem; */
  margin-top: 3rem;
  margin-right: 3rem;
  margin-left: 3rem;
  @media only screen and (max-width: 600px) {
    margin-top: 1rem;
    margin-right: 1rem;
    margin-left: 1rem;
  }
`;

const ImageContainer = styled.div`
  img {
    height: 20rem;
    width: 15rem;
  }
  @media only screen and (max-width: 600px) {
      img{
        height: 15rem;
        width: 8rem;   
      }
  }
`;

const InfoContainer = styled.div`
  h1 {
    display: inline;
  }
  p {
    color: #ece8ef;
  }
  @media only screen and (max-width: 600px) {
    h1 {
        font-size: 11px;
    }
    p {
        font-size: 7px;
    }
  }
`;

const DescriptionContainer = styled.div`
  /* height: 3rem;
    background-color: #001c30; */
  p {
    color: #ece8ef;
  }
  @media only screen and (max-width: 600px) {
    p {
        font-size: 9px;
    }
  }
`;
