import * as React from 'react';
import { RxAvatar } from "react-icons/rx";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { NavLink } from 'react-router-dom';

export default function UserLogged() {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1px' } }>
                <Button
                    component={NavLink}
                    to="/login"
                    sx={{
                        color: 'var(--font-navbar-color)',
                        fontFamily: 'var(--font-title)',
                        fontSize: '22px',
                        textTransform: 'none',
                        textDecoration: 'none',
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
                            fontFamily: 'var(--body)',
                            fontSize: '14px',
                            textDecoration: 'none',
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
}

