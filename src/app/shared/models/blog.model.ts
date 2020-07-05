export interface Blog {
    title: string;
    user: string;
    content: string;
    url: string;
    body: string;
    docId?: string;
}

export interface ImgFile {
    fileUrl: string;
    name: string;
    timeCreated: Date;
}

export interface User {
    authUserEmail: string;
    userAvatarURL: string;
    userNickname: string;
    userEmail: string;
    rolePermissions: string[];
    docId?: string;
}

export interface Character {
    authUserEmail: string;
    name: string;
    equipmentLevel: string;
    sexId: number;
    fractionId: number;
    classId: number;
    raceId: number;
    specs: SpecCollection;
    role?: string;
    docId?: string;
}

export interface SpecCollection {
    active: string[];
    deprecated: string[];
}
