import React from 'react';
import {
    IconButton,
    Tooltip,
    Badge,
} from '@mui/material';
import { MdOutlineShoppingCart } from "react-icons/md";

const UserLogged = () => {
    return (
        <IconButton >
            <Tooltip title="Agrega productos al Carrito">
                <Badge color="secondary" badgeContent={0} showZero>
                    <MdOutlineShoppingCart style={{ fontSize: 40, color: 'var(--font-btn3-color)' }} />
                </Badge>
            </Tooltip>
        </IconButton>
    );
};

export default UserLogged;