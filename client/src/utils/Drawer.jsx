import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu";

import DrawerListCategory from "../components/DrawerListCategory";
import UserLogged from "../utils/UserLogged";
import { buttonStyles } from '../utils/ButtonStyleHoverFocus';

const buttonStyles1 = {
    color: 'var(--font-navbar-color3)',
    fontFamily: 'var(--font-title)',
    fontSize: '1.5rem',
};

export default function TemporaryDrawer() {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box
            sx={{
                width: 235,
                borderTop: '30px solid var(--linea-border-color2)',
                backgroundColor: 'var(--background-navba-color)',
            }}
            onClick={toggleDrawer(false)}
        >
            <List sx={{ height: '95.5vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <ListItem sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: '15px' }}>
                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/farmacias-syg.appspot.com/o/iconos%2Flogo-web.png?alt=media&token=f0d96f19-3e07-402a-b7c1-11676ff8bf5a"
                        alt="Logo farmacia s y g"
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="Menu"
                        primaryTypographyProps={{
                            textAlign: 'center',
                            fontSize: 20,
                            fontFamily: 'var(--font-body: "Arvo", serif;)',
                            fontWeight: 'medium',
                            lineHeight: '20px',
                            mt: '10px',
                        }}
                    />
                </ListItem>
                <ListItemButton
                    component={NavLink}
                    to="/"
                    activeClassName="active"
                    sx={{...buttonStyles1, ...buttonStyles}}
                >
                    Home
                </ListItemButton>
                    <DrawerListCategory />
                <ListItemButton
                    component={NavLink}
                    to="/sobre-nosotros"
                    activeClassName="active"
                    sx={{...buttonStyles1, ...buttonStyles}}
                >
                    Sobre Nosotros
                </ListItemButton>
                <ListItemButton
                    component={NavLink}
                    to="/pharmacy-on-duty"
                    activeClassName="active"
                    sx={{...buttonStyles1, ...buttonStyles}}
                >
                    Farmacia de Turno
                </ListItemButton>
                <ListItem sx={{ borderBottom: '30px solid var(--linea-border-color2)' }}>
                    <UserLogged />
                </ListItem>
            </List>
        </Box>
    );

    return (
        <div>
            <IconButton
                onClick={toggleDrawer(true)}
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                sx={{ color: 'var(--font-btn4-color)' }}
            >
                <MenuIcon
                    sx={{
                        color: 'var(--font-btn4-color)',
                        fontSize: '2rem'
                    }}
                />
            </IconButton>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    );
}