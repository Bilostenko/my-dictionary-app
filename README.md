# Dictionary Explorer 📚 — React + TypeScript + Redux + Vite + TailwindCSS + REST API

<a href="https://react.dev/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="36" height="36" alt="React" /> </a> <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg" width="36" height="36" alt="TypeScript" /> </a> <a href="https://vitejs.dev/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vite-colored.svg" width="36" height="36" alt="Vite" /> </a> <a href="https://redux.js.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/redux-colored.svg" width="36" height="36" alt="Redux" /> </a> <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg" width="36" height="36" alt="Tailwind CSS" /> </a>

---

This application is a stylish and responsive dictionary explorer built with a modern tech stack. Using data from the Free Dictionary API, users can search for English words, hear their pronunciation, and switch between themes and fonts for a personalized experience.

## ✨ Features
🌗 Theme Toggle — Switch between Light and Dark modes.

✒ Font Selector — Choose between Sans Serif, Serif, or Monospace fonts.

🔍 Word Search — Enter an English word and get detailed definitions, phonetics, and usage.

🔈 Audio Pronunciation — Play audio to hear the correct pronunciation.

💬 Error Handling — If the word is not found, get a clear message.

🔄 Loading State — Displays a loader while fetching data.

## 🧰 Technologies Used
React ^19.0.0

TypeScript

Vite

Redux Toolkit ^2.6.1

React Redux ^9.2.0

Tailwind CSS ^4.x

Axios ^1.8.4

## 🖼️ Screenshots

Here’s a peek at the app:

![App Screenshot](https://github.com/Bilostenko/my-dictionary-app/blob/main/localhost_5173_%20(2).png)

## 🏛️ Project Structure

- **`api/`** - Contains HTTP client configuration and API service functions
- **`app/`** - Redux store configuration and root setup
- **`components/`** - Reusable UI components organized by functionality
- **`features/`** - Redux Toolkit slices for state management
- **`pages/`** - Top-level page components and routing
- **`styles/`** - Global CSS styles and theme configuration
- **`types/`** - TypeScript type definitions and interfaces
- **`utils/`** - Pure utility functions and helpers
- **`main.tsx`** - Application entry point and root rendering

🌐 API
We use the Free Dictionary API:
https://api.dictionaryapi.dev/api/v2/entries/en/<word>

✅ If the word exists → Returns an array with definitions.
❌ If the word doesn't exist → Returns an error with:


