import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Button } from '@mui/material';

import MenuCategoria from '../components/MenuCategoria';

const buttonStyles = {
    my: 2,
    color: 'var(--font-navbar-color)',
    fontFamily: 'var(--font-title)',
    fontSize: '1.5rem',
    textDecoration: 'none',
    textTransform: 'none',
    '&.active': {
        color: 'var(--font-navbar-color2)',
    },
};

const DesktopButtons = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',  width: '30%' }}>
            <Button
                component={NavLink}
                to="/"
                activeClassName="active"
                sx={buttonStyles}
            >
                Home
            </Button>
            <MenuCategoria />
            <Button
                component={NavLink}
                to="/sobre-nosotros"
                activeClassName="active"
                sx={buttonStyles}
            >
                Sobre Nosotros
            </Button>
        </Box>
    );
};

export default DesktopButtons;




