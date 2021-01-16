import React, { Component } from 'react'
import styled from 'styled-components'
import defaultImg from '../Styles/image-gallery.svg'

export default class ProjectCard extends Component {
    render() {
        return (
            <CardContainer>
                <ImageContainer>
                    <img src={defaultImg} alt='default'></img>
                </ImageContainer>
                <InfoContainer>
                    <h1> TITLE HERE </h1>
                    <DescriptionContainer>
                        <p> DESCRIPTION GOES HERE </p>
                    </DescriptionContainer>
                </InfoContainer>
            </CardContainer>
        )
    }
}

const CardContainer = styled.div ` 
    display: flex;
    flex-direction: column;
    /* outline: 5px solid #001c30; */
    width: fit-content;
    padding-right: 12rem;
`

const ImageContainer = styled.div ` 
    img {
        height: 10rem;
        width: 10rem;
    }
`

const InfoContainer = styled.div ` 
    h1 {
        display: inline;
    }

`

const DescriptionContainer = styled.div ` 
    background-color: #001c30;
    p {
        color: #ece8ef;
        
    }
`
