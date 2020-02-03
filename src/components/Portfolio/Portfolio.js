import React from 'react';
import classes from './Portfolio.module.css'
import PortfolioCard from './PortfolioCard/PortfolioCard';
import deepbeat_img from '../../assets/images/projects/deepbeat_interface.png';
import deepbox_img from '../../assets/images/projects/Deepbox_img_1.png';
import spotistics_img from '../../assets/images/projects/spotistics_screenshot.png';


const Portfolio = () => {
    return ( 
        <div className={classes.Portfolio} id='portfolio'>
            <h1>Portfolio</h1>
            <div className={classes.PortfolioGrid} >
                <PortfolioCard
                    projectName={'Deepbeat'}
                    subtitle={'Python'}
                    image={deepbeat_img} />
                <PortfolioCard
                    projectName={'Deepbox'}
                    subtitle={'C++'}
                    image={deepbox_img} />
                <PortfolioCard
                    projectName={'Spotistics'}
                    subtitle={'React/SpringBoot'}
                    image={spotistics_img}/>
            </div>
        </div>
     );
}
 
export default Portfolio;