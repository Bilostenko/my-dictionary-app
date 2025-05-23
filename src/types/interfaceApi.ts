export interface Word {
    word: string;
    phonetic?: string; 
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
  
 export interface Props {
  hasInteracted: boolean;
  error: boolean;
  wordData: Word[] | null;
}