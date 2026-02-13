import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    formData: {
        name: '',
        email: '',
        phone: '',
        company: '',
        productService: '',
        message: '',
    },
    submitting: false,
    submitted: false,
    error: null,
    validationErrors: {},
};

export const contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {
        updateFormField: (state, action) => {
            const { field, value } = action.payload;
            state.formData[field] = value;
            // Clear validation error for this field
            if (state.validationErrors[field]) {
                delete state.validationErrors[field];
            }
        },
        setValidationErrors: (state, action) => {
            state.validationErrors = action.payload;
        },
        submitFormStart: (state) => {
            state.submitting = true;
            state.error = null;
        },
        submitFormSuccess: (state) => {
            state.submitting = false;
            state.submitted = true;
            state.formData = initialState.formData;
            state.validationErrors = {};
        },
        submitFormFailure: (state, action) => {
            state.submitting = false;
            state.error = action.payload;
        },
        resetForm: (state) => {
            state.formData = initialState.formData;
            state.submitted = false;
            state.error = null;
            state.validationErrors = {};
        },
    },
});

export const {
    updateFormField,
    setValidationErrors,
    submitFormStart,
    submitFormSuccess,
    submitFormFailure,
    resetForm,
} = contactSlice.actions;

// Selectors
export const selectFormData = (state) => state.contact.formData;
export const selectSubmitting = (state) => state.contact.submitting;
export const selectSubmitted = (state) => state.contact.submitted;
export const selectFormError = (state) => state.contact.error;
export const selectValidationErrors = (state) => state.contact.validationErrors;

export default contactSlice.reducer;
