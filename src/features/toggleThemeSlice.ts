import { createSlice } from "@reduxjs/toolkit";

interface AppState {
  theme: "light" | "dark";
}

const storedTheme = localStorage.getItem("theme") as "light" | "dark" | null;

const initialState: AppState = {
  theme: storedTheme || "light",
};

const toggleThemeSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleTheme(state) {
      state.theme = state.theme === "light" ? "dark" : "light";
      document.documentElement.classList.toggle("dark", state.theme === "dark");
      localStorage.setItem("theme", state.theme);
    },
  },
});


export const { toggleTheme } = toggleThemeSlice.actions;
export default toggleThemeSlice.reducer;

