import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import StateType from './stateType';
import { initialState } from './initialState';
import { QuestionWithAnswers } from './quizApiType';

export const postAnswersToApi = createAsyncThunk('quiz/data', async (type: string) => {
  const response = await axios.get<QuestionWithAnswers>(`http://localhost:8080/api${type}/pl`);
  console.log(response.data);
  return response.data;
});

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {},
  extraReducers: {
    [postAnswersToApi.pending as any]: (state) => {
      state.state = StateType.loading;
    },
    [postAnswersToApi.fulfilled as any]: (state, { payload }) => {
      state.state = StateType.ready;
      state.questionWithAnswers = payload;
    },
    [postAnswersToApi.rejected as any]: (state) => {
      state.state = StateType.crash;
      state.questionWithAnswers = [] as never;
    },
  },
});

export default quizSlice.reducer;
