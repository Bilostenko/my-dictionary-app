import { Word } from "../types/interfaceApi";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface WordState {
    wordData: Word[] | null;
    loading: boolean;
    error: boolean;
}

const initialState: WordState = {
    wordData: null,
    loading: false,
    error: false,
};

const wordSlice = createSlice({
    name: "word",
    initialState,
    reducers: {
        setWordData(state, action: PayloadAction<Word[]>) {
            state.wordData = action.payload;
        },
        setLoading(state, action: PayloadAction<boolean>) {
            state.loading = action.payload;
        },
        setError(state, action: PayloadAction<boolean>) {
            state.wordData = [];
            state.error = action.payload;
        },
        resetWordData(state) {
            state.wordData = [];
            state.loading = false;
            state.error = false;
        },
    },
})

export const { setWordData, setLoading, setError, resetWordData } = wordSlice.actions;
export default wordSlice.reducer;