import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { i18nLocales } from 'View/Locales';

i18n
    .use(initReactI18next)
    .init({
        resources: i18nLocales,
        lng: 'en',
        debug: true,
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });


export default i18n;
