import React from 'react';
import headshot2 from '../../images/resumepic1.jpg';
import './style.css';

function AboutMe() {
    return (
        <div className="aM">
            <div className="container mt-4"  id="aboutMe">
                <div className='row row1'>

                    <div className='col-lg-4 col-md-6'>
                        <div className='text-center'>
                            <img class="mr-3 mt-2 headShot rounded" src={headshot2} alt="headShot"/>
                        </div>
                    </div>

                    <div className='col-lg-8 col-md-6'>
                        <div class="media-body text-wrap">
                            <h3 class="mt-2">About Me</h3>
                                <hr/>
                            <h6> Full Stack Web Developer currently learning Cybersecurity, with previous experience in Accounting and IT. I hold a Bachelors of Business Administration in Accounting and experience in finance and accounting operations in a non-profit organization.
                                    <br/>
                                    To bolster my endeavors in Software Engineering, my passion for learning steered me to the Amazon Cybersecurity course with Correlation One, which I am to complete in November 2023.
                                    <br/>
                                    Excited at shifting my career towards this fascinating trajectory! 
                            </h6>
                            
                        </div>
                    </div>
                        
                </div>
            </div>
        </div>
    )
}

export default AboutMe;