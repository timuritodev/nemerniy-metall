import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import storage from 'redux-persist/lib/storage';
import {
	persistReducer,
	persistStore,
	PERSIST,
	REHYDRATE,
	FLUSH,
	PAUSE,
	PURGE,
	REGISTER,
} from 'redux-persist';
import { imageReducer } from './slices/images/images';
import { blockReducer } from './slices/blocks/block';
import { cardReducer } from './slices/cards/cards';
import { cardbyidReducer } from './slices/cardbyid/cardbyid';
import { itemReducer } from './slices/items/items';
import { itembyidReducer } from './slices/itembyid/itembyid';
import { allitemsReducer } from './slices/allitems/allitems';
import { allitembyidReducer } from './slices/allitembyid/allitembyid';
import { popupReducer } from './slices/popup/popup';


const rootReducer = combineReducers({
	image: imageReducer,
	block: blockReducer,
    card: cardReducer,
	cardbyid: cardbyidReducer,
	item: itemReducer,
	itembyid: itembyidReducer,
	allitems: allitemsReducer,
	allitembyid: allitembyidReducer,
	popup: popupReducer,
});

const persistConfig = {
	key: 'root',
	storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [PERSIST, REHYDRATE, FLUSH, PAUSE, PURGE, REGISTER],
			},
		}),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
