import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isMobileMenuOpen: false,
    isQuoteModalOpen: false,
    activeDropdown: null,
    scrollPosition: 0,
    isHeaderSticky: false,
    loading: false,
};

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        toggleMobileMenu: (state) => {
            state.isMobileMenuOpen = !state.isMobileMenuOpen;
        },
        closeMobileMenu: (state) => {
            state.isMobileMenuOpen = false;
        },
        openQuoteModal: (state) => {
            state.isQuoteModalOpen = true;
        },
        closeQuoteModal: (state) => {
            state.isQuoteModalOpen = false;
        },
        setActiveDropdown: (state, action) => {
            state.activeDropdown = action.payload;
        },
        setScrollPosition: (state, action) => {
            state.scrollPosition = action.payload;
            state.isHeaderSticky = action.payload > 100;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
    },
});

export const {
    toggleMobileMenu,
    closeMobileMenu,
    openQuoteModal,
    closeQuoteModal,
    setActiveDropdown,
    setScrollPosition,
    setLoading,
} = uiSlice.actions;

// Selectors
export const selectIsMobileMenuOpen = (state) => state.ui.isMobileMenuOpen;
export const selectIsQuoteModalOpen = (state) => state.ui.isQuoteModalOpen;
export const selectActiveDropdown = (state) => state.ui.activeDropdown;
export const selectIsHeaderSticky = (state) => state.ui.isHeaderSticky;
export const selectLoading = (state) => state.ui.loading;

export default uiSlice.reducer;
