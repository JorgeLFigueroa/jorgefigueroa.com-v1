import React from 'react';
import styled from 'styled-components';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Hero  from './Components/Hero';
import { Navbar } from './Components/Navbar';
import Projects from './Components/Projects';
import Work from './Components/Work';



const App = () => {
  return (
    <Container>
      <Navbar/>
      <SectionContainer>
        <Hero/>
        <About/>
        <Work/>
        <Projects/> 
        <Contact/>
      </SectionContainer>
      <Footer/>
    </Container>
  )
}

export default App;



const Container = styled.div`

  background: #00487C;
  height: 100vh;

`
const SectionContainer = styled.section`
  padding: 10%;
  background: #063970;
`

