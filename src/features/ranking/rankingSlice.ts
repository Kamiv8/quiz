import { createSlice } from '@reduxjs/toolkit';
import initialState from './initialState';
import testUserData from './testUserData';

const rankingSlice = createSlice({
  name: 'ranking',
  initialState,
  reducers: {
    getBestPlayers: (state) => {
      state.players = testUserData;
    },
  },
});

export const { getBestPlayers } = rankingSlice.actions;

export default rankingSlice.reducer;
