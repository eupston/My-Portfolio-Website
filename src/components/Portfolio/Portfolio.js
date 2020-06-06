import React from 'react';
import classes from './Portfolio.module.css'
import PortfolioCard from './PortfolioCard/PortfolioCard';
import deepbeat_img from '../../assets/images/projects/deepbeat_interface.png';
import deepbox_img from '../../assets/images/projects/Deepbox_img_1.png';
import spotistics_img from '../../assets/images/projects/spotistics_screenshot.png';
import eidos_img from '../../assets/images/projects/eidos_website-2.png';
import midimason_img from '../../assets/images/projects/midi_mason_logo_gray_bk.png';
import poly_seq_img from '../../assets/images/projects/polysequencer_img.png';
import deepbox_gif from '../../assets/gifs/deepbox_gif2.gif';
import deepbeat_gif from '../../assets/gifs/deepbeat_gif2.gif';
import spotistics_gif from '../../assets/gifs/spotistics_gif2.gif';
import eidos_gif from '../../assets/gifs/eidos-gif2.gif';
import poly_seq_gif from '../../assets/gifs/poly_seq.gif';
import midi_mason_gif from '../../assets/gifs/midi_mason.gif';

import ScrollAnimation from 'react-animate-on-scroll';



const portfolioCards = {

    midimason: {
        projectName: 'Midi Mason',
        languages: 'React/Node js',
        image: midimason_img,
        modal_image: midi_mason_gif,
        description: "A Web Application for generating midi drums using Google Magenta AI, creating, saving, downloading and sharing beats.",
        tech_stack: ["React", "Node js", "S3", "Express", "MongoDB", "Python", "Heroku"],
        github:"https://github.com/eupston/midi-mason",
        website: "https://midi-mason.herokuapp.com/"
    },

    eidos: {
        projectName: 'Eidos Jewelry',
        languages: 'React/Node js',
        image: eidos_img,
        modal_image: eidos_gif,
        description: "Eidos Contemporary Jewelry Web App is an e-commerce site that is linked in with Shopify's API. Features include Customer & Product management, instagram feed, Email notification, and site navigation.",
        tech_stack: ["React", "Node js", "Express", "MongoDB", "Heroku"],
        github:"https://github.com/eupston/eidos_contemporary_website",
        website: "https://eidos-contemporary.herokuapp.com/"
    },
    deepbeat: {
        projectName: 'Deepbeat',
        languages: 'Python/Tensorflow',
        image: deepbeat_img,
        modal_image: deepbeat_gif,
        description: "Deepbeat is a crossplatform application used to convert beatboxing to midi drum information (Kick, Snare, Hihat) using a convolutional neural network trained on 1000s of beatboxing samples. It includes an audio recorder and trimmer for recording and slicing your beatboxes.",
        tech_stack: ["Python", "Tensorflow", "Keras", "Qt"],
        github:"https://github.com/eupston/Deepbeat-beatbox2midi",
        youtube: "https://www.youtube.com/watch?v=qxeina_3zQA&t=108s"
    },
    deepbox: {
        projectName: 'Deepbox',
        languages: 'C++/Juce',
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
    },

    polysequencer: {
        projectName: 'Polysequencer',
        languages: 'Max/Msp',
        image: poly_seq_img,
        modal_image: poly_seq_gif,
        description: "Polysequencer is a Polyphonic Sequencer plugin with 3 Voices per step and much more! I've created it to intuitively generate musical sequences and be able to quickly build up complex and interesting modal relationships.\n",
        tech_stack: ['Max/Msp'],
        youtube:"https://www.youtube.com/watch?v=qvLbqua9Rlc&t=233s",
        website: "http://maxforlive.com/library/device/4674/polysequencer"
    }
}

const Portfolio = () => {

    return (
        <div className={classes.Portfolio} id='portfolio'>
            <ScrollAnimation animateIn="slideInRight" duration="1.1" animateOnce>
                <h1>Portfolio</h1>
            </ScrollAnimation>
            <div className={classes.PortfolioGrid} >
                <ScrollAnimation animateIn="fadeIn" duration="2" animateOnce>
                    <PortfolioCard projectInfo={portfolioCards.midimason}/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" duration="2" animateOnce>
                    <PortfolioCard projectInfo={portfolioCards.eidos}/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" duration="2" animateOnce>
                  <PortfolioCard projectInfo={portfolioCards.deepbeat}/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" duration="2" animateOnce>
                  <PortfolioCard projectInfo={portfolioCards.deepbox} />
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" duration="2" animateOnce>
                  <PortfolioCard projectInfo={portfolioCards.spotistics}/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" duration="2" animateOnce>
                    <PortfolioCard projectInfo={portfolioCards.polysequencer}/>
                </ScrollAnimation>
            </div>
        </div>

    );
}
 
export default Portfolio;