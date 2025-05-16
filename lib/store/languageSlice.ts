import { createSlice } from '@reduxjs/toolkit';
import { LanguageType } from '../types';

const initialState: { language: LanguageType } = {
  language: 'en', // Default language
  // You can change this to any other language you want
};

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
