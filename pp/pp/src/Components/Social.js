import React, { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn, faMediumM, faTwitter} from '@fortawesome/free-brands-svg-icons'

 class Social extends Component {
  render() {
    return (
      <div>
        <div id="Social-section">
                <div className="logos">  
                    <a className="sign" href="https:github.com/Emree17" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="fontHai" icon={faGithub} size="1x" color="#2bbc8a"/></a> {   }                    
                    <a className="sign" href="https://www.linkedin.com/in/emrecan-bilgin17" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="fontHai" icon={faLinkedinIn} size="1x" color="#2bbc8a"/></a> {    }
                    
                </div>
            </div>
      </div>
    )
  }
}
export default Social;
