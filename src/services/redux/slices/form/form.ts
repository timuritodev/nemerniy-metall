import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getSubmitForm } from './formAPI';

// export const submitFormApi = createAsyncThunk(
//   '@@form/submit',
//   async (formData: FormData) => {
//     const response = await getSubmitForm(formData);
//     return response; // Вам может потребоваться другой способ обработки ответа сервера
//   }
// );

export const getSubmitFormApi = createAsyncThunk(
    '@@form/submit',
    async (data: string, { fulfillWithValue, rejectWithValue }) => {
        try {
            const response = await getSubmitForm(data);
            return fulfillWithValue(response);
        } catch (error: unknown) {
            return rejectWithValue(error);
        }
    }
);

const initialState = {
    status: 'idle',
    error: '',
    data: [],
};

export const formSlice = createSlice({
    name: '@@form',
    initialState,
    reducers: {
        setData: (state, action) => {
			state.data = action.payload;
		},
    },
    extraReducers: (builder) => {
        builder
            .addCase(getSubmitFormApi.fulfilled, (state) => {
                state.status = 'loading';
            })
            .addMatcher(
                (action) => action.type.endsWith('/pending'),
                (state) => {
                    state.status = 'loading';
                    state.error = '';
                }
            )
            .addMatcher(
                (action) => action.type.endsWith('/rejected'),
                (state, action) => {
                    state.status = 'failed';
                    state.error = action.payload.statusText;
                }
            );
    },
});

export const { setData } = formSlice.actions;


export const formReducer = formSlice.reducer;

