import { IPerson } from "../interfaces/IUser";

export const Users:IPerson[] = [
    {
        user:{
            name: 'usuario1',
            user: 'usuario1',
            email: 'usuario1@example.com',
            password: 'senha1@123@123',
            passwordConfirm: 'senha1@123@123',
            dateBirth: '2023-09-02T20:00:00.000Z',
            state: 8,
        },
        musics:{
            music1:{
                title: 'Title user 1',
                band: 'Band user 1',
                gender: 'Gender user 1',
                favorite: true,
            },
            music2:{
                title: 'Title user 1',
                band: 'Band user 1',
                gender: 'Gender user 1',
                favorite: false,
            },
            music3:{
                title: 'Title user 1',
                band: 'Band user 1',
                gender: 'Gender user 1',
                favorite: false,
            },
        }
    },
    {
        user:{
            name: 'usuario2',
            user: 'usuario2',
            email: 'usuario2@example.com',
            password: 'senha2@123@123',
            passwordConfirm: 'senha2@123@123',
            dateBirth: '2023-12-07T20:00:00.000Z',
            state: 2,
        },
        musics:{
            music1:{
                title: 'Title user 2',
                band: 'Band user 2',
                gender: 'Gender user 2',
                favorite: true,
            },
            music2:{
                title: 'Title user 2',
                band: 'Band user 2',
                gender: 'Gender user 2',
                favorite: false,
            },
            music3:{
                title: 'Title user 2',
                band: 'Band user 2',
                gender: 'Gender user 2',
                favorite: true,
            },
        }
    },
    {
        user:{
            name: 'usuario3',
            user: 'usuario3',
            email: 'usuario3@example.com',
            password: 'senha3@123@123',
            passwordConfirm: 'senha3@123@123',
            dateBirth: '2023-11-29T20:00:00.000Z',
            state: 8,
        },
        musics:{
            music1:{
                title: 'Title user 3',
                band: 'Band user 3',
                gender: 'Gender user 3',
                favorite: false,
            },
            music2:{
                title: 'Title user 3',
                band: 'Band user 3',
                gender: 'Gender user 3',
                favorite: true,
            },
            music3:{
                title: 'Title user 3',
                band: 'Band user 3',
                gender: 'Gender user 3',
                favorite: true,
            },
        }
    },
]