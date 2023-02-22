import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, useParams} from "react-router-dom";
import './Product.css';
import {addCartItem} from "../../store/slices/cart/slice";
import {useDispatch} from "react-redux";
import Preloader from "../../components/Preloader/Preloader";

const Product = () => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const params = useParams();

    useEffect(() => {
        const productFetch = async () => {
            const { data } = await axios.get(
                `https://fakestoreapi.com/products/${params.id}`,
            );
            setProduct(data);
            setLoading(false);
        };
        productFetch();
    }, []);

    const addToCart = (product, id) => {
        dispatch(addCartItem({product,id}));
    }

    return (
        <>
            {
                loading
                ? <Preloader/>
                : <div>
                        <div className="product-box">
                            <div className="product-show">
                                <img src={product.image} alt={product.title}/>
                            </div>
                            <div className="product-info">
                                <h1>{product.title}</h1>
                                <p>
                                    {product.description}
                                </p>
                                <strong>
                                    Price: {product.price} $
                                </strong>
                                <button
                                    className="product-btn btn"
                                    onClick={()=> {
                                        addToCart(product, product.id)
                                    }}
                                >Add cart
                                </button>
                            </div>
                        </div>
                        <Link className="btn" to="/">
                            {' '}
                            Go home
                        </Link>
                    </div>
            }
        </>
    );
};

export default Product;