import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './shop.css'

const Shop = () => {
    const [products,setProducts]=useState([])
    const [cart,setCart]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    const handleAddToCart=()=>{
        // console.log(Product)
        // cart.push(Product)
        const newCart=[...cart,Product]
        setCart(newCart)
    }
    return (
        <div className='product'>
            <div className="product-container">
                {
                    products.map(product=> <Product 
                    key={product.id}
                    handleAddToCart={handleAddToCart}
                    product={product}
                    ></Product>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;