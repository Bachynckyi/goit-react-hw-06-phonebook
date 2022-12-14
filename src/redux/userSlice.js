import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const defaultPhonebook = [
  // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const userSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: defaultPhonebook,
        filter: ""
    },
    reducers: {
          addContact: (state, action) => {
            state.items.push(action.payload);
          },
          deleteContact: (state, action) => {
            state.items = state.items.filter(({ id }) => id !== action.payload);
          },
          filterContacts: (state, action) => {
            state.filter = action.payload;
          },
    } 
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: ['filter'],
};

export const contactsReducer = persistReducer(
  persistConfig,
  userSlice.reducer,
);

export const { addContact, deleteContact, filterContacts } = userSlice.actions;