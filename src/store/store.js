import {configureStore} from "@reduxjs/toolkit";
import products from './slices/products/slice'
import categories from './slices/filter/slice'
import modal from './slices/modal/slice'
import cart from './slices/cart/slice'
import auth from './slices/auth/slice'

export const store = configureStore({
    reducer:{
        products,
        categories,
        modal,
        cart,
        auth,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
    }),
})