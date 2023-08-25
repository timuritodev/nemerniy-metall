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
            is_favorite: false,
            is_bin: false, 
        },
    ],
    cardsFavorite: [
        {
            id: 0,
            title: '',
            image: '',
            size: '',
            price: '',
            is_favorite: false,
            is_bin: false, 
        },
    ],
    cardsBin: [
        {
            id: 0,
            title: '',
            image: '',
            size: '',
            price: '',
            is_favorite: false,
            is_bin: false, 
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
                state.cardsFavorite = action.payload.filter((film) => film.is_favorite);
                state.cardsBin = action.payload.filter((film) => film.is_bin);
            })
            .addCase(updateFavorite.fulfilled, (state, action) => {
                state.status = 'success';
                const { id, favorite } = action.payload;
                state.cards = state.cards.map((card) =>
                    card.id === id ? { ...card, is_favorite: favorite } : card
                );
                state.cardsFavorite = state.cards.filter((card) => card.is_favorite);
                // state.cardsBin = state.cards.filter((card) => card.is_bin);
                // if (favorite) {
                //     const existingCardInFavorites = state.cardsFavorite.find((card) => card.id === id);
                //     if (!existingCardInFavorites) {
                //         const cardToAdd = state.cards.find((card) => card.id === id);
                //         if (cardToAdd) {
                //             state.cardsFavorite.push(cardToAdd);
                //         }
                //     }
                // } else {
                //     state.cardsFavorite = state.cardsFavorite.filter((card) => card.id !== id);
                // }
                // const existingCardInFavorites = state.cardsFavorite.find((card) => card.id === id);

                // if (favorite) {
                //     if (!existingCardInFavorites) {
                //         const cardToAdd = state.cards.find((card) => card.id === id);
                //         if (cardToAdd) {
                //             state.cardsFavorite.push(cardToAdd);
                //         }
                //     }
                // } else {
                //     if (existingCardInFavorites) {
                //         state.cardsFavorite = state.cardsFavorite.filter((card) => card.id !== id);
                //     }
                // }
            })
            .addCase(updateBin.fulfilled, (state, action) => {
                state.status = 'success';
                const { id, bin } = action.payload;
                state.cards = state.cards.map((card) =>
                    card.id === id ? { ...card, is_bin: bin } : card
                );
                // state.cardsFavorite = state.cards.filter((card) => card.is_favorite);
                state.cardsBin = state.cards.filter((card) => card.is_bin);
                // if (bin) {
                //     const existingCardInBin = state.cardsBin.find((card) => card.id === id);
                //     if (!existingCardInBin) {
                //         const cardToAdd = state.cards.find((card) => card.id === id);
                //         if (cardToAdd) {
                //             state.cardsBin.push(cardToAdd);
                //         }
                //     }
                // } else {
                //     state.cardsBin = state.cardsBin.filter((card) => card.id !== id);
                // }
            });
    },
});

export const cardReducer = cardSlice.reducer;
