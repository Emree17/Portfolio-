import React,{ Component } from 'react';
import '../styles/Skills.css'; 
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';


import Fade from 'react-reveal/Fade';

class Skills extends Component {
    render() {
    return(
        <div id="skill-top">

            <Fade bottom>
            <h3 className="heading_1"> <a className="number-about" href=" "> 02. </a> My Skills </h3>
            </Fade>

            <div id="no-mob" className="logo-container">       

                    <div wrap horizontal='spaced'>
                        <Fade bottom>
                            <div className="about-column-1" flexGrow={1} horizontal='spaced'>
                                <h4 className="about-me-bold"> Languages</h4>     
                                <h4 className="about-me_bullet"><h className="arrow">⪢</h> Javascript(ES6+) </h4> 
                                <h4 className="about-me_bullet"><h className="arrow">⪢</h> Java </h4>
                                <h4 className="about-me_bullet"><h className="arrow">⪢</h> HTML</h4>
                                <h4 className="about-me_bullet"><h className="arrow">⪢</h> S(CSS) </h4>         
                                <h4 className="about-me_bullet"><h className="arrow">⪢</h> C/C++ ️</h4>  
                                               
                            </div>
                        </Fade>    
                        
                        <Fade bottom>
                            <div className="about-column-2" flexGrow={1} horizontal='spaced'>
                                <h4 className="about-me-bold"> Frameworks</h4> 
                                <h4 className="about-me_bullet"><h className="arrow">⪢</h> ReactJS</h4>     
                                <h4 className="about-me_bullet"><h className="arrow">⪢</h> Redux</h4>     
                                <h4 className="about-me_bullet"><h className="arrow">⪢</h> Bootstrap4</h4>         
                             
                            </div>
                        </Fade>    

                       

                       

                       
                        <Fade bottom>
                        <div className="about-column-3" flexGrow={1} horizontal='spaced'>
                                <h4 className="about-me-bold"> Tools </h4>  
                                <h4 className="about-me_bullet"><h className="arrow">⪢</h> VSCode </h4>   
                                <h4 className="about-me_bullet"><h className="arrow">⪢</h> Adobe Photoshop </h4> 
                                   
                                <h4 className="about-me_bullet"><h className="arrow">⪢</h> Git</h4>         
                                                    
                            </div>
                        </Fade>  

                        
                    </div>
            </div>
        </div>
    );
    }
}
export default Skills;