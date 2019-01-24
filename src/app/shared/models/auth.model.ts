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


// export class Vehicle {
//     constructor(
//         public brand: string,
//         public year: number,
//         public code: string,
//         public millage: number,
//         public id?: string
//     ) {}
// }
