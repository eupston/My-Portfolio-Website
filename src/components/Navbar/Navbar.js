import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Navbar.css'

class StickyNavbar extends Component {

    state = {
          pageIds : ["home", "about", "portfolio", "contact"],
          currently_active: null
     }

    handleStickyNavbar = () => {
      const currently_active = this.state.currently_active;
      this.state.pageIds.forEach(item => {
        const pageItemElement = document.getElementById(item);
        const navItemElement = document.getElementById("navbar_" + item);
        const page_position = pageItemElement.getBoundingClientRect().top;
        if(-20 <= page_position && page_position <= 20 ){
            navItemElement.classList.add("active");
            this.setState({currently_active: item});
        }
        else if (item !== currently_active) {
          navItemElement.classList.remove('active');
        }
      });
        var navbar = document.getElementById("navbar");
        var sticky = navbar.offsetTop;
        if (window.pageYOffset >= sticky) {
          navbar.classList.add("sticky")
        } 
        else {
          navbar.classList.remove("sticky");
        }
      }
    
      componentDidMount(){
        window.addEventListener('scroll', this.handleStickyNavbar);
        var navbarHome = document.getElementById("navbar_home");
        navbarHome.classList.add("active");
      }

      componentWillUnmount(){
        window.removeEventListener('scroll', this.handleStickyNavbar);
      }
      
    render() { 
        return ( 
        <nav className="NavbarCustom navbar navbar-expand" id="navbar">
            <div className="navbar-nav">
                <a href="#home" className="nav-link" id="navbar_home">Home</a>
                <a href="#about" className="nav-link" id="navbar_about">About</a>
                <a href="#portfolio" className="nav-link" id="navbar_portfolio">Portfolio</a>
                <a href="#contact" className="nav-link" id="navbar_contact" >Contact</a>
            </div>
        </nav>


         );
    }
}
 
export default StickyNavbar;
