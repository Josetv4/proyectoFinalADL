import * as React from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import MenuCategoria from './MenuCategoria';

const pages = [
    { name: 'Home', path: '/' },
    { name: 'Sobre Nosotros', path: '/sobre-nosotros' },
    { name: 'Iniciar Sesión', path: '/login' }
];
const settings = [
    { name: 'Belleza y salud', path: '/catalog1' },
    { name: 'Medicamentos', path: '/catalog2' }
];

function Navbar() {
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const [openCatalog, setOpenCatalog] = React.useState(false);

    const handleDrawerOpen = () => {
        setDrawerOpen(true);
    };

    const handleDrawerClose = () => {
        setDrawerOpen(false);
    };

    const handleCatalogClick = (event) => {
        event.stopPropagation();
        setOpenCatalog(!openCatalog);
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: '#FCFDFF' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <IconButton
                    size="large"
                    aria-label="menu"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleDrawerOpen}
                    color="#3C5257"
                    sx={{ display: { md: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <img src="/src/assets/imgs/logoMenu.png" alt="Logo" style={{ width: '160', height: '80px', marginRight: '20px' }} />
                </Box>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Drawer
                            anchor="left"
                            open={drawerOpen}
                            onClose={handleDrawerClose}
                            sx={{
                                '& .MuiDrawer-paper': {
                                    width: '17rem',
                                },
                            }}
                        >
                            <Box
                                role="presentation"
                                onClick={handleDrawerClose}
                                onKeyDown={handleDrawerClose}
                            >
                                <Box sx={{ p: 2 }}>
                                    <List>
                                        <ListItemButton onClick={handleCatalogClick}>
                                            <ListItemText primary="Catálogo" />
                                            {openCatalog ? <ExpandLess /> : <ExpandMore />}
                                        </ListItemButton>
                                        <Collapse in={openCatalog} timeout="auto" unmountOnExit>
                                            <List component="div" disablePadding>
                                                {settings.map((setting) => (
                                                    <ListItemButton key={setting.name} onClick={handleDrawerClose} component={NavLink} to={setting.path} activeClassName="active">
                                                        <ListItemText primary={setting.name} />
                                                    </ListItemButton>
                                                ))}
                                            </List>
                                        </Collapse>
                                    </List>
                                    {pages.map((page) => (
                                        <ListItemButton key={page.name} onClick={handleDrawerClose} component={NavLink} to={page.path} activeClassName="active">
                                            <ListItemText primary={page.name} />
                                        </ListItemButton>
                                    ))}
                                    <ListItemButton key="Categoria" onClick={handleDrawerClose} component={NavLink}  activeClassName="active">
                                            <ListItemText primary="Categoria" />
                                    </ListItemButton>
                                </Box>
                            </Box>
                        </Drawer>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Button
                                    key={page.name}
                                    component={NavLink}
                                    to={page.path}
                                    activeclassname="active"
                                    sx={{
                                        my: 2,
                                        color: '#3C5257',
                                        display: 'block',
                                        textDecoration: 'none',
                                        '&.active': {
                                            color: 'red',
                                        },
                                    }}
                                >
                                    {page.name}
                                </Button>
                            ))}
                            <MenuCategoria/>
                        </Box>
                    </Toolbar>
                </Container>
            </Box>
        </AppBar>
    );
}

export default Navbar;
