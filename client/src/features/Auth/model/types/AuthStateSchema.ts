import { IUser } from './IUser';

export interface AuthStateSchema {
    isAuth: boolean
    user:IUser|undefined
}
