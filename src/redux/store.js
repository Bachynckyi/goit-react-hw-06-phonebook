import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import { contactsReducer } from './userSlice';
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
export const store = configureStore ({
    reducer: {
        addContact: contactsReducer,
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store);
