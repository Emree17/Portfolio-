import React, {Component} from 'react';

import './styles/App.css';


import Footer from './Components/Footer';
import Head from './Components/Head';

import Navbar from './Components/Navbar';


import Skills from './pages/Skills';
import Projects from './pages/Project';
import Certifications from './pages/Certifications';
import About from './pages/About';
import Fade from 'react-reveal/Fade';
import me from './images/dd.webp';

class App extends Component {
  render() {
  return (
    <div id="top" className="App">
      
      <Head />
      <Navbar />
      <article className = "contain">
        <Fade bottom>
          <h4 className="intro"> <span className="animate-hand" role="img" aria-label="hand-wave">👋</span> Hi, my name is </h4>
        <Fade bottom cascade>
          <h2 className="name">Emrecan Bilgin.</h2>
        </Fade>
        <h2 className="aftername"> </h2>
        
        <h4 className="desc">I'm a Frontend Developer!

❤️ I'm passionate about my work. Because I love what I do, I have a steady source of motivation that drives me to do my best.  <b>Work Done!</b>
        </h4>
        
        <p>
          <button className="arrow-link" target="_blank" rel="noopener noreferrer">
            <a className="mail" href="mailto:emrecan61_@hotmail.com">
              Get in touch
            </a>
          </button>
        </p>
        </Fade>
      </article> 
      <Fade bottom>
      <img className="me" src = {me} alt="Eshaan"/>
      </Fade>
      <About />
      <Skills />
      <Certifications />
      <Projects />
      {/* <Contact/> */}
      <Footer />
    </div>
  );
}
}





export default App;
