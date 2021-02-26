import React from 'react';
import './Product.css'

const Product = (props) => {
    // console.log(props)
    return (
        <div className="product">
             <div >
                 <img src={props.product.img} alt="" />
             </div>
            <div className="details">
                    <h3>{props.product.name}</h3>
                    <br/>
                    <p>by: {props.product.seller}</p>
                    <p>${props.product.price}</p>
                    <br/>
                    <p><small>Only <span className="stock">{props.product.stock} </span> left in stock. </small></p>
                    <button className="cartBtn " 
                    onClick={() => props.handleAddProduct(props.product)}
                    >add to cart</button>
            </div>
        </div> 
    );
};

export default Product;