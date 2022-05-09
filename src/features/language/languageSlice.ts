import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import languageLibrary from './languageLibrary';
import { Language } from './languageLibraryType';
import initialState from './initialState';

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    changeLanguage: (state, action: PayloadAction<Language>) => {
      if (+action.payload === Language.pl) {
        state.language = languageLibrary.pl;
      } else if (+action.payload === Language.en) {
        state.language = languageLibrary.en;
      }
    },
  },
});

export const { changeLanguage } = languageSlice.actions;

export default languageSlice.reducer;
