import React from 'react';
import classes from './Contact.module.css';
import Button from 'react-bootstrap/Button';
import ScrollAnimation from "react-animate-on-scroll";
const Contact = () => {
    return (
        <div className={classes.Contact} id="contact" >
            <ScrollAnimation animateIn="slideInLeft" duration="1.1" animateOnce>
                <h1>Contact</h1>
            </ScrollAnimation>
            <div className={classes.FormContainer}>
                <div className={classes.FormItems}>
                    <input placeholder="Name" type="text" name="name" required/>
                    <input placeholder="Email" type="email" name="email" required/>
                    <textarea rows="8" cols="50" placeholder="Your Message"></textarea>
                </div>
                <Button type="submit" variant="outline-light">Submit</Button>
            </div>
        </div>
     );
}
 
export default Contact;

