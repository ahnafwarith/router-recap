import React from 'react';

const Cart = ({ cart, removeFromCart }) => {
    // Conditional Rendering
    // 1. Using Element Variable and simple if-elif
    // 2. Using ternary operator
    // 3. Using And operator
    // 4. Using Or operator
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
            {cart.length !== 4 ? <p>Keep Adding</p> : <button>Clear All</button>}
            {cart.length === 5 && <p>5 products</p>}
            {cart.length !== 6 || <p>6 products</p>}
        </div>
    );
};

export default Cart;