import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

// import translation files
import home_en from './translations/en/home.json'
import home_zh_CN from './translations/zh_CN/home.json'
import header_en from './translations/en/header.json'
import header_zh_CN from './translations/zh_CN/header.json'

i18n
  // load translation using http -> see /public/locales
  // learn more: https://github.com/i18next/i18next-http-backend
//   .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
        en: {
            home: home_en,
            header: header_en,
        },
        zh_CN: {
            home: home_zh_CN,
            header: header_zh_CN,
        },
    }
  });

export default i18n;