import React from 'react';
import './Officer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Officer = (props) => {

    // console.log(props.officer)
    const {name, img,institute, designation, rank, organization,email,salary} = props.officer

    // Button Icon using React Icon 
    const buttonIcon = <FontAwesomeIcon icon={faShoppingCart} />
    
    return (
        <div className="officer-profile">
            <div className="img-background">
                <img src={img} alt="" />
            </div>
            <div className="info-container">
                <h3>{name}</h3>
                <p><span className="officer-info">Designation:</span>  {designation}</p>
                <p><span className="officer-info">Institute:</span> {institute}</p>
                <p><span className="officer-info">Rank:</span> {rank}</p>
                <p><span className="officer-info">Organization:</span> {organization}</p>
                <p><span className="officer-info">Email:</span> {email}</p>
                <p><span className="officer-info">Salary:</span> ${salary}</p>
                <button onClick={()=> props.handleAddtoCart(props.officer)}>{buttonIcon} Add Cart</button>
            </div>
            
        </div>
    );
};

export default Officer;