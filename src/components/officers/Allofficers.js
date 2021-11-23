import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Officer from '../officer/Officer';

import './Allofficers.css'
const Allofficers = () => {
    const [officers,setOfficers]= useState([])
    const [carts,setCarts]= useState([])

    // Load Data 
    useEffect(()=>{
        fetch('./officers.JSON')
        .then(res => res.json())
        .then(data => setOfficers(data))
    },[])

    // Handle Add to Cart Button 
    const handleAddtoCart = (officerId) =>{
        const newCarts = [...carts,officerId]
        setCarts(newCarts)
    }
    

    return (
        <div className="main-container">
            <div className="officers-container">
                {
                    officers.map(officer => {
                        return <Officer key={officer.key} officer={officer} handleAddtoCart = {handleAddtoCart}></Officer>
                    })
                }
            </div>
            <div className="cart">
                <Cart carts={carts}></Cart>
            </div>
        </div>
    );
};

export default Allofficers;