import React from 'react';
import classes from './Portfolio.module.css'
import PortfolioCard from './PortfolioCard/PortfolioCard';
import deepbeat_img from '../../assets/images/projects/deepbeat_interface.png';
import deepbox_img from '../../assets/images/projects/Deepbox_img_1.png';
import spotistics_img from '../../assets/images/projects/spotistics_screenshot.png';
import deepbox_gif from '../../assets/gifs/deepbox_gif.gif';
import deepbeat_gif from '../../assets/gifs/deepbeat_gif.gif';
import spotistics_gif from '../../assets/gifs/spotistics_gif.gif';



const portfolioCards = {
    deepbeat: {
        projectName: 'Deepbeat',
        languages: 'Python',
        image: deepbeat_img,
        modal_image: deepbeat_gif,
        description: "Deepbeat is a crossplatform application used to convert beatboxing to midi drum information (Kick, Snare, Hihat) using a convolutional neural network trained on 1000s of beatboxing samples. It includes an audio recorder and trimmer for recording and slicing your beatboxes.",
        tech_stack: ["Python", "Tensorflow", "Keras", "Qt"],
        github:"https://github.com/eupston/Deepbeat-beatbox2midi",
        youtube: "https://www.youtube.com/watch?v=qxeina_3zQA&t=108s"
    },
    deepbox: {
        projectName: 'Deepbox',
        languages: 'C++',
        image: deepbox_img,
        modal_image: deepbox_gif,
        description: "Deepbox is an audio plugin that uses a convolutional neural network to classify and predict beatboxes in realtime. You can then create a midi file from the plugin with the corresponding beats.",
        tech_stack: ["C++", "Juce Framework", "Python", "Keras"],
        github:"https://github.com/eupston/Deepbox",
        youtube: "https://www.youtube.com/watch?v=F6jA0xNGhSM&t=193s"
    },
    spotistics: {
        projectName: 'Spotistics',
        languages: 'React/Springboot',
        image: spotistics_img,
        modal_image: spotistics_gif,
        description: "Spotistics is a web app for viewing artist spotify statistics. At present you can view audio features for any spotify artist for any of their top tracks",
        tech_stack: ["Spring Boot",
            "Spring Rest",
            "JDBC",
            "Hibernate",
            "Postgres Database",
            "Heroku CI/CD",
            "React js"
            ],
        github:"https://github.com/eupston/Spotistics",
        website: "https://spotistics.herokuapp.com/"
    }
}

const Portfolio = () => {
    return ( 
        <div className={classes.Portfolio} id='portfolio'>
            <h1>Portfolio</h1>
            <div className={classes.PortfolioGrid} >
                <PortfolioCard projectInfo={portfolioCards.deepbeat}/>
                <PortfolioCard projectInfo={portfolioCards.deepbox}
                     />
                <PortfolioCard projectInfo={portfolioCards.spotistics}
                    />
            </div>
        </div>
     );
}
 
export default Portfolio;