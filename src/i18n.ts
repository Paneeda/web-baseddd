import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import your translation files
import enTranslations from './languages/en.json';
import laTranslations from './languages/la.json';
import cnTranslations from './languages/cn.json';
import vnTranslations from './languages/vn.json';

i18n
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    // Resources object contains all translations
    resources: {
      en: {
        translation: enTranslations
      },
      la: {
        translation: laTranslations
      },
      cn: {
        translation: cnTranslations
      },
      vn: {
        translation: vnTranslations
      }
    },
    
    // Default language
    lng: 'en',
    
    // Fallback language if translation is missing
    fallbackLng: 'en',
    
    // Debug mode (set to false in production)
    debug: true,
    
    interpolation: {
      escapeValue: false //does escaping
    }
  });

export default i18n;
