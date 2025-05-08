import axios from "axios";
import { Word } from "../types/interfaceApi";

const API_URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";
export const fetchWord = async (word: string): Promise<Word[]> => {
    try {
        const response = await axios.get<Word[]>(API_URL + word);
        return response.data;
    } catch (error) {
        console.error("Помилка при отриманні даних:", error);
        throw error;
    }
};
