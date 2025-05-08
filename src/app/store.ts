import { configureStore } from '@reduxjs/toolkit';
import toggleTheme from '../features/toggleThemeSlice';

const store = configureStore({
  reducer: {
    app: toggleTheme
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;