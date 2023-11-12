import { post } from './axios';
import { IUser, IUserLogin } from "../types/User";
export const userLogin = async (payload: IUserLogin) => {
    return post<IUser>('/auth/login', payload);
};
