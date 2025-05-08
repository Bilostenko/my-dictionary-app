import { fetchWord } from "../API/api";
import { useEffect, useState } from "react";
import { Word } from "../types/interfaceApi";

const WordInfo = () => {
  // const [word, setWord] = useState<Word[] | null>(null);

  // useEffect(() => {
  //   fetchWord("hello")
  //     .then((data) => {
  //       console.log("Fetched word:", data);
  //       setWord(data);
  //     })
  //     .catch((error) => {
  //       console.error("Помилка при фетчі:", error);
  //     });
  // }, []);

  return (
    <div>
      <div className="flex justify-between items-center p-4">
        <h1 className="text-dark-700 dark:text-white text-6xl font-bold text-shadow-funky">
          Keyboard
        </h1>
        <div>
          <img src="./src/assets/icon-play.svg" alt="play" />
        </div>
      </div>
      <div className="">
        <h3 className="phonetic text-accent-purple text-2xl font-bold">
          /ˈkiːbɔːd/
        </h3>
        <div className="partOfSpeechs flex items-center gap-4 py-10 text-2xl font-bold text-dark-700 dark:text-white">
          <span className="italic text-white">verb</span>
          <div className="flex-grow border-t border-gray-600"></div>
        </div>
      </div>
      <div className="meaning">
        <h2 className="meaning_header text-2xl text-dark-500 dark:text-white">
          Meaning
        </h2>
        <ul className="leading-9 text-dark-700 dark:text-white p-6 text-lg list-disc marker:text-accent-purple pl-10">
          <li>
            (etc.) A set of keys used to operate a typewriter, computer etc
          </li>
          <li>
            A component of many instruments including the piano, organ, and
            harpsichord consisting of usually black and white keys that cause
            different tones to be produced when struck.
          </li>
          <li>
            A device with keys of a musical keyboard, used to control electronic
            sound-producing devices which may be built into or separate from the
            keyboard device.
          </li>
        </ul>
      </div>
      <h2>
        <span className="text-2xl text-dark-500 dark:text-white">Synonyms</span>
        <span className="text-2xl text-accent-purple ml-7">
          electronic keyboard
        </span>
      </h2>
      <div className="flex items-center gap-4 py-10 text-2xl font-bold text-dark-700 dark:text-white">
        <span className="italic text-white">verb</span>
        <div className="flex-grow border-t border-gray-600"></div>
      </div>
      <div className="meaning">
        <h2 className="meaning_header text-2xl text-dark-500 dark:text-white">
          Meaning
        </h2>
        <ul className="definitions text-dark-700 dark:text-white p-6 text-lg list-disc marker:text-accent-purple pl-10">
          <li className="definition leading-8">
            <span>To type on a computer keyboard.</span> <br />
            <span className="text-dark-500 dark:text-white">
              “Keyboarding is the part of this job I hate the most.”
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default WordInfo;
