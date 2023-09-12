import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCardbyid } from './cardbyidAPI';
import { ICardbyidState } from '../../../../types/Cardbyid.types';

export const getCardbyidApi = createAsyncThunk(
    '@@card/getCards',
    async (cardId: number) => {
        return getCardbyid(cardId);
    }
);

const initialState: ICardbyidState = {
    status: 'idle',
    error: '',
    cardbyid: {
        id: 0,
        title: '',
        image: '',
        size: '',
        price: '',
        quantity: 0,
        is_favorite: false,
        is_bin: false,
    },
};

export const cardbyidSlice = createSlice({
    name: '@@card',
    initialState,
    reducers: {
        resetCardbyid: () => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCardbyidApi.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getCardbyidApi.fulfilled, (state, action) => {
                state.status = 'success';
                state.cardbyid = action.payload;
            });
    },
});

export const { resetCardbyid } = cardbyidSlice.actions;

export const cardbyidReducer = cardbyidSlice.reducer;
