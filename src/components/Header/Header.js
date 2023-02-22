import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import './Header.css';
import Basket from "../Icons/Basket";
import User from "../Icons/User";
import ModalBox from "../Modal/ModalBox";
import {useDispatch, useSelector} from "react-redux";
import {openModal} from "../../store/slices/modal/slice";
import Auth from "../Auth/Auth";
import {openCart} from "../../store/slices/cart/slice";

const Header = () => {
    const dispatch = useDispatch();
    const cart = useSelector( state => state.cart);
    const [count,setCount] = useState(1);

    useEffect(()=> {
        const sum = cart.items.reduce((acc,val) => {
            return acc += val.count
        },0)
        setCount(sum)
    },[cart])

    return (
        <header className="header">
            <div className="header-line">
                <h1 className="title">
                    <Link to={'/'}>Fake-Store</Link>
                </h1>
                <div className="action-page">
                    <button className="action-btn" onClick={()=>{
                        dispatch(openCart())
                    }}>
                        <Basket/>
                        {
                            count
                            ? <span className="count-cart">{count}</span>
                            : null
                        }
                    </button>
                    {/*<button className="action-btn" onClick={()=> {*/}
                    {/*    dispatch(openModal(<Auth/>))*/}
                    {/*}}>*/}
                    {/*    <User/>*/}
                    {/*</button>*/}
                </div>
            </div>
        </header>
    );
};

export default Header;