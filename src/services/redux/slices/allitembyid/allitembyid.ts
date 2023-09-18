import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllitembyid } from './allitembyidAPI';
import { IItembyid } from '../../../../types/Items.types';

interface IItembyidState {
    status: 'idle' | 'success' | 'loading' | 'failed';
    error: string | undefined;
    itembyid: IItembyid;
}

export const getAllitembyidApi = createAsyncThunk(
    '@@allitem/getAllitemById',
    async (id: number) => {
        return getAllitembyid(id);
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

export const allitembyidSlice = createSlice({
    name: '@@allitem',
    initialState,
    reducers: {
        resetItembyid: () => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllitembyidApi.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getAllitembyidApi.fulfilled, (state, action) => {
                state.status = 'success';
                state.itembyid = action.payload;
            });
    },
});

export const { resetItembyid } = allitembyidSlice.actions;

export const allitembyidReducer = allitembyidSlice.reducer;
