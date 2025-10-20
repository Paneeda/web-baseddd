import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import your translation files
import enTranslations from './languages/en.json';
import laTranslations from './languages/la.json';
import cnTranslations from './languages/cn.json';
import vnTranslations from './languages/vn.json';

i18n
  .use(LanguageDetector) // detect + persist selected language
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    // Resources object contains all translations
    resources: {
      en: {
        translation: enTranslations
      },
      lo: {
        translation: laTranslations
      },
      cn: {
        translation: cnTranslations
      },
      vn: {
        translation: vnTranslations
      }
    },
    // Load language only (maps en-US -> en, zh-CN -> zh if provided)
    load: 'languageOnly',
    // Limit to supported languages to avoid unknown codes lingering
    supportedLngs: ['en', 'lo', 'cn', 'vn'],

    // Fallback language if translation is missing
    fallbackLng: 'en',
    
    // Debug mode (set to false in production)
    debug: true,
    
    // Configure browser language detector
    detection: {
      // Priority order for detecting user language
      order: ['localStorage', 'querystring', 'cookie', 'navigator', 'htmlTag', 'path', 'subdomain'],
      // Where to cache the user language
      caches: ['localStorage'],
      // Key used in localStorage
      lookupLocalStorage: 'i18nextLng',
    },
    
    interpolation: {
      escapeValue: false //does escaping
    }
  });

export default i18n;
