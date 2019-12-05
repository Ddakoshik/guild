export class Auth {
    title: string;
    user: string;
    content: string;


    constructor(data?: Partial<Auth>) {
        if (data) {
            Object.assign(this, data);
        }
    }

}

export interface GoogleAuthInfo {
    uid: string;
    displayName: string;
    photoURL: string;
    email: string;
}
