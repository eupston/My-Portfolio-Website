import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Navbar.css'

class StickyNavbar extends Component {
    state = {  }
    handleStickyNavbar = () => {
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
      }

      componentWillUnmount(){
        window.removeEventListener('scroll', this.handleStickyNavbar);
      }
      
    render() { 
        return ( 
        <nav className="NavbarCustom navbar navbar-expand" id="navbar">
            <div className="navbar-nav">
                <a href="#home" className="nav-link" id="home">Home</a>
                <a href="#about" className="nav-link">About</a>
                <a href="#portfolio" className="nav-link">Portfolio</a>
                <a href="#contact" className="nav-link">Contact</a>
            </div>
        </nav>


         );
    }
}
 
export default StickyNavbar;


// const navbar = () => {
    
//     return ( 
//         <nav class="NavbarCustom navbar navbar-expand" id="navbar">
//             <div class="navbar-nav ">
//                 <a href="#home" class="nav-link" id="home">Home</a>
//                 <a href="#about" class="nav-link">About</a>
//                 <a href="#portfolio" class="nav-link">Portfolio</a>
//                 <a href="#contact" class="nav-link">Contact</a>
//             </div>
//         </nav>

// // // mobile hamburger code 
// // <div class="pos-f-t">
// //   <div class="collapse" id="navbarToggleExternalContent">
// //     <div class="bg-dark p-4">
// //       <h4 class="text-white">Collapsed content</h4>
// //       <span class="text-muted">Toggleable via the navbar brand.</span>
// //     </div>
// //   </div>
// //   <nav class="navbar navbar-dark bg-dark">
// //     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
// //       <span class="navbar-toggler-icon"></span>
// //     </button>
// //   </nav>
// // </div>

//      );
// }
 
// export default navbar;