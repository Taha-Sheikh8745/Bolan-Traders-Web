import { createSlice } from '@reduxjs/toolkit';
import { servicesData } from '../../data/services';

const initialState = {
    allServices: servicesData,
    selectedService: null,
    loading: false,
    error: null,
};

export const servicesSlice = createSlice({
    name: 'services',
    initialState,
    reducers: {
        setSelectedService: (state, action) => {
            state.selectedService = action.payload;
        },
        clearSelectedService: (state) => {
            state.selectedService = null;
        },
    },
});

export const { setSelectedService, clearSelectedService } = servicesSlice.actions;

// Selectors
export const selectAllServices = (state) => state.services.allServices;
export const selectSelectedService = (state) => state.services.selectedService;

export default servicesSlice.reducer;
