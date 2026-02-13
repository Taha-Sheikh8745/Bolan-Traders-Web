import { createSlice } from '@reduxjs/toolkit';
import { productsData } from '../../data/products';

const initialState = {
    allProducts: productsData,
    categories: [
        {
            id: 'consumer-electronics',
            name: 'Consumer Electronics',
            description: 'TVs, Audio Systems, Smart Devices',
            image: '/assets/images/consumer-electronics.jpg'
        },
        {
            id: 'home-appliances',
            name: 'Home Appliances',
            description: 'Refrigerators, Washing Machines, Air Conditioners',
            image: '/assets/images/home-appliances.jpg'
        },
        {
            id: 'industrial-equipment',
            name: 'Industrial Equipment',
            description: 'Generators, Compressors, Industrial Tools',
            image: '/assets/images/industrial-equipment.jpg'
        },
        {
            id: 'power-solutions',
            name: 'Power Solutions',
            description: 'UPS, Inverters, Batteries',
            image: '/assets/images/power-solutions.jpg'
        },
        {
            id: 'lighting-solutions',
            name: 'Lighting Solutions',
            description: 'LED, Commercial Lighting, Smart Lighting',
            image: '/assets/images/lighting-solutions.jpg'
        },
        {
            id: 'security-systems',
            name: 'Security Systems',
            description: 'CCTV, Access Control, Alarm Systems',
            image: '/assets/images/security-systems.jpg'
        }
    ],
    selectedCategory: null,
    filteredProducts: [],
    searchQuery: '',
    loading: false,
    error: null,
};

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setSelectedCategory: (state, action) => {
            state.selectedCategory = action.payload;
            if (action.payload) {
                state.filteredProducts = state.allProducts.filter(
                    product => product.category === action.payload
                );
            } else {
                state.filteredProducts = state.allProducts;
            }
        },
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
            const query = action.payload.toLowerCase();
            state.filteredProducts = state.allProducts.filter(product =>
                product.name.toLowerCase().includes(query) ||
                product.description.toLowerCase().includes(query) ||
                product.category.toLowerCase().includes(query)
            );
        },
        clearFilters: (state) => {
            state.selectedCategory = null;
            state.searchQuery = '';
            state.filteredProducts = state.allProducts;
        },
    },
});

export const { setSelectedCategory, setSearchQuery, clearFilters } = productsSlice.actions;

// Selectors
export const selectAllProducts = (state) => state.products.allProducts;
export const selectCategories = (state) => state.products.categories;
export const selectFilteredProducts = (state) => state.products.filteredProducts;
export const selectSelectedCategory = (state) => state.products.selectedCategory;
export const selectProductsByCategory = (state, category) =>
    state.products.allProducts.filter(product => product.category === category);

export default productsSlice.reducer;
