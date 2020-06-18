import { PeriodicElement } from './event.model';
import { RaceOfCharacterModel, ClassOfCharacterModel, FractionOfCharacterModel, SexOfCharactersModel } from './profile.model';

export const user = {
  userNickname: 'Drakoshik',
  userEmail: 'roobot@i.ua',
  userAvatarURL: 'https://lh5.googleusercontent.com/-TMJU-WItpO0/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rcBYrbd1nzTgibU02D-6Vo5EOLpTQ/photo.jpg',
  rolePermissions: ['User', 'RaidLider', 'Admin'],   // string[]  акайнт пользователя может обладать такими ролями
  cherecters: [
    {
      gameName: 'Aizik',  // string
      level: 110,         // number
      equipmentLevel: '1488', // string
      calassName: 'Paladin',
      calssId: 1,  // number создать константу с  енумкой всех класов и от туда вытягивать calassName
      guild: 'Shadow Reinbow',  // string  возможно потом будет реализована привязка к гильдиям
      cherecterDescription: 'asdasdsadasd', // string  описание игрового персонажа
      roles: [
        {
          roleName: 'tank', // string  возможные роли ['rdps', 'mdps', 'heal', 'tank']
          equipmentLevel: '', // string
          prioity: 1  // number   приоритет 1 2 3 4 и 0 (никогда)
        },
        {
          roleName: 'heal', // string
          equipmentLevel: '', // string
          prioity: 2  // number   приоритет 1 2 3 4 и 0 (никогда)
        },
        {
          roleName: 'rdps', // string
          equipmentLevel: '', // string
          prioity: 3  // number   приоритет 1 2 3 4 и 0 (никогда)
        }
      ]
    },
    {
      gameName: 'Utumba',  // string
      level: 110,         // number
      equipmentLevel: '', // string
      calassName: 'Paladin',
      calssId: 1,  // number создать константу с  енумкой всех класов и от туда вытягивать calassName
      guild: 'Shadow Reinbow',  // string  возможно потом будет реализована привязка к гильдиям
      roles: [
        {
          roleName: 'rdps', // string  возможные роли ['rdps', 'mdps', 'heal', 'tank']
          equipmentLevel: '', // string
          prioity: 1  // number   приоритет 1 2 3 4 и 0 (никогда)
        },
        {
          roleName: 'heal', // string
          equipmentLevel: '', // string
          prioity: 2  // number   приоритет 1 2 3 4 и 0 (никогда)
        }
      ]
    },
  ]
};


export const reidDataArrey = [
  { tank: 1, heal: 2, dps: 3, gameName: '1'},
  { tank: 1, heal: 2, dps: 3, gameName: '2'},
  { tank: 2, heal: 1, dps: 3, gameName: '3'},
  { tank: 2, heal: 1, dps: 3, gameName: '4'},
  { tank: 2, heal: 1, dps: 3, gameName: '5'},
  { tank: 2, heal: 1, dps: 3, gameName: '6'},
  { tank: 2, heal: 1, dps: 3, gameName: '7'},
  { tank: 2, heal: 1, dps: 3, gameName: '8'},
  { tank: 2, heal: 1, dps: 3, gameName: '9'},
  { tank: 2, heal: 1, dps: 3, gameName: '10'},
  { tank: 0, heal: 0, dps: 1, gameName: '11'},
  { tank: 0, heal: 0, dps: 1, gameName: '12'},
  { tank: 0, heal: 0, dps: 1, gameName: '13'}
];

