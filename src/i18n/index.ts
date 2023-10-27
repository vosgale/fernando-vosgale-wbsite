import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { introductionTranslate } from '../sections/introduction/i18n';
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: 'ptBR',
    // lng: 'es',
    // lng: 'en',
    fallbackLng: 'ptBR',
    debug: false,

    interpolation: {
      escapeValue: false,
    },
    resources: {
      ptBR: {
        introduction: introductionTranslate.ptBR
      },
      en: {
        introduction: introductionTranslate.en
      },
    },
  });

export { i18n };
