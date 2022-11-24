import ua_dic from './ua/_dic.js';
import en_dic from './en/_dic.js';
import ru_dic from './ru/_dic.js';


export default {

    ua: ua_dic,
    en: en_dic,
    ru: ru_dic,

    lang: [
        {
            mark: "ua",
            icon: ["🇺🇦"],
            name: "Українська",
        },
        {
            mark: "en",
            icon: ["🇬🇧"],
            name: "English",
        },
        {
            mark: "ru",
            icon: ["🇷🇺", "🛳️", "🖕"],
            name: "русский",
        },
    ],

    select_lang: "ua",
};
