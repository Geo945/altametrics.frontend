import React, {useEffect} from 'react'
import {BrowserRouter, Route, Routes, Navigate, useNavigate} from 'react-router-dom';
import LoginPage from "../../pages/Login";
import InvoicesPage from "../../pages/Invoices";
import {useSelector} from "react-redux";
import {IState} from "../../redux/reducer/reducer";
import Navbar from "../Navbar";

const Router = () => {
    const token = useSelector<IState, IState["token"]>((state) => state.token)

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route
                    path="/login"
                    element={<LoginPage />}
                />
                {token &&
                    <Route
                        path="/invoices"
                        element={<InvoicesPage />}
                    />
                }
                <Route
                    path="*"
                    element={
                        <Navigate
                            to={token ? '/' : '/login'}
                            replace
                        />
                    }
                />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
