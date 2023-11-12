import {IInvoice} from "./Invoice";
import {IBill} from "./Bill";

export interface IUser {
    id: string
    email: string
    password: string
    name: string
    invoices: IInvoice[]
    bills: IBill[]
}

export interface IUserLogin {
    email: string
    password: string
}
