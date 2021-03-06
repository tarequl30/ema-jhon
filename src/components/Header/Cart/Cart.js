import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
        
    }
    let shipping = 0;
    if (total > 35 ){
        shipping = 0;
    }
    else if( total > 15){
        shipping = 4.99
    }
    else if (  total > 0){
        shipping = 12.99;
    }
    const tax = Math.round(total / 10);
    return (
        <div className="cart">
            <h4>Order Summary</h4>
            <p>Items Ordered :{cart.length}</p>
            <p>Prodcut Price : ${(total).toFixed(2)}</p>
            <p>Tax : ${tax}</p>
            <p>Shipping : ${(shipping).toFixed(2)}</p>
            <h5>Total : ${(total + shipping + tax).toFixed(2)}</h5>
            <button className="checkoutBtn">checkout</button>
            
        </div>
    );
};

export default Cart;