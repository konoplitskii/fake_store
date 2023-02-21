import React, {useEffect, useState} from 'react';
import './Card.css';
import {Link} from "react-router-dom";
import {addCartItem} from "../../store/slices/cart/slice";
import {useDispatch} from "react-redux";
import Zoom from "../Icons/Zoom";
import {openModal} from "../../store/slices/modal/slice";
import MiniCard from "../MiniCard/MiniCard";
import {toast} from "react-toastify";

const Card = ({item}) => {
    const {id,title,image} = item;
    const dispatch = useDispatch();

    const addToCart = (product, id) => {
        toast.success('Product added', {
            position: "bottom-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
        dispatch(addCartItem({product,id}));
    }

    return (
        <div className="card">
            <div className="card-body">
                <div className="card-show">
                    <img src={image} alt={title}/>
                </div>
                <h3 className="card-title">{title}</h3>
                <div className="card-action">
                    <Link className="btn" to={`/product/${id}`}>Detailed</Link>
                    <div className="card-action-group">
                        <button className="btn" onClick={()=>dispatch(openModal(<MiniCard product={item}/>))}>
                            <Zoom/>
                        </button>
                        <button className="btn" onClick={()=> {
                            addToCart(item, id)
                        }}>
                            +
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;