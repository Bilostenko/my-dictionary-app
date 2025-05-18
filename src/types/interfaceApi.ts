export interface Word {
    word: string;
    phonetic?: string; // іноді може бути відсутнє
    phonetics: Phonetic[];
    origin?: string;
    meanings: Meaning[];
  }
  
  export interface Phonetic {
    text: string;
    audio?: string;
  }
  
  export interface Meaning {
    partOfSpeech: string;
    definitions: Definition[];
    synonyms: string[];
  }
  
  export interface Definition {
    definition: string;
    example?: string;
    synonyms: string[];
    antonyms: string[];
  }
  