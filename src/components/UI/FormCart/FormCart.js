import React from 'react';
import classes from './FormCart.module.css';

const FormCart = (props) => {
    return (
        <div className={classes.formCart}>
            {props.children}
        </div>
    );
};

export default FormCart;