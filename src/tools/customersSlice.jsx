// customersSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    customersList: [],
    modalOpen: false,
};


const customersSlice = createSlice({
    name: 'customers',
    initialState,
    reducers: {
        addCustomer(state, action) {
            state.customersList.push(action.payload);
        },
        
        openModal(state) {
            state.modalOpen = true;
        },
        closeModal(state) {
            state.modalOpen = false;
        },
    },
});

export const { addCustomer, openModal, closeModal } = customersSlice.actions;
export default customersSlice.reducer;
