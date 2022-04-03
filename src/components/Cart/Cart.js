import React from 'react';

const Cart = ({ cart, removeFromCart }) => {
    // Condional Rendering
    // 1. Using Element Variable
    let command;
    if (cart.length === 0) {
        command = <p>Please select atleast one item</p>
    }
    else if (cart.length === 1) {
        command = <p>Please select some more?</p>
    }
    else {
        command = <p>Thanks for shopping with us!</p>
    }
    return (
        <div>
            <h1>Items Selected : {cart.length}</h1>
            {command}
            {
                cart.map(tshirt => <p>{tshirt.name}<button onClick={() => removeFromCart(tshirt)}>X</button></p>)
            }

        </div>
    );
};

export default Cart;