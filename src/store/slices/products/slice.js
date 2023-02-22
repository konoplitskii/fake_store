import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    items: [],
    status: 'loading'
};

export const fetchProducts = createAsyncThunk(
    'products/fetchProductsStatus',
        async (params) => {
            const { category } = params;
            const { data } = await axios.get(
                `https://fakestoreapi.com/products${category  && category !== 'all' ? '/category/' + category : ''}`,
            );
            return data;
        },
);

export const productsSlice = createSlice({
    name:'products',
    initialState,
    reducers: {
        setItems(state, action) {
            state.items = action.payload;
            state.items = [];
        },
    },
    extraReducers:(builder)=> {
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.status = 'loading';
        })
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.items = action.payload;
            state.status = 'success';
        })
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.status = 'error';
            state.items = [];
        })
    }
})

export const { setItems } = productsSlice.actions;

export default productsSlice.reducer;