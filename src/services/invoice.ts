import { get } from './axios';
import {IInvoice} from "../types/Invoice";
export const getInvoices = async () => {
    return get<IInvoice>('/invoices');
};
