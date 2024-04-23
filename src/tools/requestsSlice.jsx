import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    requestsList: [],
    modalOpen: false,
    filteredRequests: [], 
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
            state.filteredRequests = []; 
        },

        filterRequests(state, action) {
            const searchTerm = action.payload.toLowerCase(); 
            state.filteredRequests = state.requestsList.filter(request =>
                request.name.toLowerCase().includes(searchTerm)
            );
        }
    }
});

export const { addRequests, openModal, closeModal, clearRequests, filterRequests } = requestsSlice.actions;
export default requestsSlice.reducer;
