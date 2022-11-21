import React, { Component} from 'react';
import '../styles/contact.css';

import Fade from 'react-reveal/Fade';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn, faMediumM, faTwitter} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


class Contact extends Component {
    render() {
    return(
        <Fade bottom>
            <div id="Contact-section" className="cont">
                <h2 className="cent-line"> I am available for any new collabs, opportunities and ideas here : </h2>
                <div className="logos">  
                    <a className="sign" href="https:github.com/Emree17" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="fontHai" icon={faGithub} size="3x" color="#2bbc8a"/></a> {   }
                    <a className="sign" href="emrecan61_@hotmail.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="fontHai" icon={faEnvelope} size="3x" color="#2bbc8a"/></a> {   }
                    <a className="sign" href="https://www.linkedin.com/in/emrecan-bilgin17" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="fontHai" icon={faLinkedinIn} size="3x" color="#2bbc8a"/></a> {    }
               </div>
            </div>
        </Fade>
    );
    }
}

export default Contact;