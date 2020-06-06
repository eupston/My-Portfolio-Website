import React, { Component } from 'react';   
import Button from 'react-bootstrap/Button'; 
import classes from './PortfolioCard.module.css';
import Image from 'react-bootstrap/Image';
import PortfolioModal from '../PortfolioModal/PorfolioModal';

class PortfolioCard extends Component {
    state = {
        isHovered : false,
        learnMore: false
      }

    handleOnHover = () => {
        this.setState({isHovered: true});
    }

    handleOffHover = () => {
        this.setState({isHovered: false});
    }

    handleLearnMore = () => {
        this.setState({learnMore: true});
    }

    handleModalHide = () => {
        this.setState({learnMore:false});
        this.setState({isHovered: false});
    }

    render() { 
        return ( 
            <div className={classes.Portfoliocard} 
            onMouseOver={this.handleOnHover}
            onMouseLeave={this.handleOffHover}
            id={this.props.projectInfo.projectName}
            >
                {this.state.isHovered ? 
                <React.Fragment>
                    <div className={`${classes.Titles} ${classes.fadein}`}>
                        <h3>{this.props.projectInfo.projectName}</h3>
                        <h6>{this.props.projectInfo.languages}</h6>
                    </div>
                    <Button
                        variant="outline-custom"
                        className={`${classes.Button} ${classes.fadein}`}
                        onClick={this.handleLearnMore}>
                            Learn More
                    </Button>
                </React.Fragment>
                : 
                <img src={this.props.projectInfo.image} className={classes.Image}/>
                    }
                { this.state.learnMore ? 
                    <PortfolioModal 
                    projectInfo={this.props.projectInfo} 
                    show={this.state.learnMore}
                    onHide={this.handleModalHide}/> 
                :null
                }
            </div>
         );
    }
}
 
export default PortfolioCard;