import React from 'react';
import classes from './Aboutcard.module.css';
import Icon from '@mdi/react';

const Aboutcard = (props) => {
    return ( 
        <div className={classes.Aboutcard}>
            <div className={classes.Circle}>
                <Icon path={props.image}
                size={4}
                color="white"/>
            </div>
            <h4><strong>{props.title}</strong></h4>
            <div className={classes.Subtext}>
                <p>{props.subtext}</p>
            </div>
        </div>
     );
}
 

export default Aboutcard;