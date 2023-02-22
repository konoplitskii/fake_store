import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    items: [],
    status: 'loading'
};

export const fetchCategories = createAsyncThunk(
    'categories/fetchCategoriesStatus',
    async () => {
        const { data } = await axios.get(
            `https://fakestoreapi.com/products/categories`,
        );
        return data;
    },
);

export const categoriesSlice = createSlice({
    name:'categories',
    initialState,
    extraReducers:(builder)=> {
        builder.addCase(fetchCategories.pending, (state, action) => {
            state.status = 'loading';
        })
        builder.addCase(fetchCategories.fulfilled, (state, action) => {
            state.items = action.payload;
            state.status = 'success';
        })
        builder.addCase(fetchCategories.rejected, (state, action) => {
            state.status = 'error';
            state.items = [];
        })
    }
})

export const { setItems } = categoriesSlice.actions;

export default categoriesSlice.reducer;