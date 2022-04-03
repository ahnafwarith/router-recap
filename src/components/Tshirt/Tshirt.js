import React from 'react';
import './Tshirt.css'
const Tshirt = ({ handleAddToCart, tshirt }) => {
    const { name, picture, price } = tshirt
    return (
        <div className='tshirt'>
            <img className='img' src={picture} alt="" />
            <h3>{name}</h3>
            <h5>Price:${price}</h5>
            <button onClick={() => handleAddToCart(tshirt)}>Add to cart</button>
        </div>
    );
};

export default Tshirt;