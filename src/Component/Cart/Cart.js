import React from 'react';

const Cart = (props) => {
    const { cart } = props || {}
    const totalReducer=(prevValue,currentValue)=>prevValue+currentValue.salary
    const Total=cart.reduce(totalReducer,0)
    return (
        <div>
            <h2> Total Hero Added : {cart.length}</h2>
            <ul>
                {
                    cart.map(iteam => <li>{ iteam.name}</li>)
                }
            </ul>
            <h4>Total cost to build the Team: { Total}</h4>
        </div>
    );
};

export default Cart;