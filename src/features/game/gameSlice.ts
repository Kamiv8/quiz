import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  time: {
    seconds: 0,
    minutes: 0,
  },
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    startTimer: () => {
    },
    next: () => {

    },
  },
});

export default gameSlice.reducer;
