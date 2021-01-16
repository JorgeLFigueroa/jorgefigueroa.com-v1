import React, { Component } from 'react'
import styled from 'styled-components';
import Button from './Button';

export default class Contact extends Component {
    render() {
        return (
            <ContactContainer>
                <h2>Let's talk!</h2>
                <h1>Get In Touch</h1>
                <p>
                    If you'd like to contact me for any new opportunities or 
                    with questions or just to say hi, my inbox is always open!<br/>
                    I will get back to you as soon as I can. Thank you!
                </p>
                <Button bttnText="Say Hello" link='mailto:softwarebyjorge@gmail.com'></Button>
            </ContactContainer>
        )
    }
}

const ContactContainer = styled.div ` 
    padding-top: 9rem;
    text-align: center;
    

    h1 {
        color: #2AF5FF;
        font-size: 3rem;
    }

    h2 {
        font-size: 2rem;
        color: #0496FF;
    }

    p {
        margin: 20px 0 0;
        color: #ece8ef;
        margin-bottom: 3rem;
    }
`