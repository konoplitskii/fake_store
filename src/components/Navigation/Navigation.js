import React, {useEffect, useState} from 'react';
import './Navigation.css';
import {useDispatch} from "react-redux";
import {fetchProducts} from "../../store/slices/products/slice";

const Navigation = ({items}) => {
    const dispatch = useDispatch();
    const [categories, setCategories] = useState([]);
    const [category, setСategory] = useState('all');

    const setActiveCategory = (cat) => {
        setСategory(cat);
        dispatch(fetchProducts({category:cat}))
    }

    useEffect(()=> {
        setCategories(['all', ...items])
    },[items])

    return (
        <nav className="navigation">
            {
                categories.map(item => {
                    return <button
                        key={item + '_1'}
                        className={`btn ${item === category ? 'active' : ''}`}
                        onClick={()=> {
                            setActiveCategory(item);
                        }}
                    >
                        {item.toUpperCase()}
                    </button>
                })
            }
        </nav>
    );
};

export default Navigation;