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
                            <h6>Full Stack Web Developer with previous experience in Accounting and IT. Self motivated with a high impetus for problem solving and learning.
                                    <br/><br/>
                                    My passion for learning/enhancing my skills and my inclination towards Information Technology steered me to a Full Stack Web Development course at the Michigan State University Coding Bootcamp which I have now completed. Excited at shifting my career towards this fascinating trajectory! 
                            </h6>
                            
                        </div>
                    </div>
                        
                </div>
            </div>
        </div>
    )
}

export default AboutMe;