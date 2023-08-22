import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IBlockState } from "../../../../types/Block.types";
import { getBlocks } from './blockAPI';

export const getBlocksApi = createAsyncThunk(
	'@@block/block',
	async () => {
		return getBlocks();
	}
);

const initialState: IBlockState = {
	status: 'idle',
	error: '',
	blocks: [
		{
			id: 0,
			title: '',
            image: '',
		},
	],
};

export const blockSlice = createSlice({
	name: '@@block',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getBlocksApi.fulfilled, (state, action) => {
			state.status = 'success';
			state.blocks = action.payload;
		});
	},
});

export const blockReducer = blockSlice.reducer;
