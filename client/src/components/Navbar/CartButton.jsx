import React, { useContext } from 'react';
import {
    IconButton,
    Tooltip,
    Badge,
} from '@mui/material';
import { MdOutlineShoppingCart } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import { AuthContext } from "../../context/AuthContext.jsx";


const UserLogged = () => {
    const { userId } = useContext(AuthContext)
    return (
        <IconButton >
            <Tooltip
                component={NavLink}
                to={userId ? "/shopping-cart": "/login"} 
                title="Agrega productos al Carrito">
                <Badge color="secondary" badgeContent={0} showZero>
                    <MdOutlineShoppingCart style={{ fontSize: 40, color: 'var(--font-btn3-color)' }} />
                </Badge>
            </Tooltip>
        </IconButton>
    );
};

export default UserLogged;