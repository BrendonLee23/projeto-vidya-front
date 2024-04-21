// store.js
import { configureStore } from '@reduxjs/toolkit';
import customersReducer from '../src/tools/customersSlice';
import requestsReducer from '../src/tools/requestsSlice';

export default configureStore({
    reducer: {
        customers: customersReducer,
        requests: requestsReducer,
    },
});
