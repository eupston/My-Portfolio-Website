import React, { Component } from 'react';
import { ResponsiveBar } from '@nivo/bar'
import Button from 'react-bootstrap/Button'; 

import './Barchart.css';

class BarChart extends Component {
  backend_skills = [
    {
      "skill": "Springboot",
      "value": 85,
      "color": "#b25364"
    },
    {
      "skill": "SQL/NoSQL",
      "value": 75,
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
    },
    {
      "skill": "Node/Express",
      "value": 80,
      "color": "#b25364"
    }

  ]

  frontend_skills = [
    {
      "skill": "Javascript",
      "value": 85,
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

    BarComponent = props => {
      return (
          <g transform={`translate(${props.x},${props.y})`}>
              <rect
                  x={-3}
                  y={7}
                  width={props.width}
                  height={props.height}
                  fill="rgba(0, 0, 0, .07)"
              />
              <rect width={props.width} height={props.height} fill={props.color} />
              <rect
                  x={props.width - 5}
                  width={5}
                  height={props.height}
                  fill={props.borderColor}
                  fillOpacity={0.2}
              />
              <text
                  x={props.width - 16}
                  y={props.height / 2 - 8}
                  textAnchor="end"
                  dominantBaseline="central"
                  fill="white"
                  style={{
                      fontWeight: 900,
                      fontSize: 15,
                  }}
              >
                  {props.data.indexValue}
              </text>
              <text
                  x={props.width - 16}
                  y={props.height / 2 + 10}
                  textAnchor="end"
                  dominantBaseline="central"
                  fill="white"
                  style={{
                      fontWeight: 400,
                      fontSize: 13,
                  }}
              >
                  {props.data.value}
              </text>
          </g>
      )
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
                barComponent={this.BarComponent}
                axisTop={null}
                axisRight={null}
                axisBottom={null}
                axisLeft={null}
                labelTextColor="#f6f6ef"
                isInteractive={false}
                labelSkipWidth={12}
                labelSkipHeight={12}
                animate={false}
                motionStiffness={90}
                motionDamping={15}
            />
        </div>
        );
    }
}
 
export default BarChart;