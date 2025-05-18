import { configureStore } from '@reduxjs/toolkit';
import toggleTheme from '../features/toggleThemeSlice';
import wordSlice from '../features/wordSlice';

const store = configureStore({
  reducer: {
    app: toggleTheme,
    word: wordSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;