export const raidLocationsConstnt = [
  {
    id: 1,
    shortName: 'ГС',
    reidDifficult: ['об', 'гер', 'миф'],
    fullName: 'Гробница Саргераса',
    imgName: 'fp-tomb-of-sargeras.png'
  },
  {
    id: 2,
    shortName: 'ЦН',
    reidDifficult: ['об', 'гер', 'миф'],
    fullName: 'Цитадель Ночи',
    imgName: 'fp-nighthold.png'
  },
  {
    id: 3,
    shortName: 'АПТ',
    reidDifficult: ['об', 'гер', 'миф'],
    fullName: 'Анторус, Пылающий Трон'
  },
  {
    id: 4,
    shortName: 'ИК',
    reidDifficult: ['об', 'гер', 'миф'],
    fullName: 'Изумрудный Кошмар',
    imgName: 'fp-emerald-nightmare.png'
  },
  {
    id: 5,
    shortName: 'ИД',
    reidDifficult: ['об', 'гер', 'миф'],
    fullName: 'Испытание доблести',
    imgName: 'fp-nighthold.png'
  },
  {
    id: 6,
    shortName: 'ВД',
    reidDifficult: ['об', 'гер', 'миф'],
    fullName: 'Вечный дворец'
  },
  {
    id: 7,
    shortName: 'БД',
    reidDifficult: ['об', 'гер', 'миф'],
    fullName: 'Битва за Дазар`алор'
  },
  {
    id: 8,
    shortName: 'У',
    reidDifficult: ['об', 'гер', 'миф'],
    fullName: 'Ульдир'
  },
  {
    id: 9,
    shortName: 'ГШ',
    reidDifficult: ['об', 'гер', 'миф'],
    fullName: 'Горнило Штормов'
  },
  {
    id: 10,
    shortName: 'ВМ',
    reidDifficult: ['об', 'гер', 'миф'],
    fullName: 'Верховный Молот',
    imgName: 'fp-Highmaul.jpg'
  },
  {
    id: 11,
    shortName: 'ЛЧ',
    reidDifficult: ['об', 'гер', 'миф'],
    fullName: 'Литейная клана Черной горы',
    imgName: 'fp-BlackrockFoundry.jpg'
  },
  {
    id: 12,
    shortName: 'ЦАП',
    reidDifficult: ['об', 'гер', 'миф'],
    fullName: 'Цитадель Адского Пламени',
    imgName: 'fp-hellfire-citadel.png'
  },
  {
    id: 13,
    shortName: 'ОО',
    reidDifficult: ['об', 'гер', 'миф'],
    fullName: 'Осада Оргриммара',
    imgName: 'fp-SiegeOfOrgrimmar.png'
  },
  {
    id: 14,
    shortName: 'ПМ',
    reidDifficult: ['об', 'гер', 'миф'],
    fullName: 'Подземелья Могу`шан',
    imgName: 'fp-MoguShanVaults.png'
  },
  {
    id: 15,
    shortName: 'ПГ',
    reidDifficult: ['об', 'гер', 'миф'],
    fullName: 'Престол Гроз',
    imgName: 'fp-ThroneOfThunder.png'
  },
  {
    id: 16,
    shortName: 'СС',
    reidDifficult: ['об', 'гер', 'миф'],
    fullName: 'Сердце Страха',
    imgName: 'fp-HeartOfFear.png'
  },
  {
    id: 17,
    shortName: 'ТВВ',
    reidDifficult: ['об', 'гер', 'миф'],
    fullName: 'Терраса Вечной Весны',
    imgName: 'fp-TerraceOfEndlessSpring.png'
  },
  {
    id: 18,
    shortName: 'КБ',
    reidDifficult: ['об', 'гер', 'миф'],
    fullName: 'Крепость Барадин',
    imgName: 'fp-BH.jpg'
  },
  {
    id: 19,
    shortName: 'ДД',
    reidDifficult: ['об', 'гер', 'миф'],
    fullName: 'Душа Дракона',
    imgName: 'fp-DS.png'
  },
  {
    id: 20,
    shortName: 'ОП',
    reidDifficult: ['об', 'гер', 'миф'],
    fullName: 'Огненные Просторы',
    imgName: 'fp-Firelands.png'
  },
  {
    id: 21,
    shortName: 'СБ',
    reidDifficult: ['об', 'гер', 'миф'],
    fullName: 'Сумеречный бастион',
    imgName: 'fp-BoT.jpg'
  },
  {
    id: 22,
    shortName: 'ТКТ',
    reidDifficult: ['об', 'гер', 'миф'],
    fullName: 'Твердыня Крыла Тьмы',
    imgName: 'fp-BWD.jpg'
  },
  {
    id: 23,
    shortName: 'ТЧВ',
    reidDifficult: ['об', 'гер', 'миф'],
    fullName: 'Трон Четырех Ветров',
    imgName: 'fp-Tot4W.jpg'
  },
  {
    id: 24,
    shortName: 'ЛО',
    reidDifficult: ['об', 'гер', 'миф'],
    fullName: 'Логово Ониксии',
    imgName: 'fp-Onyxia.jpg'
  },
  {
    id: 25,
    shortName: 'Н',
    reidDifficult: ['об', 'гер', 'миф'],
    fullName: 'Наксрамас',
    imgName: 'fp-naxxramas.jpg'
  },
  {
    id: 26,
    shortName: 'ОС',
    reidDifficult: ['об', 'гер', 'миф'],
    fullName: 'Обсидиановое святилище',
    imgName: 'fp-OS.jpg'
  },
  {
    id: 27,
    shortName: 'ОВ',
    reidDifficult: ['об', 'гер', 'миф'],
    fullName: 'Око Вечности',
    imgName: 'fp-EoE.jpg'
  },
  {
    id: 28,
    shortName: 'УЛ',
    reidDifficult: ['об', 'гер', 'миф'],
    fullName: 'Ульдуар',
    imgName: 'fp-Ulduar.jpg'
  },
  {
    id: 29,
    shortName: 'ХА',
    reidDifficult: ['об', 'гер', 'миф'],
    fullName: 'Хранилище Аркавона',
    imgName: 'fp-VoA.jpg'
  },
  {
    id: 30,
    shortName: 'ИК',
    reidDifficult: ['об', 'гер', 'миф'],
    fullName: 'Испытание крестоносца',
    imgName: 'fp-CC.jpg'
  },
  {
    id: 31,
    shortName: 'РС',
    reidDifficult: ['об', 'гер', 'миф'],
    fullName: 'Рубиновое святилище',
    imgName: 'fp-RS.jpg'
  },
  {
    id: 32,
    shortName: 'ЦЛК',
    reidDifficult: ['об', 'гер', 'миф'],
    fullName: 'Цитадель Ледяной Короны',
    imgName: 'fp-ICC.jpg'
  }
];

