import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IImageState } from '../../../../types/Image.types';
import { getImages } from './imagesAPI';

export const getImagesApi = createAsyncThunk(
	'@@image/image',
	async () => {
		return getImages();
	}
);

const initialState: IImageState = {
	status: 'idle',
	error: '',
	images: [
		{
			id: 0,
			title: '',
			text: '',
            image: '',
		},
	],
};

export const imageSlice = createSlice({
	name: '@@image',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getImagesApi.fulfilled, (state, action) => {
			state.status = 'success';
			state.images = action.payload;
		});
	},
});

export const imageReducer = imageSlice.reducer;
