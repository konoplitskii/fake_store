import React, {useEffect} from 'react';
import './MiniCard.css';
import {closeModal} from "../../store/slices/modal/slice";
import {useDispatch} from "react-redux";

const MiniCard = ({product}) => {
    const {title, image, price, description} = product;
    const dispatch = useDispatch();

    return (
        <div className="mini-card">
            <h2>{title}</h2>
            <div className="mini-card-show">
                <img src={image} alt={title}/>
            </div>
            <p>
                {description}
            </p>
            <strong>Price: $ {price}</strong>
            <button className="mini-card-btn btn" onClick={()=> dispatch(closeModal({content: '', show: false}))}>Close</button>
        </div>
    );
};

export default MiniCard;