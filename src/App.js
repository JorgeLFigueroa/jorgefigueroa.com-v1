import React from 'react';
import styled from 'styled-components';
import About from './Components/About';
import { Hero } from './Components/Hero';
import { Navbar } from './Components/Navbar';



const App = () => {
  return (
    <Container>
      <Navbar/>
      <SectionContainer>
        <Hero/>
        <About/>
      </SectionContainer>
    </Container>
  )
}

export default App;



const Container = styled.div`

  background: #063970;
  height: 100vh;

`
const SectionContainer = styled.section`
  padding: 20%;
  background: #063970;
`

