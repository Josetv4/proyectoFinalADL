import React, { useState } from "react";
import {
    Box,
    IconButton,
    Tooltip,
    Avatar,
    Menu,
    MenuItem,
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import { linkStyles2 } from '../../components/Footer/linkStyles2';
import { buttonStyles } from '../../utils/UtilsNavbar/ButtonStyleHoverFocus';

const MenuSellerUser = () => {
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
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
                <Tooltip title="Perfil de Vendedor">
                    <IconButton
                        id="button-category"
                        aria-controls={open ? "button-category" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onClick={handleClick}
                        component={NavLink}
                        to="/seller"
                        activeClassName="active"
                        sx={{
                            ...linkStyles2,
                            mb: -1,
                        }}
                    >
                        <Avatar sx={{ width: 56, height: 56 }} alt="Remy Sharp" src="https://www.evopayments.mx/blog/wp-content/uploads/2023/03/Como-ser-una-mujer-exitosa-en-los-negocio-770x513.jpeg" />
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
                        Tus Publicaciones
                    </MenuItem>
                    <MenuItem
                        onClick={handleItemClick}
                        sx={buttonStyles}
                    >
                        Tus Ventas
                    </MenuItem>
                    <MenuItem
                        onClick={handleItemClick}
                        sx={buttonStyles}
                    >
                        Cerrar sesión
                    </MenuItem>
                </Menu>
            </Box>
        </Box>
    );
};

export default MenuSellerUser;
