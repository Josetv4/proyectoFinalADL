import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import AdbIcon from '@mui/icons-material/Adb';
import Search from '../utils/Search';
import UserLogged from '../utils/UserLogged';
import CartButton from '../utils/CartButton';

const pages = ['Products', 'Pricing', 'Blog'];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static"  sx={{ backgroundColor: 'blue', height: '12vh' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
                        <img src="https://firebasestorage.googleapis.com/v0/b/farmacias-syg.appspot.com/o/iconos%2Flogo-web.png?alt=media&token=f0d96f19-3e07-402a-b7c1-11676ff8bf5a" alt="logo farmacia s y g" />
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
                        <img src="https://firebasestorage.googleapis.com/v0/b/farmacias-syg.appspot.com/o/iconos%2Flogo-web.png?alt=media&token=f0d96f19-3e07-402a-b7c1-11676ff8bf5a" alt="Logo farmacia s y g" />
                    </Box>
                    {/* Version web botones */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            <Button>
                               {/* Botonones escritorio */}
                            </Button>
                        <Search />
                        {/* este seria para el de inicio de sesión en version web */}
                        <UserLogged />
                    </Box>
                            {/* este seria para el Carrito para la version web */}
                    <Box sx={{ flexGrow: 0 }}>
                        <CartButton />
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;
