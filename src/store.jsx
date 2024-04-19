
import { configureStore } from '@reduxjs/toolkit';
import customersReducer from '../src/tools/customersSlice';

export default configureStore({
    reducer: {
        customers: customersReducer,
    },
});
