import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import '../styles/Certifications.css';


class Certifications extends Component {
    render() {
        return (
            <div id="cert-page">

                <Fade bottom>
                    <h3 className="heading-cert"> <a className="number-about" href="/resume"> 03. </a> Education </h3>
                </Fade>

                    <div className="cert-container">       

                        <div className="about-cert">

                        <Fade bottom>
                            <div className="col1" flexGrow={1}>
                                <div wrap horizontal='spaced'>
  
                                    <div className="card" flexGrow={1} horizontal='spaced'>
                                        <a className="cert-name" href="https://www.akdeniz.edu.tr/" target="_blank" rel="noopener noreferrer" >University of Akdeniz (2017-2022)</a>
                                        <a className="cert-desc" href="https://ubf.akdeniz.edu.tr/yonetim-bilisim-sistemleri-bolumu-561">- Management Information Systems </a>
                                    </div>

                                    <div className="card" flexGrow={1} horizontal='spaced'>
                                        <a className="cert-name" target="_blank" rel="noopener noreferrer" href="https://derincenecipfazil.meb.k12.tr/">Necip Fazıl Anatolia High School  (2013-2017)</a>
                                        <a className="cert-desc" href="https://derincenecipfazil.meb.k12.tr/"></a>
                                    </div>
                                </div>
                            </div>
                            </Fade>

                            
                            
                            
                        
                        
                        </div>
                    </div>
            </div>
        );
    }
}

export default Certifications;
