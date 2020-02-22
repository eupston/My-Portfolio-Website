import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Navbar.css'
import NavbarMobile from './NavbarMobile/NavbarMobile';

class StickyNavbar extends Component {

    state = {
          pageIds : ["home", "about", "portfolio", "contact"],
          currently_active: null,
          mobile_navbar_active: false
     }

    handleStickyNavbar = () => {
      const currently_active = this.state.currently_active;
      this.state.pageIds.forEach(item => {
        const pageItemElement = document.getElementById(item);
        const navItemElement = document.getElementById("navbar_" + item);
        const page_position = pageItemElement.getBoundingClientRect().top;
        if(-50 <= page_position && page_position <= 150 ){
            navItemElement.classList.add("active");
            this.setState({currently_active: item});
        }
        else if (item !== currently_active) {
          navItemElement.classList.remove('active');
        }
      });
        var navbar = document.getElementById("navbar");
        console.log(navbar);
        var sticky = navbar.offsetTop;
        if (window.pageYOffset >= sticky) {
          navbar.classList.add("sticky")
        } 
        else {
          navbar.classList.remove("sticky");
        }
      }

      handleMobileNavbarTransition = () => {
        console.log(window.innerWidth);
        if (window.innerWidth < 760){
            this.setState({mobile_navbar_active:true});
        }
        else{
          this.setState({mobile_navbar_active:false});
        }
      }
    
      componentDidMount(){
        window.addEventListener('scroll', this.handleStickyNavbar);
        window.addEventListener('resize', this.handleMobileNavbarTransition);
        var navbarHome = document.getElementById("navbar_home");
        navbarHome.classList.add("active");
        this.handleMobileNavbarTransition();
      }

      componentWillUnmount(){
        window.removeEventListener('scroll', this.handleStickyNavbar);
        window.removeEventListener('resize', this.handleMobileNavbarTransition);
      }

     handleNavbarDropDown = () => {
      var x = document.getElementById("myLinks");
      if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
    }
    
      
    render() { 
        return ( 
          <React.Fragment>
            {!this.state.mobile_navbar_active ?
        <nav className="NavbarCustom navbar navbar-expand" id="navbar">
            <div className="navbar-nav">
                <a href="#home" className="nav-link" id="navbar_home">Home</a>
                <a href="#about" className="nav-link" id="navbar_about">About</a>
                <a href="#portfolio" className="nav-link" id="navbar_portfolio">Portfolio</a>
                <a href="#contact" className="nav-link" id="navbar_contact" >Contact</a>
            </div>
            
        </nav>
        :
        <nav className="topnav sticky" id="navbar">
          <a className="icon" onClick={this.handleNavbarDropDown}>
            <i className="fa fa-bars"></i>
          </a>
          <div id="myLinks" onClick={this.handleNavbarDropDown}>
            <a href="#home" id="navbar_home">Home</a>
            <a href="#about" id="navbar_about">About</a>
            <a href="#portfolio" id="navbar_portfolio" >Portfolio</a>
            <a href="#contact" id="navbar_contact">Contact</a>
          </div>
        </nav>
        }
        </React.Fragment>
      );
    }
}
 
export default StickyNavbar;
