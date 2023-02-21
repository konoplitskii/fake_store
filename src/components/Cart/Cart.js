import React, {useEffect, useState} from 'react';
import './Cart.css';
import {useDispatch, useSelector} from "react-redux";
import {addCartItem, clearItems, closeCart, deleteCartItem, removeCartItem} from "../../store/slices/cart/slice";
import Garbage from "../Icons/Garbage";

const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector( state => state.cart);
    const [amount, setAmount] = useState(0);

    useEffect(()=> {
        if(cart.open) {
            document.body.classList.add('modal-open');
        }else {
            document.body.classList.remove('modal-open');
        }
    },[cart]);

    const addToCart = (product, id) => {
        dispatch(addCartItem({product,id}));
    }

    const removeItemCart = (product, id) => {
        const itemCurrent = cart.items.find(item => {
            return item.id === id
        })
        if(itemCurrent.count === 1) {
            deleteItemCart(id)
        }
        dispatch(removeCartItem({product,id}));
    }

    const deleteItemCart = (id) => {
        dispatch(deleteCartItem(id));
    }

    useEffect(()=> {
        const sum = cart.items.reduce((acc,val) => {
            return acc += val.count * val.price
        },0)
        setAmount(sum)
    },[cart])

    return (
       <>
           {
               cart.open
               ?  <div className="cart">
                       <div className={`cart-box ${cart.open ? 'is-show': ''}`}>
                           <div className="cart-head">
                               <h2>Basket</h2>
                               {
                                   cart.items.length > 0
                                   && <button className="cart-clear" onClick={()=> dispatch(clearItems())}>
                                       <Garbage/>
                                    </button>
                               }
                               <button className="modal-close" onClick={()=>{
                                   dispatch(closeCart())
                               }}>
                                   &times;
                               </button>
                           </div>
                           {
                               cart.items.length > 0
                               ?   <ul className="cart-list">
                                       {
                                           cart.items.map(item => {
                                               const {id,title,count,image,price} = item
                                               return <li key={id} className="cart-item">
                                                   <div className="cart-show">
                                                       <img src={image} alt={title}/>
                                                   </div>
                                                   <div className="cart-info">
                                                       <button
                                                           className="cart-delete"
                                                           onClick={()=> deleteItemCart(item.id)}
                                                       >
                                                           &times;
                                                       </button>
                                                       <h4 className="cart-title">{title}</h4>
                                                       <div className="cart-other">
                                                           <div className="cart-count">
                                                               <button
                                                                   className="cart-btn btn"
                                                                   onClick={()=>removeItemCart(item,item.id)}
                                                               >
                                                                   -
                                                               </button>
                                                               <b>{count}</b>
                                                               <button
                                                                   className="cart-btn btn"
                                                                   onClick={()=> addToCart(item,item.id)}
                                                               >
                                                                   +
                                                               </button>
                                                           </div>
                                                           <div className="cart-price">$ {(price * count).toFixed(2)}</div>
                                                       </div>
                                                   </div>
                                               </li>
                                           })
                                       }
                                   </ul>
                               :   <h1>Empty basket</h1>
                           }
                           <div className="cart-footer">
                               <strong>Total: $ {amount.toFixed(2)}</strong>
                               {
                                   cart.items.length > 0 && <button className="btn primary" onClick={()=> dispatch(clearItems())}>Buy now</button>
                               }

                           </div>
                       </div>
                   </div>
               :null
           }
       </>
    );
};

export default Cart;