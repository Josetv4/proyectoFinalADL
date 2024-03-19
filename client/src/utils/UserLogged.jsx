import React from 'react';
import { RxAvatar } from 'react-icons/rx';
import {
    Box,
    Typography,
    Button,
    Tooltip,
} from '@mui/material';

import { NavLink } from 'react-router-dom';

const UserLogged = () => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
                <Button
                    component={NavLink}
                    to="/login"
                    activeClassName="active"
                    sx={{
                        color: 'var(--font-navbar-color)',
                        fontFamily: 'var(--font-title)',
                        fontSize: '22px',
                        textTransform: 'none',
                        textDecoration: 'none',
                        mb: -1,
                        mt: -1,
                        '&.active': {
                            color: 'var(--font-navbar-color2)',
                        },
                    }}
                >
                    Iniciar sesión
                </Button>
                <Tooltip title="Regístrate aquí">
                    <Typography
                        component={NavLink}
                        to="/register"
                        activeClassName="active"
                        sx={{
                            color: 'var(--font-btn3-color)',
                            fontFamily: 'var(--body)',
                            fontSize: '14px',
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
            <Box ml={1}>
                <Typography sx={{ color: 'var(--font-btn3-color)' }}>
                    <RxAvatar size={50} />
                </Typography>
            </Box>
        </Box>
    );
};

export default UserLogged;