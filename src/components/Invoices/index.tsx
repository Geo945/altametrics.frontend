import React from 'react'
import InvoicesTable from "./Table";
import {useSelector} from "react-redux";
import {IState} from "../../redux/reducer/reducer";

const Invoices = () => {
    const invoices = useSelector<IState, IState["invoices"]>((state) => state.invoices)

    return (
        <InvoicesTable invoices={invoices}/>
    )
}

export default Invoices
