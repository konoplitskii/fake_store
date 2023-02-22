import React, {useEffect} from 'react';
import Navigation from "../../components/Navigation/Navigation";
import CardList from "../../components/CardList/CardList";
import {useDispatch, useSelector} from "react-redux";
import {fetchCategories} from "../../store/slices/filter/slice";
import {fetchProducts} from "../../store/slices/products/slice";

const Home = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products);
    const categories = useSelector(state => state.categories);
    const cart = useSelector(state => state.cart);


    useEffect(()=> {
        dispatch(fetchCategories())
        dispatch(fetchProducts({categories:'all'}));
    },[])

    return (
        <div>
            <div className="row">
                <Navigation items={categories.items}/>
                <CardList items={products.items}/>
            </div>
        </div>
    );
};

export default Home;