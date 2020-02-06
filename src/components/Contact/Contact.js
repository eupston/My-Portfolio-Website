import React from 'react';
import classes from './Contact.module.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Contact = () => {
    return (
        <div className={classes.Contact} id="contact" >
            <h1>Contact</h1>
            <div className={classes.FormContainer}>
                <div className={classes.FormItems}>
                    <input placeholder="Name" type="text" name="name" required/>
                    <input placeholder="Email" type="email" name="email" required/>
                    <textarea rows="8" cols="50" placeholder="Your Message"></textarea>
                </div>
                <Button variant="outline-light">Submit</Button>
            </div>
        </div>
     );
}
 
export default Contact;