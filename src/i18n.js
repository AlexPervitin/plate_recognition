import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './localization/en.json';
import ru from './localization/ru.json';
// export const ACCEPT_LANGUAGE = window.navigator.language.slice(0, 2) === 'ru' ? 'ru' : 'en';
const resources = {
  en: {
    translation: en,
  },
  ru: {
    translation: ru,
  },
};
i18next.use(initReactI18next).init({
  resources,
  lng: 'en',
  // keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});
export default i18next;
