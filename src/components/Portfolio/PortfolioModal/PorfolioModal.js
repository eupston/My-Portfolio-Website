import React, { Component } from 'react';
import './PortfolioModal.css';
import Modal from 'react-bootstrap/Modal';
import {SocialMediaIconsReact} from 'social-media-icons-react';


class PortfolioModal extends Component {

    render() { 
        return ( 
            <Modal
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            className="PortfolioModal"
            centered
          >
            <Modal.Body className="PortfolioModalGrid" >
              <img src={this.props.projectInfo.modal_image} className='PortfolioModalImage' alt=""/>
              <div>
                <br></br>
                <h3><b>{this.props.projectInfo.projectName}</b></h3>
                <hr></hr>
                <h6>Description</h6>
                  <p>{this.props.projectInfo.description}</p>
                <hr></hr>
                <h6>Technology Stack</h6>
                <br></br>
                <ul>
                  {this.props.projectInfo.tech_stack.map(tech => {return <li>{tech}</li>})}
                </ul>
                <hr></hr>
                <h6>Explore</h6>
                <div className="SocialMediaIcons">
                  {this.props.projectInfo.website ?                   
                  <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="solid" icon="web" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(178,83,100,1)" iconSize="3" roundness="50%" url={this.props.projectInfo.website} size="50" />
                    : null
                  }
                  {this.props.projectInfo.github ?                   
                  <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="solid" icon="github" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(178,83,100,1)" iconSize="3" roundness="50%" url={this.props.projectInfo.github} size="50" />
                  : null
                  }
                  {this.props.projectInfo.youtube ?                   
                  <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="solid" icon="youtube-play" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(178,83,100,1)" iconSize="3" roundness="50%" url={this.props.projectInfo.youtube} size="50" />
                  : null
                  }
                </div>
              </div>
            </Modal.Body>
          </Modal>
      
         );
    }
}
 
export default PortfolioModal;