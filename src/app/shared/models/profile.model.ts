export class Profile {
    gameEmail: string;     // string   используется для рассылки уведомлений
    googleAvatarURL: string;
    charecterAvatarURL: string;  // string  если пустой используется googleAvatarURL
    mainCharecters: string;
}


export interface FullCharacterModel {
    authUserEmail: string;
    name: string;
    equipmentLevel: string;
    sex: SexOfCharactersModel;
    fraction: FractionOfCharacterModel;
    class: ClassOfCharacterModel;
    race: RaceOfCharacterModel;
    sexId: number;
    fractionId: number;
    classId: number;
    raceId: number;
    docId?: string;
}

export interface ClassOfCharacterModel {
    id: number;
    name: string;
    icon: string;
    parent: number[];
}

export interface RaceOfCharacterModel {
    id: number;
    name: string;
    icon: string;
    fraction: number[];
}
export interface FractionOfCharacterModel {
    id: number;
    name: string;
    icon: string;
    flag: string;
}

export interface SexOfCharactersModel {
    id: number;
    name: string;
    icon: string;
}