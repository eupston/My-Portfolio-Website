import React from 'react';
import classes from './Aboutcard.module.css';
import Icon from '@mdi/react';

const Aboutcard = (props) => {
    return ( 
        <div>
            <div className={classes.Circle}>
                <Icon path={props.image}
                size={4}
                color="white"/>
            </div>
            <h5><b>{props.title}</b></h5>
            <h5>{props.subtext}</h5> 
        </div>
     );
}
 

export default Aboutcard;