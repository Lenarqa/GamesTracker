import React, { Fragment } from 'react';
import classes from './Cart.module.css';

const Cart = (props) => {
    return (
        <section className={classes.cart}>
            {props.children}
        </section>
    );
};

export default Cart;