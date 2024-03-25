import React, { useState } from "react";
import {
    Box,
    IconButton,
    Tooltip,
    Avatar,
    Menu,
    MenuItem,
    Typography
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import { linkStyles2 } from '../../components/Footer/linkStyles2';
import { buttonStyles } from '../../utils/UtilsNavbar/ButtonStyleHoverFocus';

const MenuAdminLogged = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleItemClick = (event) => {
        event.stopPropagation();
    };

    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }} onClick={(e) => e.stopPropagation()}>
            <Box>
                <Tooltip title="Perfil de Administrador">
                    <IconButton
                        id="button-category"
                        aria-controls={open ? "button-category" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onClick={handleClick}
                        component={NavLink}
                        to="/admin"
                        activeClassName="active"
                        sx={{
                            ...linkStyles2,
                            mb: -1,
                        }}
                    >
                        <Avatar sx={{ width: 56, height: 56 }} alt="Remy Sharp" src="https://www.shutterstock.com/shutterstock/photos/1865153395/display_1500/stock-photo-portrait-of-young-smiling-woman-looking-at-camera-with-crossed-arms-happy-girl-standing-in-1865153395.jpg" />
                    </IconButton>
                </Tooltip>
                <Menu
                    id="menu-categoria"
                    aria-labelledby="menu-categoria"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                    }}
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                    }}
                >
                    <MenuItem
                        onClick={handleItemClick}
                        sx={buttonStyles}
                    >
                        Publicaciones
                    </MenuItem>
                    <MenuItem
                        onClick={handleItemClick}
                        sx={buttonStyles}
                    >
                        Ventas
                    </MenuItem>
                    <MenuItem
                        onClick={handleItemClick}
                        sx={buttonStyles}
                    >
                        Cerrar sesión
                    </MenuItem>
                </Menu>
            </Box>
            <Tooltip title="Bienvenido de Vuelta">
                <Typography
                    sx={{
                        color: 'var(--font-body-color)',
                        fontFamily: 'var(--font-title)',
                        fontSize: '18px',
                    }}
                >
                    ¡Hola Oriana!
                </Typography>
            </Tooltip>
        </Box>
    );
};

export default MenuAdminLogged;
