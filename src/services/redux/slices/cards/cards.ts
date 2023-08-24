import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ICardState } from "../../../../types/Card.types";
import { getCards } from './cardsAPI';

export const getCardsApi = createAsyncThunk(
	'@@card/card',
	async () => {
		return getCards();
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
};

export const cardSlice = createSlice({
	name: '@@card',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getCardsApi.fulfilled, (state, action) => {
			state.status = 'success';
			state.cards = action.payload;
		});
	},
});

export const cardReducer = cardSlice.reducer;
