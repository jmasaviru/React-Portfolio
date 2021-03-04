import React, { useState } from 'react';
import './style.css';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';

function HomeworkCards() {

    // Tech Btn Functions: 
    const [popoverOpen3, setPopoverOpen3] = useState(false);
    const toggle3 = () => setPopoverOpen3(!popoverOpen3);

    const [popoverOpen4, setPopoverOpen4] = useState(false);
    const toggle4 = () => setPopoverOpen4(!popoverOpen4);

    const [popoverOpen5, setPopoverOpen5] = useState(false);
    const toggle5 = () => setPopoverOpen5(!popoverOpen5);

    const [popoverOpen6, setPopoverOpen6] = useState(false);
    const toggle6 = () => setPopoverOpen6(!popoverOpen6);

    const [popoverOpen7, setPopoverOpen7] = useState(false);
    const toggle7 = () => setPopoverOpen7(!popoverOpen7);

    const [popoverOpen8, setPopoverOpen8] = useState(false);
    const toggle8 = () => setPopoverOpen8(!popoverOpen8);

    return(
        <div className="container" id="assignments">
            <br/>
            <h2 className="text-right hwHeader">Projects</h2>
            <hr></hr>
            <br/>
            <div className="row row1">
  
                  {/* SL */}
                  <div class="col-12 col-md-6 col-lg-4 cardDiv">
                    <p><span class='extraWords'><b>Burger House</b></span> Allows users to create and "devour" their favorite burgers limitlessly. Check it out!</p>
                               
                        <div class="card bg-dark text-white">
                            <img src='https://images.pexels.com/photos/4409273/pexels-photo-4409273.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' className="card-img center-text" id='burgerPic' alt="..."/>
                        </div>

                        <br></br>

                        <a href="https://burgerh0use.herokuapp.com/" target="_blank" rel="noopener noreferrer" className='text-center'>
                            <button className="btn btn-dark">Live Site</button>
                        </a>
                        <a href="https://github.com/jmasaviru/Eat-da-Burger" target="_blank" rel="noopener noreferrer"  className='text-center ml-1'>
                            <button className="btn btn-dark">GitHub</button>
                        </a>
                          {/* Tech Btn */}
                          <button className="btn btn-dark ml-1" id="Popover7">Tech</button>
                            <Popover placement="top" isOpen={popoverOpen8} target="Popover7" toggle={toggle8}>
                            <PopoverHeader className='text-center'>Technologies &#38; Concepts</PopoverHeader>
                            <PopoverBody className='text-center'>Config.json,Express, Handlebars, Heroku, MySQL, Node.js</PopoverBody>
                            </Popover>
                </div>
            <br></br>
            {/*  */}

            {/* WT */}
            <div class="col-12 col-md-6 col-lg-4 cardDiv">
                    <p><span class='extraWords'><b>Workout Tracker</b></span> A fitness tracker that enables the user to view, create and track daily workouts!</p>
                               
                        <div class="card bg-dark text-white">
                            <img src='https://images.pexels.com/photos/38630/bodybuilder-weight-training-stress-38630.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' className="card-img center-text" id='workoutPic' alt="..."/>
                        </div>

                        <br></br>

                        <a href="https://warm-temple-15386.herokuapp.com/" target="_blank" rel="noopener noreferrer" className='text-center'>
                            <button className="btn btn-dark">Live Site</button>
                        </a>
                        <a href="https://github.com/jmasaviru/Workout-Tracker" target="_blank" rel="noopener noreferrer"  className='text-center ml-1'>
                            <button className="btn btn-dark">GitHub</button>
                        </a>

                         {/* Tech Btn */}
                         <button className="btn btn-dark ml-1" id="Popover6">Tech</button>
                            <Popover placement="top" isOpen={popoverOpen7} target="Popover6" toggle={toggle7}>
                            <PopoverHeader className='text-center'>Technologies Used</PopoverHeader>
                            <PopoverBody>Express, Handlebars, Heroku, MongoDB, Mongoose</PopoverBody>
                            </Popover>

                </div>
            <br></br>
            {/*  */}

                {/* WDS */}
                <div class="col-12 col-md-6 col-lg-4 cardDiv">
                    <p><span class='extraWords'><b>WorkDay Scheduler</b></span> A simple daytime planner application that allows the user to save activities for each hour of the day!</p>
                               
                        <div class="card bg-dark text-white">
                            <img src='https://images.pexels.com/photos/760710/pexels-photo-760710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' className="card-img center-text" id='workdayPic' alt="..."/>
                        </div>

                        <br></br>

                        <a href="https://jmasaviru.github.io/Work-Day-Scheduler/" target="_blank" rel="noopener noreferrer" className='text-center'>
                            <button className="btn btn-dark">Live Site</button>
                        </a>
                        <a href="https://github.com/jmasaviru/Work-Day-Scheduler" target="_blank" rel="noopener noreferrer" className='text-center ml-1'>
                            <button className="btn btn-dark">GitHub</button>
                        </a>

                         {/* Tech Btn */}
                         <button className="btn btn-dark ml-1" id="Popover6">Tech</button>
                            <Popover placement="top" isOpen={popoverOpen6} target="Popover6" toggle={toggle6}>
                            <PopoverHeader className='text-center'>Technologies Used</PopoverHeader>
                            <PopoverBody>CSS, HTML, JavaScript, jQuery</PopoverBody>
                            </Popover>

                </div>
            <br></br>
            {/*  */}
    


                  {/*  PG */}
                <div class="col-12 col-md-6 col-lg-4 cardDiv">
                    <p><span class='extraWords'><b>Weather Dashboard</b></span> A responsive weather dashboard that retrieves current and forecasted weather data for different cities and stores previous searches!</p>
                        <div class="card bg-dark text-white">
                            <img src='https://hips.hearstapps.com/pop.h-cdn.co/assets/15/09/1425048341-weather-map.gif?fill=320:193&resize=768:*' className="card-img center-text" id='weatherPic' alt="..."/>
                        </div>

                        <br></br>

                        <a href="https://jmasaviru.github.io/Weather-Dashboard/" target="_blank" rel="noopener noreferrer" className='text-center'>
                            <button className="btn btn-dark">Live Site</button>
                        </a>
                        <a href="https://github.com/jmasaviru/Weather-Dashboard" target="_blank"  rel="noopener noreferrer" className='text-center ml-1'>
                            <button className="btn btn-dark">GitHub</button>
                        </a>

                        {/* Tech Btn */}
                        <button className="btn btn-dark ml-1" id="Popover5">Tech</button>
                        <Popover placement="top" isOpen={popoverOpen5} target="Popover5" toggle={toggle5}>
                        <PopoverHeader className='text-center'>Technologies Used</PopoverHeader>
                        <PopoverBody>JavaScript, HTML, Bootstrap, OpenWeather API</PopoverBody>
                        </Popover>

                </div>
            <br></br>
            {/*  */}

                  {/* NT */}
                  <div class="col-12 col-md-6 col-lg-4 cardDiv">
                    <p><span class='extraWords'><b>Note Taker</b></span> An application that allows the user to write, save and delete previously saved notes!</p>
                               
                        <div class="card bg-dark text-white">
                            <img src='https://images.pexels.com/photos/4195410/pexels-photo-4195410.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' className="card-img center-text" id='noteTakerPic' alt="..."/>
                        </div>

                        <br></br>

                        <a href="https://shielded-beyond-78700.herokuapp.com/" target="_blank" rel="noopener noreferrer" className='text-center'>
                            <button className="btn btn-dark">Live Site</button>
                        </a>
                        <a href="https://github.com/jmasaviru/Note-Taker" target="_blank" rel="noopener noreferrer" className='text-center ml-1'>
                            <button className="btn btn-dark">GitHub</button>
                        </a>

                        {/* Tech Btn */}
                        <button className="btn btn-dark ml-1" id="Popover4">Tech</button>
                        <Popover placement="top" isOpen={popoverOpen4} target="Popover4" toggle={toggle4}>
                        <PopoverHeader className='text-center'>Technologies Used</PopoverHeader>
                        <PopoverBody>Express.js, Heroku, JavaScript, JSON, Node.js</PopoverBody>
                        </Popover>

                    </div>
            <br></br>
            {/*  */}
           
              {/* ET */}
              <div class="col-12 col-md-6 col-lg-4 cardDiv">
                    <p><span class='extraWords'><b>Employee Manager</b></span> A command-line application that can be used as a solution for managing a company's employees!
                    </p>
                               
                    <div class="card bg-dark text-white">
                        <img src='https://images.pexels.com/photos/3182801/pexels-photo-3182801.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' className="card-img center-text" id='employeeTrackerPic' alt="..."/>
                    </div>

                        <br></br>

                        <a href="https://github.com/jmasaviru/Employee-Tracker" target="_blank" rel="noopener noreferrer" className='text-center ml-1'>
                            <button className="btn btn-dark">GitHub</button>
                        </a>

                            {/* Tech Btn */}
                            <button className="btn btn-dark ml-1" id="Popover3">Tech</button>
                            <Popover placement="top" isOpen={popoverOpen3} target="Popover3" toggle={toggle3}>
                            <PopoverHeader className='text-center'>Technologies Used</PopoverHeader>
                            <PopoverBody>Node.js, Express.js, ES6, Heroku</PopoverBody>
                            </Popover>
                         
                </div>
            <br></br>
            {/*  */}

             </div>

             <br></br>     <br></br>     <br></br>     <br></br>
        </div>
    )
}

export default HomeworkCards;