
import { configureStore } from '@reduxjs/toolkit';
import customersReducer from './customersSlice';

export default configureStore({
    reducer: {
        customers: customersReducer,
    },
});
