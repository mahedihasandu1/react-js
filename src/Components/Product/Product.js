import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './product.css'

const Product = ({product,handleAddToCart}) => {

    const {name,img,seller,price,ratings} =product;
    // const {handleAddToCart}=props;
    return (
        <div className='Product'>
            <div>
                <img src={img} alt="" />
                <div className='product-details'>
                    <p className='product-name'>{name}</p>
                    <p>Price:{price}$</p>
                    <p><small>Seller:{seller}</small></p>
                    <p>Ratings:{ratings}stars</p>
                    
                </div>
                <button onClick={()=>handleAddToCart(product)} className='btn-cart'><span id='btn-text'>Add To Cart</span>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default Product;