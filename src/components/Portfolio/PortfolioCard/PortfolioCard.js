import React, { Component } from 'react';   
import Button from 'react-bootstrap/Button'; 
import classes from './PortfolioCard.module.css';
import Image from 'react-bootstrap/Image';

class PortfolioCard extends Component {
    state = {
        isHovered : false
      }

    handleOnHover = () => {
        this.setState({isHovered: true});
    }

    handleOffHover = () => {
        this.setState({isHovered: false});
    }

    render() { 
        return ( 
            <div className={classes.Portfoliocard} 
            onMouseOver={this.handleOnHover}
            onMouseLeave={this.handleOffHover}
            >
                {this.state.isHovered ? 
                <React.Fragment>
                    <div className={`${classes.Titles} ${classes.fadein}`}>
                        <h3>{this.props.projectName}</h3>
                        <h6>{this.props.subtitle}</h6>
                    </div>
                    <Button
                        variant="outline-custom"
                        className={`${classes.Button} ${classes.fadein}`}>
                            Learn More
                    </Button>
                </React.Fragment>
                : 
                <Image src={this.props.image} className={classes.Image} fluid />
                }
            </div>
         );
    }
}
 
export default PortfolioCard;