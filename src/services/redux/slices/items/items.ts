import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IItemState } from '../../../../types/Items.types';
import { getItems } from './itemsAPI';

export const getItemsApi = createAsyncThunk(
  '@@item/getItems',
  async () => {
    return getItems();
  }
);

export const updateFavoriteItem = createAsyncThunk(
  '@@item/updateFavorite',
  async ({ id, favorite }: { id: number; favorite: boolean }) => {
    return { id, favorite };
  }
);

export const updateBinItem = createAsyncThunk(
  '@@item/updateBin',
  async ({ id, bin }: { id: number; bin: boolean }) => {
    return { id, bin };
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
          itemId: 0,
          title: '',
          image: '',
          size: '',
          price: '',
          is_favorite: false,
          is_bin: false,
        }
      ],
      itemsFavorite: [
        {
          itemId: 0,
          title: '',
          image: '',
          size: '',
          price: '',
          is_favorite: false,
          is_bin: false,
        }
      ],
      itemsBin: [
        {
          itemId: 0,
          title: '',
          image: '',
          size: '',
          price: '',
          is_favorite: false,
          is_bin: false,
        }
      ]
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
      .addCase(updateFavoriteItem.fulfilled, (state, action) => {
        state.status = 'success';
        const { id, favorite } = action.payload;
        // Обновите состояние для избранного
        state.items.forEach((item) => {
          item.data.forEach((itemData) => {
            if (itemData.itemId === id) {
              itemData.is_favorite = favorite;
            }
          });
        });
      })
      .addCase(updateBinItem.fulfilled, (state, action) => {
        state.status = 'success';
        const { id, bin } = action.payload;
        // Обновите состояние для корзины
        state.items.forEach((item) => {
          item.data.forEach((itemData) => {
            if (itemData.itemId === id) {
              itemData.is_bin = bin;
            }
          });
        });
      })
  },
});

export const itemReducer = itemSlice.reducer;
