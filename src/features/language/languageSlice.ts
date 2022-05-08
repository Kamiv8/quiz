import { createSlice } from '@reduxjs/toolkit';
import LanguageLibrary from './languageLibrary';

const languageSlice = createSlice({
  name: 'language',
  initialState: LanguageLibrary.pl,
  reducers: {
    changeLanguage: () => {

    },
  },
});

export default languageSlice.reducer;
