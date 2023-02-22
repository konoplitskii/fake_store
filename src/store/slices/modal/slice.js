import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    content: '',
    show: false
};

export const modalSlice = createSlice({
    name:'modal',
    initialState,
    reducers: {
        openModal(state, action) {
            state.content = action.payload;
            state.show = true;
        },
        closeModal(state) {
            state.content = '';
            state.show = false;
        },
    },

})

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;