import React, { Component } from 'react';
import { ResponsiveBar } from '@nivo/bar'
import Button from 'react-bootstrap/Button'; 

import './Barchart.css';

class BarChart extends Component {
  backend_skills = [
    {
      "skill": "Spring",
      "value": 85,
      "color": "#b25364"
    },
    {
      "skill": "SQL",
      "value": 75,
      "color": "#b25364"
    },
    {
      "skill": "C++",
      "value": 70,
      "color": "#b25364"

    },
    {
      "skill": "Java",
      "value": 80,
      "color": "#b25364"

    },
    {
      "skill": "Python",
      "value": 95,
      "color": "#b25364"
    }
  ]

  frontend_skills = [
    {
      "skill": "Javascript",
      "value": 70,
      "color": "#b25364"

    },
    {
      "skill": "React",
      "value": 80,
      "color": "#b25364"
    },
    {
      "skill": "HTML",
      "value": 90,
      "color": "#b25364"
    },
    {
      "skill": "CSS",
      "value": 85,
      "color": "#b25364"
    },

    {
      "skill": "Bootstrap",
      "value": 80,
      "color": "#b25364"
    },
  ]
    state = {     
      currentData : this.backend_skills
    }

    handleFrontEnd = () => {
      this.setState({currentData: this.frontend_skills})
      let backend_btn = document.getElementById('backend_btn');
      let frontend_btn = document.getElementById('frontend_btn');
      frontend_btn.blur()
      backend_btn.classList.remove('active');
      frontend_btn.classList.add('active');
    }

    handleBackEnd = () => {
      let backend_btn = document.getElementById('backend_btn');
      let frontend_btn = document.getElementById('frontend_btn');
      backend_btn.blur();
      frontend_btn.classList.remove('active');
      backend_btn.classList.add('active');
      this.setState({currentData: this.backend_skills})
    }

    render() {
        
        return ( 
        <div className="Barchart">
              <div >
                  <Button id="frontend_btn" variant="outline-custom " onClick={this.handleFrontEnd} className="Buttons">Frontend</Button>
                  <Button id="backend_btn" variant="outline-custom" onClick={this.handleBackEnd} className="Buttons" active>Backend</Button>
              </div>

            <ResponsiveBar
                data={this.state.currentData}
                indexBy="skill"
                margin={{ top: 0, right: 130, bottom: 50, left: 70 }}
                padding={0.19}
                layout="horizontal"
                colors = {this.state.currentData.map(c => c.color)}
                colorBy = "index"
                borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
                borderWidth={1}
                axisTop={null}
                axisRight={null}
                axisBottom={null}
                axisLeft={{
                    tickSize: 7,
                    tickPadding: 7,
                    tickRotation: -10,
                }}
                labelTextColor="#f6f6ef"
                labelSkipWidth={12}
                labelSkipHeight={12}
                animate={true}
                motionStiffness={90}
                motionDamping={15}
            />
        </div>
        );
    }
}
 
export default BarChart;