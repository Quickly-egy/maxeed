import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEn from './locale/en.json'
import translationAr from './locale/ar.json'

const resources = {
    en: {
        translation: translationEn,
    },
    ar: {
        translation: translationAr,
    },
};


i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources,
        lng: "en",

        interpolation: {
            escapeValue: false,
        },
        react: {
            useSuspense: false,
        },
        detection: {
            order: [
                "cookie",
                "htmlTag",
            ],
            caches: ["cookie"]


        }
    });

export default i18n;
