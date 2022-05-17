import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import initialState from './initialState';
import testUserData from './testUserData';

const getBestUsers = createAsyncThunk('', async () => {});

const rankingSlice = createSlice({
  name: 'ranking',
  initialState,
  reducers: {
    getBestPlayers: (state) => {
      state.players = testUserData;
    },
  },
  extraReducers: {
    [getBestUsers.pending as any]: () => {

    },
    [getBestUsers.fulfilled as any]: () => {

    },
  },
});

export const { getBestPlayers } = rankingSlice.actions;

export default rankingSlice.reducer;
