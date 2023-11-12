import React from 'react'
import { Toolbar, Box, AppBar } from "@mui/material";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {IState} from "../../redux/reducer/reducer";

const Navbar = () => {
    const navigate = useNavigate()
    const token = useSelector<IState, IState["token"]>((state) => state.token)

    if(!token) {
        return null
    }

    return (
        <AppBar component="nav"
                position="sticky"
                sx={{
                    width: 'auto',
                    height: 'auto',
                    backgroundColor: '#fafafa',
                    border: `1px solid #fafafa`,
                    borderRadius: 5,
                    margin: 2,
                }}
        >
            <Toolbar disableGutters>
                        <Box
                            display="flex"
                            justifyContent="center"
                            width="100%"
                        >
                            <Button onClick={() => navigate('/')}>
                                Home
                            </Button>

                            <Button onClick={() => navigate('/invoices')}>
                                Invoices
                            </Button>
                        </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
