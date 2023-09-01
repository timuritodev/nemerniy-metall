import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IItemState } from '../../../../types/Items.types';
import { getItems } from './itemsAPI';

export const getItemsApi = createAsyncThunk(
    '@@item/getItems',
    async () => {
        return getItems();
    }
);

const initialState: IItemState = {
    status: 'idle',
    error: '',
    items: [
      {
        _id: '',
        id: 0,
        title: '', 
        data: [
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
      },
    ],
  };
  

export const itemSlice = createSlice({
    name: '@@item',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getItemsApi.fulfilled, (state, action) => {
                state.status = 'success';
                state.items = action.payload;
            })
    },
});

export const itemReducer = itemSlice.reducer;
