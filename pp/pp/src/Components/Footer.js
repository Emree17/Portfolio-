import React, { Component } from 'react';
import '../styles/footer.css';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faMedium, faTwitter } from '@fortawesome/free-brands-svg-icons';


 class Footer extends Component {
  render() {
    return (
      
        <Fade bottom>
            <div className="footer-container" id="foot">
                {/* <Flip cascade> */}
                <h4 className="intro1"> Emrecan Bilgin</h4>
                <h4 className="intro1"> Frontend Developer <span role="img" aria-label="rock"> </span> </h4>
                {/* </Flip> */}

                <div className="links">
                    <a className="arrow-link-1" href="mailto:emrecan61_@hotmail.com" target="_blank" rel="noopener noreferrer">MAIL</a>
                    <a className="arrow-link-1" href="https:github.com/Emree17" target="_blank" rel="noopener noreferrer">GITHUB</a>
                    <a className="arrow-link-1" href="https://www.linkedin.com/in/emrecan-bilgin17" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
            
                </div>

                <div className="favicon-again">
                    <a className="arrow-link-1" href="mailto:emrecan61_@hotmail.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope} size="2x"/>{   }</a>
                    <a className="arrow-link-1" href="https:github.com/Emree17" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size="2x" />{   }</a>
                    <a className="arrow-link-1" href="https://www.linkedin.com/in/emrecan-bilgin17/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} size="2x" />{   }</a>
                    
                </div>

            </div>
        </Fade>
    )
  }
}
export default Footer;