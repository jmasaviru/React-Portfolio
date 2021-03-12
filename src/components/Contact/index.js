import React, { useState } from 'react';
import { Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import './style.css';
import gitHubLogo from '../../images/github-logo.png';

function Contact(props){

    const [popoverOpen1, setPopoverOpen1] = useState(false);

    const toggle1 = () => setPopoverOpen1(!popoverOpen1);

    const [popoverOpen2, setPopoverOpen2] = useState(false);

    const toggle2 = () => setPopoverOpen2(!popoverOpen2);


    const [popoverOpen3, setPopoverOpen3] = useState(false);

    /* eslint-disable no-unused-vars */
    const toggle3 = () => setPopoverOpen3(!popoverOpen3);

    return(
    <div className="mt-4">
          
       
       
        <div className='row' id='contactRow'>
            <div className='col'>
                <div className="footer-copyright text-center py-3 ml-4">
                    <h3 className='text-left'>Connect </h3>
                    <hr></hr>
                        <a className="btn mb-4" href="https://github.com/jmasaviru" rel="noopener noreferrer" target="_blank">
                            <img className='btn linkImg' src={gitHubLogo} alt="..."/>
                        </a>
                        <a href="https://www.linkedin.com/in/james-masaviru-ba0a2117/" rel="noopener noreferrer" target="_blank">
                            <img className="btn mb-4 linkImg" target="_blank" src="https://image.flaticon.com/icons/png/512/61/61109.png" alt="..."></img>
                        </a>
                        <a href="https://www.youtube.com/channel/UC6hNqvr03w_KP0PwbeJzcsQ" rel="noopener noreferrer" target="_blank">
                            <img className="btn mb-4 linkImg" target="_blank" src="https://img.flaticon.com/icons/png/512/49/49399.png" alt="..."></img>
                        </a>
                        <a href="https://docs.google.com/document/d/1PC5i2d_d5IsvHtBSlKg0Z7JIo7KG_WIQAjI9qWX9k1c/edit?usp=sharing" rel="noopener noreferrer" target="_blank">
                            <img className="btn mb-4 linkImg" target="_blank" src="https://static.thenounproject.com/png/637927-200.png" alt="..."></img>
                        </a>
                      
                        <a href id="Popover1" type="button">
                        <img className="btn mb-4 linkImg" target="_blank" src="https://static.thenounproject.com/png/1042814-200.png" alt="..."></img>
                        </a>
                            <Popover placement="top" isOpen={popoverOpen1} target="Popover1" toggle={toggle1}>
                            <PopoverHeader>Phone Number</PopoverHeader>
                            <PopoverBody>(313) 652-4919</PopoverBody>
                        </Popover>
                        
                        <a href id="Popover2" type="button">
                            <img className="btn mb-4 linkImg" target="_blank" src="https://image.flaticon.com/icons/png/512/8/8807.png" alt="..."></img>
                        </a>
                            <Popover placement="top" isOpen={popoverOpen2} target="Popover2" toggle={toggle2}>
                            <PopoverHeader>Email Address</PopoverHeader>
                            <PopoverBody>jmasaviru@gmail.com</PopoverBody>
                        </Popover>
   
                    </div>
                </div>
         </div>
     </div>
    )
}

export default Contact;