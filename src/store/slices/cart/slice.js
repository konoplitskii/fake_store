import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    items: localStorage.getItem('cart')
        ? [...(JSON.parse(localStorage.getItem('cart'))).items]
        : [],
    open:false
};

export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers: {
        addCartItem(state, action) {
            const findItem = state.items.find((obj) => obj.id === action.payload.id);
            if(findItem) {
                findItem.count++
            }else {
                state.items.push({
                    ...action.payload.product,
                    count:1
                });
            }
            localStorage.setItem('cart',JSON.stringify(state));
        },
        removeCartItem(state,action) {
            const findItem = state.items.find((obj) => obj.id === action.payload.id);
            if (findItem) {
                findItem.count--;
            }
            localStorage.setItem('cart',JSON.stringify(state));
        },
        deleteCartItem(state,action) {
            state.items = state.items.filter((obj) => obj.id !== action.payload);
            localStorage.setItem('cart',JSON.stringify(state));
        },
        openCart(state) {
            state.open = true;
        },
        closeCart(state) {
            state.open = false;
        },
        clearItems(state) {
            state.items = [];
            localStorage.setItem('cart',JSON.stringify(state));
        },
    },

})

export const { addCartItem, removeCartItem,deleteCartItem,clearItems,openCart, closeCart} = cartSlice.actions;

export default cartSlice.reducer;