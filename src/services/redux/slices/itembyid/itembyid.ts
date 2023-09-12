import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getItembyid } from './itembyidAPI';
import { IItembyid } from '../../../../types/Items.types';

interface IItembyidState {
	status: 'idle' | 'success' | 'loading' | 'failed';
	error: string | undefined;
	itembyid: IItembyid;
}

export const getItembyidApi = createAsyncThunk(
    '@@item/getItemById',
    async (arg:{id: number, itemId: number}) => {
		const { id, itemId } = arg;
        return getItembyid(id, itemId);
    }
);

const initialState: IItembyidState = {
    status: 'idle',
    error: '',
    itembyid: {
        itemId: 0,
        title: '',
        image: '',
        size: '',
        price: '',
        quantity: 0,
        is_favorite: false,
        is_bin: false,
    },
};

export const itembyidSlice = createSlice({
    name: '@@item',
    initialState,
    reducers: {
        resetItembyid: () => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(getItembyidApi.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getItembyidApi.fulfilled, (state, action) => {
                state.status = 'success';
                state.itembyid = action.payload;
            });
    },
});

export const { resetItembyid } = itembyidSlice.actions;

export const itembyidReducer = itembyidSlice.reducer;
