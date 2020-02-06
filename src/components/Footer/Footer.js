import React from 'react';
import classes from "./Footer.module.css";
import {SocialMediaIconsReact} from 'social-media-icons-react';
import Euglogo from '../../assets/logo/eug_logo.png'





const Footer = () => {
    return (
        <div className={classes.Footer}>
            <img src={Euglogo} width="80px" height="80px" style={{'margin-top': '30px'}}></img>
             <hr></hr>
           <div className={classes.FooterSocialMediaItems}>
           <SocialMediaIconsReact  borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="solid" icon="github" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(76,107,162,1)" iconSize="3" roundness="10%" url={"https://github.com/eupston"} size="40" />
           <SocialMediaIconsReact  borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="solid" icon="linkedin" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(76,107,162,1)" iconSize="3" roundness="10%" url={"https://www.linkedin.com/in/eugene-upston/"} size="40" />
           </div>
           <hr></hr>
           <p>Site by <a href="https://github.com/eupston/Portfolio" alt="/">Eugene Upston</a></p>
        </div>

    );
}

export default Footer;