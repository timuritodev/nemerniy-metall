import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ICard } from "../../../../types/Card.types";
import { getAllitems } from './allitemsAPI';

interface IAllItemsState {
    status: 'idle' | 'success' | 'loading' | 'failed';
    error: string | undefined;
    allitems: Array<ICard>;
}

export const getAllItemsApi = createAsyncThunk(
    '@@allitems/getAllitems',
    async () => {
        return getAllitems();
    }
);

const initialState: IAllItemsState = {
    status: 'idle',
    error: '',
    allitems: [
        {
            _id: '',
            id: 0,
            title: '',
            image: '',
            size: '',
            price: '',
            quantity: 0,
            is_favorite: false,
            is_bin: false,
        },
    ],
};

export const allitemsSlice = createSlice({
    name: '@@allitems',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllItemsApi.fulfilled, (state, action) => {
                state.status = 'success';
                state.allitems = action.payload;
            })
    },
});

export const allitemsReducer = allitemsSlice.reducer;
