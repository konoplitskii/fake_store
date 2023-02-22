import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    userToken: localStorage.getItem('userToken')
        ? localStorage.getItem('userToken')
        : '',
};

export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers: {
        login(state, action) {
            state.userToken = action.payload;
        },
        logout(state) {
            state.userToken = '';
            localStorage.removeItem('userToken');
        },
        registration(state,action) {
            state.userToken = action.payload;
        },
    },

})

export const { login, logout, registration } = authSlice.actions;

export default authSlice.reducer;