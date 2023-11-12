import { get } from './axios';
import {IInvoice} from "../types/Invoice";
import {getRequestHeaders} from "../utils";
export const getInvoices = async (token: string) => {
    return get<IInvoice>('/invoices', undefined, getRequestHeaders(token));
};
