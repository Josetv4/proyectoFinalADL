import  { useState } from 'react';
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
import { linkStyles2 } from '../Footer/linkStyles2';
import { buttonStyles } from './ButtonStyleHoverFocus';

const MenuRegularUser = () => {
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
                <Tooltip title="Perfil de Usuario">
                    <IconButton
                        id="button-category"
                        aria-controls={open ? "button-category" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onClick={handleClick}
                        component={NavLink}
                        to="/user-profile"
                        sx={{
                            ...linkStyles2,
                            mb: -1,
                        }}
                    >
                        <Avatar sx={{ width: 56, height: 56 }} alt="Remy Sharp" src="https://tn.com.ar/resizer/jT7boEBw5JfiLkgweUbQ5a0evZI=/767x0/smart/filters:format(webp)/cloudfront-us-east-1.images.arcpublishing.com/artear/4RGWEM5MSRCWTBSIBAZGQ2QEHU.jpg" />
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
                        Tus Favoritos
                    </MenuItem>
                    <MenuItem
                        onClick={handleItemClick}
                        sx={buttonStyles}
                    >
                        Tus Compras
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
                    ¡Hola Ben!
                </Typography>
            </Tooltip>
        </Box>
    );
};

export default MenuRegularUser;
