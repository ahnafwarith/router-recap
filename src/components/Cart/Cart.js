import React from 'react';

const Cart = ({ cart, removeFromCart }) => {
    return (
        <div>
            <h1>Items Selected : {cart.length}</h1>
            {
                cart.map(tshirt => <p>{tshirt.name}<button onClick={() => removeFromCart(tshirt)}>X</button></p>)
            }

        </div>
    );
};

export default Cart;