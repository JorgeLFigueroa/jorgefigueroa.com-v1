import React, { Component } from 'react'
import styled from "styled-components";

export default class About extends Component {

    render() {
        return (
            <Container>
                <h1>About Me</h1>
                <p> Hello! I'm Jorge, a software engineering student based in Rochester, NY.</p>
                <p>
                    I'm very passionate about creating things that live on the internet.<br/>
                    That includes, websites, applications, or anything in between.<br/>
                    My goal is to take creative ideas and bring them to life, while providing performant experiences.
                </p>
                <p>
                    I'm a 4th-year software engineering student at <a href='https://www.rit.edu/study/software-engineering-bs'>Rochester Institute of Technology</a><br/>
                    with an immerssion in ecnonomics.
                </p>
                <p>
                    Here are some of the technologies I've been working with:
                </p>
            </Container>
        )
    }
}

const Container = styled.div `
    h1 {
        font-size: 30px;
        padding-bottom: 20px;
    }
    a {
        text-decoration: none;
        color: white;
        font-weight: 500;
    }
`