import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    requestsList: [],
    modalOpen: false,
    filteredRequests: [], // Adicionando um novo estado para armazenar os pedidos filtrados
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
            state.filteredRequests = []; // Limpar também os pedidos filtrados
        },

        filterRequests(state, action) {
            const searchTerm = action.payload.toLowerCase(); // Convertendo o termo de pesquisa para minúsculo
            state.filteredRequests = state.requestsList.filter(request =>
                request.name.toLowerCase().includes(searchTerm) // Filtrando com base no nome, independentemente de ser maiúsculo ou minúsculo
            );
        }
    }
});

export const { addRequests, openModal, closeModal, clearRequests, filterRequests } = requestsSlice.actions;
export default requestsSlice.reducer;
