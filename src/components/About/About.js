import React, { useState }  from 'react';
import classes from './About.module.css';
import Barchart from '../Barchart/Barchart';
import Image from 'react-bootstrap/Image';
import ProfilePic from "../../assets/images/profile_pic.png";
import Aboutcard from './Aboutcard/Aboutcard';
import AboutModal from './AboutModal/AboutModal';

import { mdiDatabase } from '@mdi/js';
import { mdiResponsive } from '@mdi/js';
import { mdiReact } from '@mdi/js';
import { mdiBrain } from '@mdi/js';

import ScrollAnimation from 'react-animate-on-scroll';

const all_about_cards_info = [
    {
        title:"Reactive",
        subtext: "Interactive experience that is responsive and fast.",
        image: mdiReact
    },
    {
        title:"Intuitive",
        subtext: "Geared towards the way people work and think.",
        image: mdiBrain
    },
    {
        title:"Intergration",
        subtext: "Creating systems that interact seamlessly.",
        image: mdiDatabase
    },
    {
        title:"Adaptive",
        subtext: "Designed with all devices in mind.",
        image: mdiResponsive
    },
];

const all_about_cards = all_about_cards_info.map(card => {
    return <Aboutcard key={card.title} title={card.title} subtext={card.subtext} image={card.image}/>
});

const About = () => {
    const [showSelfTaughtModal, setShowSelfTaughtModal] = useState(false);

    const handleHideSelfTaughtModal = () => {
        setShowSelfTaughtModal(false);
    };

    return ( 
        <div className={classes.About} id="about" >
            <ScrollAnimation animateIn="slideInRight" duration="1.1" animateOnce>
                <h1>ABOUT</h1>
            </ScrollAnimation>
            <ScrollAnimation animateIn="slideInLeft" duration="1.3" animateOnce>
                <div className={classes.AboutCardGrid}>
                    {all_about_cards}
                </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="slideInRight" duration="1.3" animateOnce>
            <div className={classes.AboutGrid}>
                <div className={classes.ImageDescription} >
                    <Image src={ProfilePic} roundedCircle fluid />
                    <div style={{margin:'20px'}}>
                    <h4><strong>Eugene Upston</strong></h4>
                    <p> is a driven <a style={{color:"#b25364"}} onClick={() => setShowSelfTaughtModal(true)} >self-taught</a> programmer
                    currently working as a Software Test Engineer for
                    an DJ company <a href="https://www.inmusicbrands.com/" alt="" style={{color:"#b25364"}}>inMusic.</a></p>
                    </div>
                    {showSelfTaughtModal ? <AboutModal show={showSelfTaughtModal} onHide={handleHideSelfTaughtModal}/> : null }
                </div>
                <Barchart/>
            </div>
            </ScrollAnimation>

        </div>
     );
}
 
export default About;