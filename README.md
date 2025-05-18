
1. перемикання теми світла або темна
2. вибір шрифту Сан шеріф, Шеріф, Моно
3. Пошук слова. Якщо слово є, приходить масив із даними.
Якщо нема — приходить { title: 'No Definitions Found', message: ..., resolution: ... }

src/
│
├── api/               # Axios запити та клієнт
├── app/               # store.ts і redux setup
├── components/        # UI компоненти (наприклад, Header, Search, WordCard)
├── features/          # Redux slice-и по фічах
├── pages/             # Сторінки (наприклад, Home, NotFound)
├── styles/            # Глобальні стилі (якщо треба)
├── types/             # Типи TypeScript, якщо API складне
├── utils/             # Хелпери, форматери тощо
└── main.tsx

API https://api.dictionaryapi.dev/api/v2/entries/en/<word>

Якщо слово є, приходить масив із даними

Якщо слова немає, то отримуємо помилку і пробуємо ввести заново

Реалізовано Loader при завнтаженні

Ідеї для фіч:

🔍 Пошук з debounce (щоб не спамити API)

📜 Темна/світла тема (Tailwind дає з коробки)

💾 Історія пошуків (localStorage)

🔈 Кнопка для прослуховування вимови (API дає посилання на аудіо!)

📚 Фільтрація по частині мови (noun, verb…)
