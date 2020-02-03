import React, { Component } from 'react';
import './Header.css';
import Euglogo from '../../assets/logo/eug_logo.png'
import Button from 'react-bootstrap/Button'; 

const Header = () => {
    return ( 
        <div className="Header" id="home">
            <header >
            <h1>Eugene Upston</h1>
            <h5>Software Engineer</h5>
            <img className="logo" src={Euglogo} width="30px" height="30px"></img>
            <Button variant="outline-light" onClick={() => window.location.href='#portfolio'}>Portfolio</Button>
            </header >
        </div>
     );
}
 
export default Header;
