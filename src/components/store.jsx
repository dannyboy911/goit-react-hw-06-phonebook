import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactsSlice } from './slices/contactsSlice';
import { filterSlice } from './slices/filterSlice';
import { combineReducers } from 'redux';

// Configurația Redux Persist
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['contacts'], // Persist doar array-ul contacts
};

const rootReducer = combineReducers({
  contacts: contactsSlice.reducer,
  filter: filterSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
