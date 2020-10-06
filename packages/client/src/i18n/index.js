import { en } from "./en";
import { fr } from "./fr";
const lang = window.navigator.userLanguage || window.navigator.language;

const availableLanguages = {
    en: en,
    fr: fr
};

export const language = availableLanguages[lang] || availableLanguages["en"];
