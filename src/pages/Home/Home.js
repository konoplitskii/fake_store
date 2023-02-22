import React, {useEffect} from 'react';
import Navigation from "../../components/Navigation/Navigation";
import CardList from "../../components/CardList/CardList";
import {useDispatch, useSelector} from "react-redux";
import {fetchCategories} from "../../store/slices/filter/slice";
import {fetchProducts} from "../../store/slices/products/slice";
import Preloader from "../../components/Preloader/Preloader";

const Home = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products);
    const categories = useSelector(state => state.categories);


    useEffect(()=> {
        dispatch(fetchCategories())
        dispatch(fetchProducts({categories:'all'}));
    },[])

    useEffect(()=> {
        console.log('products',products);
    },[products])

    return (
        <div className="home">
            <div className="row">
                {
                    categories.status === "loading"
                    ? null
                    : <Navigation items={categories.items}/>
                }
                {
                    products.status === "loading"
                        ? <Preloader/>
                        : <CardList items={products.items}/>
                }
            </div>
        </div>
    );
};

export default Home;