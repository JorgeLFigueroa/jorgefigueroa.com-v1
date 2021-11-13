import React, { Component } from 'react'
import styled from "styled-components";
import Button from "./Button";
import Typewriter from 'typewriter-effect';
export default class Hero extends Component {

  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      isOn: false,
      start: 0
    }
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }

  startTimer() {
    this.setState({
      isOn: true,
      time: this.state.time,
      start: Date.now() - this.state.time
    })
    this.timer = setInterval(() => this.setState({ 
      time: Date.now() - this.state.start
    }), 1)
  }

  stopTimer() {
    this.setState({
      isOn: false,
    })
    clearInterval(this.timer)
  }

  resetTimer() {
    this.setState({
      time: 0,
      isOn: false
    })
  }

  componentDidMount() {
    this.startTimer();
    // this makes a call once the component has been render but we give it a timeout to ensure the entire component has loaded.
    setTimeout(() => {
      this.stopTimer();
    }, 10000)
  }

  componentWillUnmount() {
    this.stopTimer();
  }

  render() {
    return (
      <HeroContainer>
        <div className='greeting'> 
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString('Hi, my name is')
                .pauseFor(2500)
                .start();
            }}
          />
        </div>
        <div className='name'> 
          { (this.state.time > 2500) ? <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString('Jorge Figueroa.')
                .pauseFor(3000)
                .start();
            }}
          /> : null}
        </div>
        <div className='intro'> 
          { (this.state.time > 4700) ? <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString('I build things for the web.')
                .pauseFor(3500)
                .start();
            }}
          /> : null}
        </div>
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
  }
}

const HeroContainer = styled.div`
  margin-top: 40%;
  flex-direction: column;
  align-items: flex-start;
  min-height: 50vh;

  .greeting {
    margin: 0 0 5px 4px;
    color: #ffc09f;
    font-size: 1.5rem;
    font-weight: 400;
  }
  .name {
    color: #0496ff;
    font-size: 4rem;
  }
  .intro {
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
