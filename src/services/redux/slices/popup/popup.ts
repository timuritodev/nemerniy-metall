import { createSlice } from '@reduxjs/toolkit';

interface IPopupState {
	status: 'idle' | 'success' | 'loading' | 'failed';
	error: string | undefined;
	popup: boolean; // Поправил тип на boolean
}

const initialState: IPopupState = {
    status: 'idle',
    error: '',
    popup: false, // Поправил поле popup
};

export const popupSlice = createSlice({
    name: '@@popup',
    initialState,
    reducers: {
        resetPopup: (state) => initialState, // Поправил название действия
        openPopup: (state) => {
            state.popup = true; // Поправил поле на popup
        },
        closePopup: (state) => {
            state.popup = false; // Поправил поле на popup
        },
    },
});

export const popupReducer = popupSlice.reducer; // Поправил название экспорта

export const { openPopup, closePopup } = popupSlice.actions;
