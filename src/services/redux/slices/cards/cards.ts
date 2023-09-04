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
    '@@card/updateFavorite',
    async ({ id, favorite }: { id: number; favorite: boolean }) => {
        return { id, favorite };
    }
);

export const updateBin = createAsyncThunk(
    '@@card/updateBin',
    async ({ id, bin }: { id: number; bin: boolean }) => {
        return { id, bin };
    }
);

const initialState: ICardState = {
    status: 'idle',
    error: '',
    cards: [
        {
            _id: '',
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
            _id: '',
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
            _id: '',
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
            })
            .addCase(updateBin.fulfilled, (state, action) => {
                state.status = 'success';
                const { id, bin } = action.payload;
                state.cards = state.cards.map((card) =>
                    card.id === id ? { ...card, is_bin: bin } : card
                );
                state.cardsBin = state.cards.filter((card) => card.is_bin);
            });
    },
});

export const cardReducer = cardSlice.reducer;

// export const getFavoritesCardsApi = createAsyncThunk(
//     '@@card/favoriteCard',
//     async () => {
//         return getFavoriteCards();
//     }
// );

// export const addToFavoritesApi = createAsyncThunk(
//     '@@card/addFavorite',
//     async (id: number, { fulfillWithValue, rejectWithValue }
//     ) => {
//         try {
//             const response = await fetchAddToFavorites(id);
//             const responseData = { status: response.status, ok: response.ok };
//             return fulfillWithValue(responseData);
//         } catch (error: unknown) {
//             return rejectWithValue(error);
//         }
//     }
// );

// export const removeFromFavoritesApi = createAsyncThunk(
//     '@@card/removeFavorite',
//     async (id: number, { fulfillWithValue, rejectWithValue }
//     ) => {
//         try {
//             const response = await fetchRemoveToFavorites(id);
//             const responseData = { status: response.status, ok: response.ok };
//             return fulfillWithValue(responseData);
//         } catch (error: unknown) {
//             return rejectWithValue(error);
//         }
//     }
// );