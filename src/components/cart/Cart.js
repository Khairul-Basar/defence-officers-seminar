import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons'

const Cart = (props) => {
    // console.log(props.carts)
    const carts = props.carts 

    // Calculate total cost of officers Salary using reduce 
    const cartReducer = (prev, officer) => prev + officer.salary 
    const total = carts.reduce(cartReducer,0)

    // User Icon using react Icon 
    const userIcon = <FontAwesomeIcon icon={faUserGraduate} />
    
    return (
        <div className="cart-container">
            <h3>{userIcon} Officer Added: {carts.length}</h3>
            <h3>Total Cost: ${total}</h3>
            {carts.map((officer) => {
                return <div key={officer.key}>
                            <img src={officer.img} alt="" />
                            <p>{officer.name}</p>
                        </div>
                    }
            )}
        </div>
    );
};

export default Cart;