export const reidDifficultsArreyConstnt = [
  {
    id: 1,
    name: 'об'
  },
  {
    id: 2,
    name: 'гер'
  },
  {
    id: 3,
    name: 'миф'
  },
];



export const dataelEments: PeriodicElement[] = [
  {
    id: 1,
    reidLider: {
      email: 'roobot@i.ua',
      nikName: 'Aizik',
      name: 'Andrii'
    },
    raidLocetionData: {
      id: 2,
      shortName: 'ГС',
      reidDifficult: 'гер',
      fullName: 'Гробница Саргераса'
    },
    raidComposition: {
      tankNeed: 2,
      tankHave: 2,
      healNeed: 5,
      healHave: 2,
      dpsNeed: 10,
      dpsHave: 3,
    },
    dataTime: '2006-01-02T15:04:05-10:00',
    info: 'So, that’s it. Now we have our material table with all the features like sorting, paging and filtering data.'
  },
  {
    id: 100001,
    reidLider: {
      email: 'roobot@i.ua',
      nikName: 'Losik',
      name: 'Andrii'
    },
    raidLocetionData: {
      id: 2,
      shortName: 'ГС',
      reidDifficult: 'гер',
      fullName: 'Гробница Саргераса'
    },
    raidComposition: {
      tankNeed: 2,
      tankHave: 2,
      healNeed: 5,
      healHave: 2,
      dpsNeed: 10,
      dpsHave: 3,
    },
    dataTime: '2006-01-02T15:04:05-04:00',
    info: 'Ok go go'
  },
  {
    id: 444000,
    reidLider: {
      email: 'roobot@i.ua',
      nikName: 'Aizik',
      name: 'Andrii'
    },
    raidLocetionData: {
      id: 2,
      shortName: 'АПТ',
      reidDifficult: 'об',
      fullName: 'Гробница Саргераса'
    },
    raidComposition: {
      tankNeed: 2,
      tankHave: 2,
      healNeed: 5,
      healHave: 2,
      dpsNeed: 10,
      dpsHave: 3,
    },
    dataTime: '2006-01-02T15:04:05-07:00',
    info: 'So, that’s it. Now we have our material table with all the features like sorting, paging and filtering data.'
  }
];

