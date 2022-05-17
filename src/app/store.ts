import { configureStore } from '@reduxjs/toolkit';
import languageReducer from '../features/language/languageSlice';
import rankingReducer from '../features/ranking/rankingSlice';
import quizReducer from '../features/quiz/quizSlice';

const store = configureStore({
  reducer: {
    language: languageReducer,
    ranking: rankingReducer,
    quiz: quizReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
