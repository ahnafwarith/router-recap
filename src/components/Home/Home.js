import React, { useState } from 'react';
import useTshirts from '../../hooks/useTshirts';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css'

const Home = () => {
    const [tshirts, handleTshirts] = useTshirts();
    const [cart, handleCart] = useState([]);
    const handleAddToCart = (selectedTshirt) => {
        const exists = cart.find(item => selectedTshirt._id === item._id)
        if (!exists) {
            const newCart = [...cart, selectedTshirt]
            handleCart(newCart)
        }
        else {
            alert('cannot add to cart')
        }
    }
    const removeFromCart = (selectedTshirt) => {
        const restItems = cart.filter(items => items._id !== selectedTshirt._id)
        handleCart(restItems)
    }
    return (
        <div className='home-container'>
            <div className="products-container">
                {
                    tshirts.map(tshirt => <Tshirt key={tshirt._id} tshirt={tshirt} handleAddToCart={handleAddToCart}></Tshirt>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart} removeFromCart={removeFromCart}></Cart>
            </div>
        </div>
    );
};

export default Home;