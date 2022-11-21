import React, { Component} from 'react';
import '../styles/About.css';
import Fade from 'react-reveal/Fade';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartbeat, faFire, faLaptopCode } from '@fortawesome/free-solid-svg-icons';

class About extends Component {
    render() {
    return(

        <div id="about-page">
            <div className="contain1">
            <Fade bottom>        
                <h3 className="heading"> <a className="number-about" href=" ">01. </a>About Me </h3>
                <div className="col2" flexGrow={1}>
                    <div className="am-size">    
                        <Fade bottom>
                            <div className="am-1">

                            <h4 className="about-me"> I am aiming to develop myself more and more every day in order to closely follow the development of the information sector, which is changing rapidly with each passing day and constantly adding information, and to meet the needs. I graduated from Akdeniz University Management Information Systems Department.  I also want to concentrate on the Frontend field and specialize in this field. I am a passionate front-end developer.<a className="bold-blue" href=" "> </a> 
                                    </h4>
                            
                                <h4 className="about-me"> </h4>
                            </div>
                        </Fade>    

                        <div wrap horizontal='spaced'>
                            <Fade bottom>
                                <div className="about-column-1" flexGrow={1} horizontal='spaced'>
                                    <h4 className="about-me-bold"> <FontAwesomeIcon icon={faHeartbeat} /> Life so Far...</h4>     
                                    <h4 className="about-me_bullet"><h className="arrow"></h>  </h4> 
                                               
                                </div>
                            </Fade>    
                            
                            <Fade bottom>
                               
                            </Fade>    

                            <Fade bottom>
                                <div className="about-column-3" flexGrow={1} horizontal='spaced'>
                                    <h4 className="about-me-bold"> <FontAwesomeIcon icon={faLaptopCode} /> Learning...</h4>   
                                    <h4 className="about-me_bullet"><h className="arrow">⪢</h> PM Tips and Tricks! </h4>                        
                                    <h4 className="about-me_bullet"><h className="arrow">⪢</h> Software Project Management </h4>                        
                                                     
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </Fade>    
            </div>
        </div>
        
    );
    }
}

export default About;