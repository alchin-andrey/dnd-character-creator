import dic from "@/assets/catalog/texts/dic.js";

let lang_sel = dic.select_lang;

export function t(x) {
  return dic[lang_sel][x];
}


