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
    imgName: ''
  },
  {
    id: 2,
    shortName: 'ЦН',
    reidDifficult: ['об', 'гер', 'миф'],
    fullname: 'Цитадель Ночи'
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
    fullname: 'Изумрудный Кошмар'
  },
  {
    id: 5,
    shortName: 'ИД',
    reidDifficult: ['об', 'гер', 'миф'],
    fullname: 'Испытание доблести'
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
