import React, { Component } from 'react'
import styled from "styled-components";

export default class BulletPoints extends Component {
    render() {
        return (
            <div>
             {this.props.data.map((item) => (
                 <BulletPoint>{item}</BulletPoint>
             ))}
            </div>
         );
    }
}

const BulletPoint = styled.li `
    text-indent: .5rem;
    line-height: 1.5;
    @media only screen and (max-width: 300px) {
        font-size: .8rem;
    }
`