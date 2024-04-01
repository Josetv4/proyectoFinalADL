import React from 'react';
import {
    IconButton,
    Tooltip,
    Badge,
} from '@mui/material';
import { MdOutlineShoppingCart } from "react-icons/md";
import { NavLink } from 'react-router-dom';

const UserLogged = () => {
    return (
        <IconButton >
            <Tooltip
                component={NavLink}
                to="/shopping-cart" title="Agrega productos al Carrito">
                <Badge color="secondary" badgeContent={0} showZero>
                    <MdOutlineShoppingCart style={{ fontSize: 40, color: 'var(--font-btn3-color)' }} />
                </Badge>
            </Tooltip>
        </IconButton>
    );
};

export default UserLogged;