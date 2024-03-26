import { RxAvatar } from 'react-icons/rx';
import {
    Box,
    Typography,
    Button,
    Tooltip,
} from '@mui/material';

import { NavLink } from 'react-router-dom';
import { buttonStyles } from './ButtonStyleHoverFocus';

const UserLogged = () => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
                <Button
                    component={NavLink}
                    to="/login"
                    sx={{
                        ...buttonStyles,
                        color: 'var(--font-navbar-color)',
                        fontFamily: 'var(--font-title)',
                        fontSize: '115%',
                        mb: -1,
                        mt: -1,
                    }}
                >
                    Iniciar sesión
                </Button>
                <Tooltip title="Regístrate aquí">
                    <Typography
                        component={NavLink}
                        to="/register"
                        sx={{
                            color: 'var(--font-btn3-color)',
                            fontFamily: 'var(--font-title)',
                            fontSize: '17px',
                            textDecoration: 'none',
                            '&.active': {
                                color: 'var(--font-link-color)',
                            },
                        }}
                    >
                        ¿No tienes cuenta?
                    </Typography>
                </Tooltip>
            </Box>
            <Box >
                <Typography sx={{ color: 'var(--font-btn3-color)' }}>
                    <RxAvatar size={45} />
                </Typography>
            </Box>
        </Box>
    );
};

export default UserLogged;