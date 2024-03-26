import { NavLink } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import { buttonStyles } from './ButtonStyleHoverFocus';

import MenuCategory from './MenuCategory';

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
                sx={{ ...buttonStyles1, ...buttonStyles }}
            >
                Home
            </Button>
            <MenuCategory />
            <Button
                component={NavLink}
                to="/sobre-nosotros"
                sx={{ ...buttonStyles1, ...buttonStyles }}
            >
                Sobre Nosotros
            </Button>
        </Box>
    );
};

export default DesktopButtons;




