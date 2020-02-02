import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import Navbar from './components/Navbar/Navbar';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="App">
        <Header/>
        <Navbar/>
        <About/>
        <Portfolio/>
        <Contact/>
        <Footer/>
      </div>
     );
  }
}
 

export default App;
