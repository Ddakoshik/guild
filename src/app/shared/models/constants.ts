import { PeriodicElement } from './event.model';

export const user = {
  email: 'roobot@i.ua', // string  используется для авторизации пользователя как уникальный ключ вместо userId
  gameEmail: 'roobot@i.ua',     // string   используется для рассылки уведомлений
  googleAvatarURL: 'https://lh5.googleusercontent.com/-TMJU-WItpO0/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rcBYrbd1nzTgibU02D-6Vo5EOLpTQ/photo.jpg',
  charecterAvatarURL: '',  // string  если пустой используется googleAvatarURL
  mainCharecters: 'Aizik', // string  главный игровой персонаж что и будет на аватарке
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

export const raidLocation = [
  {
    id: 1,
    shortName: 'ГС',
    reidDifficult: ['об', 'гер', 'миф'],
    fullname: 'Гробница Саргераса',
    imgName: 'fp-tomb-of-sargeras.png'
  },
  {
    id: 2,
    shortName: 'ЦН',
    reidDifficult: ['об', 'гер', 'миф'],
    fullname: 'Цитадель Ночи',
    imgName: 'fp-nighthold.png'
  },
  {
    id: 3,
    shortName: 'АПТ',
    reidDifficult: ['об', 'гер', 'миф'],
    fullname: 'Анторус, Пылающий Трон'
  },
  {
    id: 4,
    shortName: 'ИК',
    reidDifficult: ['об', 'гер', 'миф'],
    fullname: 'Изумрудный Кошмар',
    imgName: 'fp-emerald-nightmare.png'
  },
  {
    id: 5,
    shortName: 'ИД',
    reidDifficult: ['об', 'гер', 'миф'],
    fullname: 'Испытание доблести',
    imgName: 'fp-nighthold.png'
  },
  {
    id: 6,
    shortName: 'ВД',
    reidDifficult: ['об', 'гер', 'миф'],
    fullname: 'Вечный дворец'
  },
  {
    id: 7,
    shortName: 'БД',
    reidDifficult: ['об', 'гер', 'миф'],
    fullname: 'Битва за Дазар`алор'
  },
  {
    id: 8,
    shortName: 'У',
    reidDifficult: ['об', 'гер', 'миф'],
    fullname: 'Ульдир'
  },
  {
    id: 9,
    shortName: 'ГШ',
    reidDifficult: ['об', 'гер', 'миф'],
    fullname: 'Горнило Штормов'
  },
  {
    id: 10,
    shortName: 'ВМ',
    reidDifficult: ['об', 'гер', 'миф'],
    fullname: 'Верховный Молот',
    imgName: 'fp-Highmaul.jpg'
  },
  {
    id: 11,
    shortName: 'ЛЧ',
    reidDifficult: ['об', 'гер', 'миф'],
    fullname: 'Литейная клана Черной горы',
    imgName: 'fp-BlackrockFoundry.jpg'
  },
  {
    id: 12,
    shortName: 'ЦАП',
    reidDifficult: ['об', 'гер', 'миф'],
    fullname: 'Цитадель Адского Пламени',
    imgName: 'fp-hellfire-citadel.png'
  },
  {
    id: 13,
    shortName: 'ОО',
    reidDifficult: ['об', 'гер', 'миф'],
    fullname: 'Осада Оргриммара',
    imgName: 'fp-SiegeOfOrgrimmar.png'
  },
  {
    id: 14,
    shortName: 'ПМ',
    reidDifficult: ['об', 'гер', 'миф'],
    fullname: 'Подземелья Могу`шан',
    imgName: 'fp-MoguShanVaults.png'
  },
  {
    id: 15,
    shortName: 'ПГ',
    reidDifficult: ['об', 'гер', 'миф'],
    fullname: 'Престол Гроз',
    imgName: 'fp-ThroneOfThunder.png'
  },
  {
    id: 16,
    shortName: 'СС',
    reidDifficult: ['об', 'гер', 'миф'],
    fullname: 'Сердце Страха',
    imgName: 'fp-HeartOfFear.png'
  },
  {
    id: 17,
    shortName: 'ТВВ',
    reidDifficult: ['об', 'гер', 'миф'],
    fullname: 'Терраса Вечной Весны',
    imgName: 'fp-TerraceOfEndlessSpring.png'
  },
  {
    id: 18,
    shortName: 'КБ',
    reidDifficult: ['об', 'гер', 'миф'],
    fullname: 'Крепость Барадин',
    imgName: 'fp-BH.jpg'
  },
  {
    id: 19,
    shortName: 'ДД',
    reidDifficult: ['об', 'гер', 'миф'],
    fullname: 'Душа Дракона',
    imgName: 'fp-DS.png'
  },
  {
    id: 20,
    shortName: 'ОП',
    reidDifficult: ['об', 'гер', 'миф'],
    fullname: 'Огненные Просторы',
    imgName: 'fp-Firelands.png'
  },
  {
    id: 21,
    shortName: 'СБ',
    reidDifficult: ['об', 'гер', 'миф'],
    fullname: 'Сумеречный бастион',
    imgName: 'fp-BoT.jpg'
  },
  {
    id: 22,
    shortName: 'ТКТ',
    reidDifficult: ['об', 'гер', 'миф'],
    fullname: 'Твердыня Крыла Тьмы',
    imgName: 'fp-BWD.jpg'
  },
  {
    id: 23,
    shortName: 'ТЧВ',
    reidDifficult: ['об', 'гер', 'миф'],
    fullname: 'Трон Четырех Ветров',
    imgName: 'fp-Tot4W.jpg'
  },
  {
    id: 24,
    shortName: 'ЛО',
    reidDifficult: ['об', 'гер', 'миф'],
    fullname: 'Логово Ониксии',
    imgName: 'fp-Onyxia.jpg'
  },
  {
    id: 25,
    shortName: 'Н',
    reidDifficult: ['об', 'гер', 'миф'],
    fullname: 'Наксрамас',
    imgName: 'fp-naxxramas.jpg'
  },
  {
    id: 26,
    shortName: 'ОС',
    reidDifficult: ['об', 'гер', 'миф'],
    fullname: 'Обсидиановое святилище',
    imgName: 'fp-OS.jpg'
  },
  {
    id: 27,
    shortName: 'ОВ',
    reidDifficult: ['об', 'гер', 'миф'],
    fullname: 'Око Вечности',
    imgName: 'fp-EoE.jpg'
  },
  {
    id: 28,
    shortName: 'УЛ',
    reidDifficult: ['об', 'гер', 'миф'],
    fullname: 'Ульдуар',
    imgName: 'fp-Ulduar.jpg'
  },
  {
    id: 29,
    shortName: 'ХА',
    reidDifficult: ['об', 'гер', 'миф'],
    fullname: 'Хранилище Аркавона',
    imgName: 'fp-VoA.jpg'
  },
  {
    id: 30,
    shortName: 'ИК',
    reidDifficult: ['об', 'гер', 'миф'],
    fullname: 'Испытание крестоносца',
    imgName: 'fp-CC.jpg'
  },
  {
    id: 31,
    shortName: 'РС',
    reidDifficult: ['об', 'гер', 'миф'],
    fullname: 'Рубиновое святилище',
    imgName: 'fp-RS.jpg'
  },
  {
    id: 32,
    shortName: 'ЦЛК',
    reidDifficult: ['об', 'гер', 'миф'],
    fullname: 'Цитадель Ледяной Короны',
    imgName: 'fp-ICC.jpg'
  }
];



export const dataelEments: PeriodicElement[] = [
  {
    id: 1,
    reidLider: {
      email: 'roobot@i.ua',
      nikName: 'Aizik',
      name: 'Andrii'
    },
    raidName: {
      id: 2,
      shortName: 'ГС',
      reidDifficult: 'гер',
      fullname: 'Гробница Саргераса'
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
    raidName: {
      id: 2,
      shortName: 'ГС',
      reidDifficult: 'гер',
      fullname: 'Гробница Саргераса'
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
    raidName: {
      id: 2,
      shortName: 'АПТ',
      reidDifficult: 'об',
      fullname: 'Гробница Саргераса'
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


export const classOfCharacters = [
  {
    className: 'Воин',
    imgName: 'class_warrior.jpg'
  },
  {
    className: 'Друид',
    imgName: 'class_druid.jpg'
  },
  {
    className: 'Жрец',
    imgName: 'class_priest.jpg'
  },
  {
    className: 'Маг',
    imgName: 'class_mage.jpg'
  },
  {
    className: 'Охотник',
    imgName: 'class_hunter.jpg'
  },
  {
    className: 'Паладин',
    imgName: 'class_paladin.jpg'
  },
  {
    className: 'Разбойник',
    imgName: 'class_rogue.jpg'
  },
  {
    className: 'Рыцарь смерти',
    imgName: 'class_deathknight.jpg'
  },
  {
    className: 'Чернокнижник',
    imgName: 'class_warlock.jpg'
  },
  {
    className: 'Шаман',
    imgName: 'class_shaman.jpg'
  },
  {
    className: 'Монах',
    imgName: 'classicon_monk.jpg'
  },
  {
    className: 'Охотник на демонов',
    imgName: 'achievement_boss_illidan.jpg'
  },
];
