import React, { useState} from 'react';
import './style.css';
import { Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import datecape from '../../images/DateCapeDemo.gif';

function Cards() {
    const [popoverOpen9, setPopoverOpen9] = useState(false);
    const toggle9 = () => setPopoverOpen9(!popoverOpen9);

    const [popoverOpen10, setPopoverOpen10] = useState(false);
    const toggle10 = () => setPopoverOpen10(!popoverOpen10);
    return(
    
    <div className="container mt-2" id="projects">

        <br/>   
            <h2 className="mt-1" id="teamHeading">Team Projects</h2>
            <hr></hr>
    {/* ------------- Dish2Pass ---------- */}
            <div className="row cardSection">

                <div class="col-12 col-md-6 col-lg-4 cardDiv">
                    <p><span class='extraWords'><b>Dish2Pass</b></span>An application that generates tasty burger, duck and pasta recipes!</p>
                        <div class="card bg-dark text-white">
                            <img src='https://images.pexels.com/photos/2092906/pexels-photo-2092906.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' className="card-img center-text" id='dish2passPic' alt="..."/>
                        </div>

                        <br></br>

                        <a href="https://proj3ct2.herokuapp.com/" target="_blank" rel="noopener noreferrer" className='text-center'>
                            <button className="btn btn-dark">Live Site</button>
                        </a>
                        <a href="https://github.com/jmasaviru/Dish2Pass" target="_blank"rel="noopener noreferrer"className='text-center ml-1'>
                            <button className="btn btn-dark">GitHub</button>
                        </a>

                         {/* Tech Btn */}
                         <button className="btn btn-dark ml-1" id="Popover9">Tech</button>
                            <Popover placement="top" isOpen={popoverOpen9} target="Popover9" toggle={toggle9}>
                            <PopoverHeader className='text-center'>Technologies &#38; Concepts</PopoverHeader>
                            <PopoverBody className='text-center'>Express, EsLint, Handlebars, Heroku, MySQL, Node, Sequelize &#38; TravisCI</PopoverBody>
                            </Popover>
                </div>
            <br></br>
            {/* Date Cape */}
            <div class="col-12 col-md-6 col-lg-4 cardDiv">
                    <p><span class='extraWords'><b>Date Cape</b></span> DateCape is a date night planning service app that aims to simplify date night planning..</p>
                        <div class="card bg-dark text-white">
                            <img src={datecape} className="card-img center-text" id='datecapePic' alt="..."/>
                        </div>

                        <br></br>

                        <a href="https://jmasaviru.github.io/Datecape/" target="_blank" rel="noopener noreferrer" className='text-center'>
                            <button className="btn btn-dark">Live Site</button>
                        </a>
                        <a href="https://github.com/crackedsnowboard/project-maven" target="_blank" rel="noopener noreferrer" className='text-center ml-1'>
                            <button className="btn btn-dark">GitHub</button>
                        </a>
                        {/* Tech Btn */}
                        <button className="btn btn-dark ml-1" id="Popover10">Tech</button>
                            <Popover placement="top" isOpen={popoverOpen10} target="Popover10" toggle={toggle10}>
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