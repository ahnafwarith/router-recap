import React from 'react';
import './Tshirt.css'
const Tshirt = (props) => {
    const { name, picture, price } = props.tshirt
    return (
        <div className='tshirt'>
            <img className='img' src={picture} alt="" />
            <h3>{name}</h3>
            <h5>Price:${price}</h5>
            <button>Add to cart</button>
        </div>
    );
};

export default Tshirt;