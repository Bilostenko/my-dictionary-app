import { configureStore } from '@reduxjs/toolkit';
import toggleTheme from '../features/toggleThemeSlice';
import wordSlice from '../features/wordSlice';
import fontSlice from '../features/fontSlice';

const store = configureStore({
  reducer: {
    app: toggleTheme,
    word: wordSlice,
    font: fontSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;