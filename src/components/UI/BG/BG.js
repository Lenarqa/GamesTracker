import React from 'react';
import classes from './BG.module.css';

const BG = (props) => {
    return (
        <div className={classes.bg} onClick={props.onClose}>
            {props.children}
        </div>
    );
};

export default BG;