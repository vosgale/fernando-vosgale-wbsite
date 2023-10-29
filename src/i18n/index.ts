import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { introductionTranslate } from '../sections/introduction/i18n';
import { aboutMeTranslate } from '../sections/aboutme/i18n';
import { experienceTranslate } from '../sections/experience/i18n';
import { skillsTranslate } from '../sections/skills/i18n';
import { repositoriesTranslate } from '../sections/repositories/i18n';
import { mainProjectsTranslate } from '../sections/mainProjects/i18n';
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
        introduction: introductionTranslate.ptBR,
        aboutme: aboutMeTranslate.ptBR,
        experience: experienceTranslate.ptBR,
        skills: skillsTranslate.ptBR,
        repositories: repositoriesTranslate.ptBR,
        mainProjects: mainProjectsTranslate.ptBR
      },
      en: {
        introduction: introductionTranslate.en,
        aboutme: aboutMeTranslate.en,
        experience: experienceTranslate.en,
        skills: skillsTranslate.en,
        repositories: repositoriesTranslate.en,
        mainProjects: mainProjectsTranslate.en
      },
    },
  });

export { i18n };
