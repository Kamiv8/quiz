import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import initialState from './initialState';
import environment from '../../environment';

export const getBestUsers = createAsyncThunk('getAllUsers', async () => {
  const response = await axios.get(`${environment.url}api/allUsers`);
  return response.data;
});

const rankingSlice = createSlice({
  name: 'ranking',
  initialState,
  reducers: {
  },
  extraReducers: {
    [getBestUsers.pending as any]: (state) => {
      state.players = [];
    },
    [getBestUsers.fulfilled as any]: (state, { payload }) => {
      state.players = payload;
    },
  },
});

export default rankingSlice.reducer;
