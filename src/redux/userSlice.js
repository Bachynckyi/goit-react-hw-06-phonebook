import { createSlice } from "@reduxjs/toolkit";

const defaultPhonebook = [];

export const userSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: defaultPhonebook,
  
    },
    reducers: {
          addContact: (state, action) => {
            state.items.push(action.payload);
          },
      
          filterContacts: (state, action) => {
            state.filter = action.payload;
          },
      
          // deleteContact: (state, action) => {
          //   state.items = state.items.filter(({ id }) => id !== action.payload);
          // },
    } 
});

export const { addContact } = userSlice.actions;