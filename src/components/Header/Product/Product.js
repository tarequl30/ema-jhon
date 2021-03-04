import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css'

const Product = (props) => {
    const {key, seller, price , name, stock, img} = props.product
    console.log(props)
    return (
        <div className="product">
             <div >
                 <img src={img} alt="" />
             </div>
            <div className="details">
                    <h3> <Link to={"/product/"+ key}>{name}</Link> </h3>
                    <br/>
                    <p>by: {seller}</p>
                    <p>${price}</p>
                    <br/>
                    <p><small>Only <span className="stock">{stock} </span> left in stock. </small></p>
                    <button className="cartBtn " 
                    onClick={() => props.handleAddProduct(props.product)}
                    >add to cart</button>
                    
            </div>
        </div> 
    );
};

export default Product;