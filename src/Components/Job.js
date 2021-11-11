import React, { Component } from 'react'
import styled from "styled-components";
import BulletPoints from './BulletPoints';

export default class Job extends Component {
    render() {
        return (
            <JobDiv>
                <JobLocationDiv>
                    <h1>{this.props.data.company}</h1>
                    <h2>{this.props.data.location}</h2>
                </JobLocationDiv>
                <Description>
                    <TitleAndDatesDiv> 
                        <h2>{this.props.data.title + ' | '}</h2>
                        <h3>{this.props.data.dates}</h3>
                    </TitleAndDatesDiv>
                    <br />
                    <BulletPoints data={this.props.data.description}></BulletPoints>
                </Description>
            </JobDiv>
        )
    }
}

const JobDiv = styled.div `
`;

const JobLocationDiv = styled.div `
    padding-top: 1rem;
    display: flex;
    h1 {
        color: #fff;
    }
    h2 {
        padding-left: .5rem;
        padding-top: .5rem;
        color: #fff;
        font-size: 1rem;
        font-style: italic;
    }
`;

const Description = styled.div `
    h2 {
        padding-top: .5rem;
        color: #fff;
        font-size: 1rem;
    }
`;

const TitleAndDatesDiv = styled.div `
    display: flex;
    h2 {
        padding-top: .5rem;
        color: #fff;
        font-size: 1rem;
    }
    h3 {
        padding-top: .7rem;
        padding-left: .5rem;
        color: #fff;
        font-size: .8rem;
        font-style: italic;
    }
`
