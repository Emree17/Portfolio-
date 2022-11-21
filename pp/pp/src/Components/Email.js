import React, { Component } from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'

class Email extends Component {
  render() {
    return (
      <div>
        <div id="Email-section" >
           <a className='sign' href='mailto:emrecan61_@hotmail.com' target={"_blank"} rel='noopener noreferrer'> <FontAwesomeIcon className='fontHai' icon={faEnvelope} size="1x" color='blue'  /> </a> { }
        </div>
      </div>
    )
  }
}

export default Email;