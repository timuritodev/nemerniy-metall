import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ICardState } from "../../../../types/Card.types";
import { getCards } from './cardsAPI';

export const getCardsApi = createAsyncThunk(
    '@@card/card',
    async () => {
        return getCards();
    }
);

export const updateFavorite = createAsyncThunk(
    '@@films/updateFavorite',
    async ({ id, favorite }: { id: number; favorite: boolean }) => {
        return { id, favorite };
    }
);

export const updateBin = createAsyncThunk(
    '@@films/updateBin',
    async ({ id, bin }: { id: number; bin: boolean }) => {
        return { id, bin };
    }
);

const initialState: ICardState = {
    status: 'idle',
    error: '',
    cards: [
        {
            id: 0,
            title: '',
            image: '',
            size: '',
            price: '',
        },
    ],
    cardsFavorite: [
        {
            id: 0,
            title: '',
            image: '',
            size: '',
            price: '',
        },
    ],
    cardsBin: [
        {
            id: 0,
            title: '',
            image: '',
            size: '',
            price: '',
        },
    ],
};

export const cardSlice = createSlice({
    name: '@@card',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCardsApi.fulfilled, (state, action) => {
                state.status = 'success';
                state.cards = action.payload;
                // state.cardsFavorite = action.payload.filter((film) => film.is_favorite);
                // state.cardsBin = action.payload.filter((film) => film.is_bin);
            })
            .addCase(updateFavorite.fulfilled, (state, action) => {
                state.status = 'success';
                const { id, favorite } = action.payload;
                state.cards = state.cards.map((card) =>
                card.id === id ? { ...card, is_favorite: favorite } : card
                );
                state.cardsFavorite = state.cards.filter((card) => card.is_favorite);
                // state.cardsBin = state.cards.filter((card) => card.is_bin);
            })
            .addCase(updateBin.fulfilled, (state, action) => {
                state.status = 'success';
                const { id, bin } = action.payload;
                state.cards = state.cards.map((card) =>
                    card.id === id ? { ...card, is_bin: bin } : card
                );
                // state.cardsFavorite = state.cards.filter((card) => card.is_favorite);
                state.cardsBin = state.cards.filter((card) => card.is_bin);
            });
    },
});

export const cardReducer = cardSlice.reducer;
