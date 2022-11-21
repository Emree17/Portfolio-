import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import '../styles/Project.css';


class Projects extends Component {
    render() {
        return (
            <div id="project-page" className="proj-page">  
                <Fade Bottom>
                    <h3 className="heading-proj"> <a className="number-about" href="/projects"> 04. </a> My Projects </h3>
                </Fade>

                    <div className="proj-container">

                    <Fade Bottom>

                        <div className="project">
                            <a className="arrow-link-2" href="https://github.com/Emree17" target="_blank" rel="noopener noreferrer">Portfolio  <h className="arrow__1">➜</h></a>
                            

                            <div className="proj-desc-container">

                               

                                <div className="proj-desc-tool-container">

                                    <p className="proj-desc-tool"> HTML </p>  
                                    <p className="proj-desc-tool"> Javascript </p>
                                    <p className="proj-desc-tool"> ReactJS </p>
                                    <p className="proj-desc-tool"> SCSS </p>
                                    <p className="proj-desc-tool"> Git </p>

                                </div>
                            </div>
                        </div>

                        </Fade>

                        <Fade Bottom>

                        <div className="project">
                        <a className="arrow-link-2" href="https://github.com/Emree17/Proje" target="_blank" rel="noopener noreferrer">Search engine project with React <h className="arrow__1">➜</h></a>
                            <div className="proj-desc-container">
                               
                                <div className="proj-desc-tool-container">
                                    <p className="proj-desc-tool"> HTML </p>  
                                    <p className="proj-desc-tool"> Javascript </p>
                                    <p className="proj-desc-tool"> ReactJS </p>  
                                    <p className="proj-desc-tool"> Css </p>
                                </div>
                            </div>
                        </div>

                    </Fade>

                    <Fade Bottom>
                        <div className="project">
                        <a className="arrow-link-2" href="https://github.com/Emree17/Use-of-React" target="_blank" rel="noopener noreferrer">Use-of-React <h className="arrow__1">➜</h></a>
                            <div className="proj-desc-container">
                               

                                <div className="proj-desc-tool-container">
                                    <p className="proj-desc-tool"> React </p>  
                                    <p className="proj-desc-tool"> Javascript </p>
                                    <p className="proj-desc-tool"> HTML </p>  
                                    <p className="proj-desc-tool"> SCSS </p>  
                                    
                                </div>
                            </div>
                        </div>

                    </Fade>

                        <Fade Bottom>

                        <div className="project">
                        <a className="arrow-link-2" href="https://github.com/Emree17/React" target="_blank" rel="noopener noreferrer"> React<h className="arrow__1">➜</h></a>
                            <div className="proj-desc-container">
                               

                                <div className="proj-desc-tool-container">
                                    <p className="proj-desc-tool"> React </p>  
                                    <p className="proj-desc-tool"> HTML </p>
                                    <p className="proj-desc-tool"> Css</p>
                                </div>
                            </div>
                        </div>

</Fade>

<Fade Bottom>

                        <div className="project">
                        <a className="arrow-link-2" href="https://github.com/Emree17/-internship-project" target="_blank" rel="noopener noreferrer"> internship-project <h className="arrow__1">➜</h></a>
                            <div className="proj-desc-container">
                                 


                                <div className="proj-desc-tool-container">
                                    <p className="proj-desc-tool"> C </p>  
                                    </div>
                                    
                            </div>
                        </div>
</Fade>

                        
</div>
</div>
        );
        }
}
export default Projects;