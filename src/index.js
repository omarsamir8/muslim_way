import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// استيراد Provider و Store
import { Provider } from 'react-redux';
import store from './store'; // تأكد أن ملف store.js موجود ويحتوي على الإعدادات الصحيحة
import { LanguageProvider } from './languageContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* لف التطبيق داخل Provider ومرر store */}
    <Provider store={store}>
    <LanguageProvider>
      <App />
    </LanguageProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
