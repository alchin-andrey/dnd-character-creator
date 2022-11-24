import * as races from './races.js';

export const langs = {
  common: "всеобщий",

  common_details: "Торговый язык людей. Почти все разумные существа могут понимать и говорить на Всеобщем языке, хотя они и могут делать вид, что не понимают его.",

  halfling: "халфлингский",

  halfling_details: "Луйрик. Не является секретным, но они не торопятся делиться им с остальными. Пишут они мало, и почти не создали собственной литературы, но устные предания у них очень распространены. Использует символы из Всеобщего.",

  gnome: "гномий",

  gnome_details: "Гном. Хорошо известен благодаря техническим трактатам и каталогам знаний об окружающем мире. Люди ботаники, натуралисты и инженеры, очень часто изучают гномий язык, для того что бы затем можно было прочесть множество потрясающих книг, технических тематик (механика, самоцветы), где гномы достигли высокого уровня развития.",

  dwarf: "дварфийский",

  dwarf_details: "Детек. Состоит из твёрдых согласных и гортанных звуков, и этот акцент будет присутствовать в любом языке, на котором дварф будет говорить. Буквами являются руны. В литературе собрана обширная история королевств дварфов и их войн на протяжении тысячелетий.",

  tiefling: "тифлингский",

  tiefling_details: "Инфернальный. Язык дьяволов, которым пользуются тифлинги. Диалект божественного.",

  elf: "эльфийский",

  elf_details: "Эспуар. Текучий, с утончёнными интонациями и сложной грамматикой. Эльфийская литература богата и разнообразна, а стихи и песни известны среди представителей других рас. Многие барды учат эльфийский язык, чтоб добавить песни в свой репертуар. Сами эльфы иногда называют его Истинная Речь.",

  orc: "орочий",

  orc_details: "Дарактан. Орки, не имеющие своего собственного алфавита, используют шрифт Дварфов лишь в редких случаях чтобы написать что-то на орочьем. Очень часто письменность орков напоминает какие-то грубые надписи.",

  dragon: "драконий",

  dragon_details: "Драконик. Считается одним из старейших и часто используется во время изучения магии. Этот язык звучит грубо для большинства других существ, и содержит много твёрдых согласных и шипящих звуков.",

  giant: "великаний",

  giant_details: "Йотун. Язык, который объединяет великанов, является одним из немногих остатков от их некогда великой империи. При можестве диалектов, великаны разных типов могут понимать друг друга." +
  "\n\n Любой не-великан, который выучил язык великанов, может разговаривать со всеми типами великанов, но великанам иногда трудно услышать тихие голоса существ человеческого размера, а некоторые гласные звуки практически невозможно воспроизвести без легких размером с пивные бочки.",

  goblin: "гоблинский",
  goblin_details: "Гукляк. Гортанный, состоит из хрюканья и всхлипываний. Единственный из основных языков, который не имеет собственного письма, что отражает грубую и варварскую природу гоблинской расы.",

  undercommon: "подземных существ",
  undercommon_details: "Используется глубинными гномами, темными эльфами и другими разумными подземными жителями.",

  sylvan: "лесных существ",
  sylvan_details: "Сильван. Язык всех дриад, пикси, добрых и нейтральных фей, держится в секрете от большинства не-фей. Использует эльфийский алфавит.",

  animal: "зверьков",
  animal_details: "Тайное знание лесных гномов, позволяющее им коммуницировать со зверушками, получать и передавать предупреждения об опасности и другие пройстейшие сигналы.",

  druid: "друидский",
  druid_details: "Друэдан. Тайный язык друидов. На нём можно говорить и оставлять тайные послания. Те, кто знают этот язык, автоматически замечают эти послания. Другие замечают присутствие послания при успешной проверке на Внимательности ( сложность 15 ), но без помощи магии не могут расшифровать его. Он секретный, и им владеют лишь друиды, обучение не друидов запрещено под страхом смерти.",

  primordial: "первичный",
  primordial_details: "Первородниый. Гортанный язык, заполненный резкими слогами и твёрдыми согласными. Включает диалекты Акван, Ауран, Игнан, и Терран, по одному на каждый из четырёх стихийных планов. Существа, говорящие на разных диалектах одного языка могут общаться между собой.",

  sky: "небесный",
  sky_details: "Язык ангелов и божеств. Диалект первичного языка.",

  demonic: "демонический",
  demonic_details: "Язык Бездны. Форма Первичного, искажённая и искривлённая злом в сердце Бездны. Включает слова силы, чьи слоги содержат первородное зло. Персонажи могут изучить основы общения на языке Бездны, но не смогут освоить эти могущественные звуки. Тексты, содержащие такие слова могут обладать мощными эффектами — и тома или свитки с ними могут быть артефактами сами по себе.",

  thieves: "воровской жаргон",
  thieves_details:"Тайная смесь диалекта, жаргона и шифра, который позволяет скрывать сообщения в, казалось бы, обычном разговоре. Только другое существо, знающее воровской жаргон, понимает такие сообщения. Это занимает в четыре раза больше времени, нежели передача тех же слов прямым текстом." +
  "\n\n Так же в него входит набор секретных знаков и символов, используемый для передачи коротких и простых сообщений. Например, является ли область опасной или территорией гильдии воров, находится ли поблизости добыча, простодушны ли люди в округе, и предоставляют ли здесь безопасное убежище для воров в бегах.",

  dambratan: "дамбратан",
  dambratan_details: "Язык народа Аркаюн: " + races.arkayun_human,

  midani: "мидани",
  midani_details: "Язык народа Бедин: " + races.bedin_human,

  guran: "гуран",
  guran_details: "Язык народа Гур: " + races.gur_human,

  damarian: "дамарский",
  damarian_details: "Язык народа Дамарцев: " + races.damarian_human + "\n\n Язык народа Нар: " + races.nar_human,

  illuskian: "иллюскианский",
  illuskian_details: "Язык народа Иллюскианцев: " + races.illuskian_human,

  rushum: "рушум",
  rushum_details: "Язык народа Имаскари: " + races.imaskari_human,

  alzhedo: "алжедо",
  alzhedo_details: "Язык народа Калишит: " + races.kalishit_human,

  chessent: "чессент",
  chessent_details: "Язык народа Мулан: " + races.mulan_human,

  rashemian: "рашемийский",
  rashemian_details: "Язык народа Рашеми: " + races.rashemi_human,

  chondatanian: "чондатанский",
  chondatanian_details: "Язык народа Тетирцев: " + races.tetirian_human + "\n\n Язык народа Чондатанцев: " + races.chondatan_human,

  tuiganian: "туйганский",
  tuiganian_details: "Язык народа Туйган: " + races.tuigan_human,

  teramian: "терамийский",
  teramian_details: "Язык народа Тёрами: " + races.terami_human,

  uluik: "улуик",
  uluik_details: "Язык народа Улутиун: " + races.ulutiune_human,

  vaelan: "ваэлан",
  vaelan_details: "Язык народа Ффолк: " + races.ffolk_human,

  halruanian: "халруанский",
  halruanian_details: "Язык народа Халруан: " + races.halruanian_human,

  chult: "чультский",
  chult_details: "Язык народа Чульт: " + races.chult_human,

  shaarian: "шаарский",
  shaarian_details: "Язык народа Шаар: " + races.shaarian_human,

  shu: "шу",
  shu_details: "Язык народа Шу: " + races.shu_human,

};
