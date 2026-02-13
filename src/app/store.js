import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/products/productsSlice';
import servicesReducer from '../features/services/servicesSlice';
import uiReducer from '../features/ui/uiSlice';
import contactReducer from '../features/contact/contactSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    services: servicesReducer,
    ui: uiReducer,
    contact: contactReducer,
  },
});

export default store;
