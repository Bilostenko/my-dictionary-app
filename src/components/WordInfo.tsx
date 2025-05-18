import { useSelector } from "react-redux";
// import { Word, Phonetic, Meaning, Definition } from "../types/interfaceApi";
import { RootState } from "../app/store";
import { useState, useEffect } from "react";
import PacmanLoader from "react-spinners/PacmanLoader";
import ErrorMessage from "../pages/ErrorMessage";
const WordInfo = () => {
  const [delayedLoading, setDelayedLoading] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);
  const { loading, error, wordData } = useSelector(
    (state: RootState) => state.word
  );
  const audioObj = wordData?.[0]?.phonetics.find((p) => p.audio);

  useEffect(() => {
    if (loading) {
      setHasInteracted(true); 
      setDelayedLoading(true);
    } else {
      const timeout = setTimeout(() => {
        setDelayedLoading(false);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [loading]);

  const playAudio = () => {
    if (audioObj?.audio) {
      const audio = new Audio(audioObj.audio);
      audio.play();
    }
  };
  return (
    <main>
      {!hasInteracted ? null : delayedLoading ? (
        <div className="flex justify-center h-screen">
          <PacmanLoader color="rgba(164, 69, 237, 1)" />
        </div>
      ) : error ? (
        <ErrorMessage />
      ) : wordData ? (
        <div>
          <div className="flex justify-between items-center p-4">
            <h1 className="text-dark-700 dark:text-white text-6xl font-bold text-shadow-funky">
              {wordData[0].word}
            </h1>
            <div>
              <button onClick={() => playAudio()}>
                <img src="./src/assets/icon-play.svg" alt="play" />
              </button>
            </div>
          </div>

          <div>
            <h3 className="phonetic text-accent-purple text-2xl font-bold">
              {wordData[0].phonetic}
            </h3>
            <div className="partOfSpeechs flex items-center gap-4 py-10 text-2xl font-bold ">
              <span className="italic text-dark-700 dark:text-white">
                {wordData[0].meanings[0].partOfSpeech}
              </span>
              <div className="flex-grow border-t border-gray-600"></div>
            </div>
          </div>
          <div className="meaning">
            <h2 className="meaning_header text-2xl text-dark-500 dark:text-white">
              Meaning
            </h2>
            <ul className="leading-9 text-dark-700 dark:text-white p-6 text-lg list-disc marker:text-accent-purple pl-10">
              {wordData[0].meanings[0].definitions.map((def, index) => {
                return <li key={index}>{def.definition}</li>;
              })}
            </ul>
          </div>

          <div className="max-w-3xl">
            <h2 className="text-2xl text-dark-500 dark:text-white mb-2">
              Synonyms
            </h2>
            <div className="flex flex-wrap gap-x-2 gap-y-1 text-dark-700 dark:text-white text-lg">
              {wordData[0].meanings[0].synonyms.map((synonym, index, arr) => (
                <span key={index}>
                  <span className="text-accent-purple">{synonym}</span>
                  {index < arr.length - 1 && <span>,&nbsp;</span>}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 py-10 text-2xl font-bold">
            <span className="italic text-dark-700 dark:text-white">
              {wordData[0].meanings[1].partOfSpeech}
            </span>
            <div className="flex-grow border-t border-gray-600"></div>
          </div>

          <div className="meaning">
            <h2 className="meaning_header text-2xl text-dark-500 dark:text-white">
              Meaning
            </h2>
            <ul className="definitions text-dark-700 dark:text-white p-6 text-lg list-disc marker:text-accent-purple pl-10">
              <ul className="leading-9 text-dark-700 dark:text-white p-6 text-lg list-disc marker:text-accent-purple pl-10">
                {wordData[0].meanings[1].definitions.map((def, index) => {
                  return (
                    <li key={index}>
                      <p> {def.definition}</p>
                      {def.example && <p>{def.example}</p>}
                    </li>
                  );
                })}
              </ul>
            </ul>
          </div>
        </div>
      ) : null}
    </main>
  );
};

export default WordInfo;
