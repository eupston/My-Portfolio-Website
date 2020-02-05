import React from 'react';
import classes from './About.module.css';
import Barchart from '../Barchart/Barchart';
import Image from 'react-bootstrap/Image';
import ProfilePic from "../../assets/images/profile_pic.png";
import Aboutcard from './Aboutcard/Aboutcard';

import { mdiDatabase } from '@mdi/js';
import { mdiDevices } from '@mdi/js';
import { mdiResponsive } from '@mdi/js';
import { mdiStateMachine } from '@mdi/js';
import { mdiReact } from '@mdi/js';
import { mdiBrain } from '@mdi/js';

const all_about_cards_info = [
    {
        title:"Reactive",
        subtext: "subtext explaining more",
        image: mdiReact
    },
    {
        title:"Intutive",
        subtext: "subtext explaining more",
        image: mdiBrain
    },
    {
        title:"Database",
        subtext: "subtext explaining more",
        image: mdiDatabase
    },
    {
        title:"Adaptive",
        subtext: "subtext explaining more",
        image: mdiResponsive
    },
];

const all_about_cards = all_about_cards_info.map(card => {
    return <Aboutcard title={card.title} subtext={card.subtext} image={card.image}/>
});

const About = () => {
    return ( 
        <div className={classes.About} id="about" >
            <h1>ABOUT</h1>
            <div className={classes.AboutCardGrid}>
                {all_about_cards}
            </div>
            <div className={classes.AboutGrid}>
                <div className={classes.ImageDescription} >
                    <Image src={ProfilePic} roundedCircle fluid />
                    <div style={{margin:'20px'}}>
                    <h4><strong>Eugene Upston</strong></h4>
                    <p> is a driven <a style={{color:"#b25364"}}>self-taught</a> programmer 
                    currently working as a Pipeline Software Developer for 
                    an AI company <a style={{color:"#b25364"}}>Soul Machines.</a></p> 
                    </div>
                </div>
                <Barchart/>
            </div>
        </div>
     );
}
 
export default About;