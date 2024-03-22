import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import { buttonStyles } from './ButtonStyleHoverFocus';

import MenuCategoria from '../../components/Navbar/MenuCategoria';

const buttonStyles1 = {
    my: 2,
    color: 'var(--font-navbar-color)',
    fontFamily: 'var(--font-title)',
    fontSize: '115%',
};

const DesktopButtons = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '37%' }}>
            <Button
                component={NavLink}
                to="/"
                activeClassName="active"
                sx={{ ...buttonStyles1, ...buttonStyles }}
            >
                Home
            </Button>
            <MenuCategoria />
            <Button
                component={NavLink}
                to="/sobre-nosotros"
                activeClassName="active"
                sx={{ ...buttonStyles1, ...buttonStyles }}
            >
                Sobre Nosotros
            </Button>
        </Box>
    );
};

export default DesktopButtons;




