import React, { useState} from 'react';
import './style.css';
import { Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import datecape from '../../images/datecape.png';
import infotech from '../../images/infotech.png';

function Cards() {
    const [popoverOpen9, setPopoverOpen9] = useState(false);
    const toggle9 = () => setPopoverOpen9(!popoverOpen9);

    const [popoverOpen10, setPopoverOpen10] = useState(false);
    const toggle10 = () => setPopoverOpen10(!popoverOpen10);

    const [popoverOpen11, setPopoverOpen11] = useState(false);
    const toggle11 = () => setPopoverOpen11(!popoverOpen11);
    return(
    
    <div className="container mt-2" id="projects">

        <br/>   
            <h2 className="mt-1" id="teamHeading">Team Projects</h2>
            <hr></hr>
    
            <div className="row cardSection">

                {/* ---------Infotech---------- */}
                <div class="col-12 col-md-6 col-lg-4 cardDiv">
                    <p><span class='extraWords'><b>Infotech University:</b></span> A University webpage that allows the user upon registering and logging-in, to gain access to different features.</p>
                        <div class="card bg-dark text-white">
                            <img src={infotech} className="card-img center-text" id='infotechPic' alt="..."/>
                        </div>

                        <br></br>

                        <a href="https://any-university.herokuapp.com/home" target="_blank" rel="noopener noreferrer" className='text-center'>
                            <button className="btn btn-dark">Live Site</button>
                        </a>
                        <a href="https://github.com/jmasaviru/project-three" target="_blank"rel="noopener noreferrer"className='text-center ml-1'>
                            <button className="btn btn-dark">GitHub</button>
                        </a>

                         {/* Tech Btn */}
                         <button className="btn btn-dark ml-1" id="Popover9">Tech</button>
                            <Popover placement="top" isOpen={popoverOpen9} target="Popover9" toggle={toggle9}>
                            <PopoverHeader className='text-center'>Technologies &#38; Concepts</PopoverHeader>
                            <PopoverBody className='text-center'>Bcrypt.js, Bootstrap, Express, EsLint, Is-empty, Heroku, MongoDB, Mongoose, Node.js, Passport.js, Passport-JWT, React, React-Bootstrap &#38; Validator</PopoverBody>
                            </Popover>
                </div>
            <br></br>

                {/* ------------- Dish2Pass ---------- */}
                <div class="col-12 col-md-6 col-lg-4 cardDiv">
                    <p><span class='extraWords'><b>Dish2Pass:</b></span> An application that generates and displays different tasty burger, duck or pasta recipes!</p>
                        <div class="card bg-dark text-white">
                            <img src='https://images.pexels.com/photos/5688248/pexels-photo-5688248.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' className="card-img center-text" id='dish2passPic' alt="..."/>
                        </div>

                        <br></br>

                        <a href="https://proj3ct2.herokuapp.com/" target="_blank" rel="noopener noreferrer" className='text-center'>
                            <button className="btn btn-dark">Live Site</button>
                        </a>
                        <a href="https://github.com/jmasaviru/Dish2Pass" target="_blank"rel="noopener noreferrer"className='text-center ml-1'>
                            <button className="btn btn-dark">GitHub</button>
                        </a>

                         {/* Tech Btn */}
                         <button className="btn btn-dark ml-1" id="Popover10">Tech</button>
                            <Popover placement="top" isOpen={popoverOpen10} target="Popover10" toggle={toggle10}>
                            <PopoverHeader className='text-center'>Technologies &#38; Concepts</PopoverHeader>
                            <PopoverBody className='text-center'>Express, EsLint, Handlebars, Heroku, MySQL, Node, Sequelize &#38; TravisCI</PopoverBody>
                            </Popover>
                </div>
            <br></br>
            {/* ----------Date Cape---------- */}
            <div class="col-12 col-md-6 col-lg-4 cardDiv">
                    <p><span class='extraWords'><b>Date Cape:</b></span> DateCape is a date night planning service app that aims to simplify date night planning while factoring in weather and location.</p>
                        <div class="card bg-dark text-white">
                            <img src={datecape} className="card-img center-text" id='datecapePic' alt="..."/>
                        </div>

                        <br></br>

                        <a href="https://jmasaviru.github.io/Datecape/" target="_blank" rel="noopener noreferrer" className='text-center'>
                            <button className="btn btn-dark">Live Site</button>
                        </a>
                        <a href="https://github.com/jmasaviru/Datecape" target="_blank" rel="noopener noreferrer" className='text-center ml-1'>
                            <button className="btn btn-dark">GitHub</button>
                        </a>
                        {/* Tech Btn */}
                        <button className="btn btn-dark ml-1" id="Popover11">Tech</button>
                            <Popover placement="top" isOpen={popoverOpen11} target="Popover11" toggle={toggle11}>
                            <PopoverHeader className='text-center'>Technologies &#38; Concepts</PopoverHeader>
                            <PopoverBody className='text-center'>Bulma, Flatpickr, HTML, CSS, JavaScript &#38; jQuery</PopoverBody>
                            </Popover>
                </div>
            <br></br>
            {/*  */}
         
            <br></br>
            </div>
        <br/>
    </div>
    
    )
}
export default Cards;