// TODO: corect parent ralation by raceOfCharactersConstnt
export const classOfCharactersConstnt: ClassOfCharacterModel[] = [
  {
    id: 1,
    name: 'Воин',
    icon: 'class_warrior.jpg',
    parent: [1, 2, 3, 4, 5, 6, 7, 8]
    // parentClassic
    // parentWod
    // parentCat
    // ...
  },
  {
    id: 2,
    name: 'Друид',
    icon: 'class_druid.jpg',
    parent: [4, 6, 7]
  },
  {
    id: 3,
    name: 'Жрец',
    icon: 'class_priest.jpg',
    parent: [1, 2, 3, 4, 6, 7, 8]
  },
  {
    id: 4,
    name: 'Маг',
    icon: 'class_mage.jpg',
    parent: [1, 2, 3, 7, 8]
  },
  {
    id: 5,
    name: 'Охотник',
    icon: 'class_hunter.jpg',
    parent: [1, 2, 3, 4, 5, 6, 7]
  },
  {
    id: 6,
    name: 'Паладин',
    icon: 'class_paladin.jpg',
    parent: [1, 2]
  },
  {
    id: 7,
    name: 'Разбойник',
    icon: 'class_rogue.jpg',
    parent: [1, 2]
  },
  {
    id: 8,
    name: 'Рыцарь смерти',
    icon: 'class_deathknight.jpg',
    parent: [1, 2]
  },
  {
    id: 9,
    name: 'Чернокнижник',
    icon: 'class_warlock.jpg',
    parent: [1, 2]
  },
  {
    id: 10,
    name: 'Шаман',
    icon: 'class_shaman.jpg',
    parent: [1, 2]
  },
  {
    id: 11,
    name: 'Монах',
    icon: 'classicon_monk.jpg',
    parent: [1, 2]
  },
  {
    id: 12,
    name: 'Охотник на демонов',
    icon: 'achievement_boss_illidan.jpg',
    parent: [1, 2]
  },
];

export const raceOfCharactersConstnt: RaceOfCharacterModel[] = [
  {
    id: 1,
    name: 'Дворф',
    icon: 'race_dwarf.png',
    fraction: [1]
  },
  {
    id: 2,
    name: 'Гном',
    icon: 'race_gnome.png',
    fraction: [1]
  },
  {
    id: 3,
    name: 'Человек',
    icon: 'race_human.png',
    fraction: [1]
  },
  {
    id: 4,
    name: 'Ночной ельф',
    icon: 'race_nelf.png',
    fraction: [1]
  },
  {
    id: 5,
    name: 'Орк',
    icon: 'race_orc.png',
    fraction: [2]
  },
  {
    id: 6,
    name: 'Таурен',
    icon: 'race_tauren.png',
    fraction: [2]
  },
  {
    id: 7,
    name: 'Троль',
    icon: 'race_troll.png',
    fraction: [2]
  },
  {
    id: 8,
    name: 'Нежить',
    icon: 'race_undead.png',
    fraction: [2],
  }
// TODO add feamale icon
// race_femaledwarf.png
// race_femalegnome.png
// race_femalehuman.png
// race_femalenelf.png
];

export const fractionOfCharactersConstnt: FractionOfCharacterModel[] = [
  {
    id: 1,
    name: 'Альянс',
    icon: 'fraction_alliance.png',
    flag: 'fraction_alliance_flag.jpg'
  },
  {
    id: 2,
    name: 'Орда',
    icon: 'fraction_horde.png',
    flag: 'fraction_horde_flag.jpg'
  }
];

export const sexOfCharactersConstnt: SexOfCharactersModel[] = [
  {
    id: 1,
    name: 'Мужчина',
    icon: 'fraction_horde.png'
  },
  {
    id: 2,
    name: 'Женщина',
    icon: 'fraction_alliance.png'
  },
];
