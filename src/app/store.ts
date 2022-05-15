import { configureStore } from '@reduxjs/toolkit';
import languageReducer from '../features/language/languageSlice';
import rankingReducer from '../features/ranking/rankingSlice';
import gameReducer from '../features/game/gameSlice';

const store = configureStore({
  reducer: {
    language: languageReducer,
    ranking: rankingReducer,
    game: gameReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
