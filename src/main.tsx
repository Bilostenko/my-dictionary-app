import { createRoot } from 'react-dom/client'
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store  from "./app/store";
import './index.css'
import App from './App.tsx'

const savedTheme = localStorage.getItem('theme');
if(savedTheme === 'dark'){
  document.documentElement.classList.add('dark');
}

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
