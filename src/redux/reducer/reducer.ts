import {IInvoice} from "../../types/Invoice";

export interface IState {
    token: string
    invoices: IInvoice[]
}

const initialState = {
    token: '',
    invoices: []
}

type Action = {type: 'LOGIN' | "ADD_INVOICES", payload: IState}

export const reducer = (state: IState = initialState, action: Action) => {
    switch (action.type){
        case "LOGIN": {
            return {...state, token: action.payload.token}
        }
        case "ADD_INVOICES": {
            return {...state, invoices: action.payload.invoices}
        }
        default: {
            return state
        }
    }
}
