import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart }=props;
    let total=0;
    for(const product of cart){
        console.log(product)
        total= total + product.price
    }
    return (
        <div className='cart'>
            <h2>cart Summary</h2>
            <p>Selected item:{cart.length}</p>
            <p>Total Price:${total}</p>
            <p>Total Shoping:{}</p>
            <p>Tax</p>
            <hr />
            <h4>Grad total:</h4>
        </div>
    );
};

export default Cart;