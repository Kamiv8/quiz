import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import StateType from './stateType';
import { initialState } from './initialState';
import { QuestionWithAnswers } from './quizApiType';

export const getAnswersFromApi = createAsyncThunk('quiz/data', async (type: string) => {
  const response = await axios.get<QuestionWithAnswers>(`http://localhost:8080/api${type}/pl`);
  return response.data;
});

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {},
  extraReducers: {
    [getAnswersFromApi.pending as any]: (state) => {
      state.state = StateType.loading;
    },
    [getAnswersFromApi.fulfilled as any]: (state, { payload }) => {
      state.state = StateType.ready;
      state.questionWithAnswers = payload;
    },
    [getAnswersFromApi.rejected as any]: (state) => {
      state.state = StateType.crash;
      state.questionWithAnswers = [] as never;
    },
  },
});

export default quizSlice.reducer;
