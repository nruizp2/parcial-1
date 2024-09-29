import React, { useState } from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";
import App from "./App.js";

import "./index.css"

import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

import { createRoot } from 'react-dom/client';

const messages = {
  'es': localeEsMessages,
  'en': localeEnMessages
};

const leng = navigator.language.split("-")[0]

function Root() {
  const [locale, setLocale] = useState((leng === "en" || leng === "es")? leng: "en");

  const toggleLanguage = () => {
    setLocale(prevLocale => (prevLocale === 'en' ? 'es' : 'en'));
  };

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <div>
        <button className="butt-lang" onClick={toggleLanguage}>
        {locale === 'en' ? 'Cambiar idioma a  Español' : 'Change language to English'}
        </button>
        <p>{!(locale === 'en') ? 'Idioma detectado' : 'Detected language'}: {navigator.language}</p>
        <App />
      </div>
    </IntlProvider>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<Root />);
