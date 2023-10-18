// src/features/displayForm/displayFormSlice.js

import { createSlice } from '@reduxjs/toolkit';

interface DisplayFormState {
    displayForm: boolean;
}

const displayFormSlice = createSlice({
    name: 'displayForm',
    initialState: false, // Initial state
    reducers: {
        showForm: (state) => {
            return true;
        },
        hideForm: (state) => {
            return false;
        },
    },
});

export const { showForm, hideForm } = displayFormSlice.actions;
export const selectDisplayForm = (state: DisplayFormState) => state.displayForm;
export default displayFormSlice.reducer;
