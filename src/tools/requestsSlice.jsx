import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    requestsList: [],
    modalOpen: false,
};

const requestsSlice = createSlice({
    name: 'requests',
    initialState,
    reducers: {
        addRequests(state, action) {
            state.requestsList.push(action.payload);
        },

        openModal(state){
            state.modalOpen = true;
        },

        closeModal(state){
            state.modalOpen = false;
        },

        clearRequests(state) {
            state.requestsList = [];
        }
    }
})

export const { addRequests, openModal, closeModal, clearRequests } = requestsSlice.actions;
export default requestsSlice.reducer;
