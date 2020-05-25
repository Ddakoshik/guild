export interface Blog {
    title: string;
    user: string;
    content: string;
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
