export interface IPerson {
    user:IUser,
    musics:IMusics,
}

interface IUser {
    name:string,
    user?:string,
    email:string,
    password:string,
    passwordConfirm:string,
    dateBirth:string,
    state:number,
}

interface IMusics {
    music1:IMusic,
    music2:IMusic,
    music3:IMusic,
}

interface IMusic {
    title:string,
    band:string,
    gender:string
    favorite:boolean,
}