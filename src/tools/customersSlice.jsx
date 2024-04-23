// customersSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    customersList: [],
    modalOpen: false,
    filteredCustomers: [],
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

        clearCustomers(state) {
            state.customersList = [];
        },

        filterCustomers(state, action) {
            const searchTerm = action.payload.toLowerCase(); 
            state.filteredCustomers = state.customersList.filter(request =>
                request.name.toLowerCase().includes(searchTerm) 
            );
        }
    },
});

export const { addCustomer, openModal, closeModal, clearCustomers, filterCustomers } = customersSlice.actions;
export default customersSlice.reducer;
