import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import {
    Box,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import DrawerListCategory from "./DrawerListCategory";
//Para el renderizado dependiendo del tipo de usuario :)
import AuthContext from "../../context/AuthContext";
import UserLogged from "./UserLogged";
import AdminLogged from "./AdminLogged";
import RegularUserLogged from "./RegularUserLogged";
import SellerUserLogged from "./SellerUserLogged";
import { buttonStyles } from "./ButtonStyleHoverFocus";

const buttonStyles1 = {
    color: "var(--font-navbar-color3)",
    fontFamily: "var(--font-title)",
    fontSize: "1.5rem",
};

export default function TemporaryDrawer() {
    const { user } = useContext(AuthContext);
    const [open, setOpen] = React.useState(false);

    const renderNavbar = () => {
        if (user) {
            switch (user.role) {
                case "admin":
                    return <AdminLogged />;
                case "user":
                    return <RegularUserLogged />;
                case "seller":
                    return <SellerUserLogged />;
                default:
                    return null;
            }
        } else {
            return <UserLogged />;
        }
    };

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    return (
        <div>
            <IconButton
                onClick={() => {
                    toggleDrawer(true)();
                }}
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                sx={{ color: "var(--font-btn4-color)" }}
            >
                <MenuIcon
                    sx={{
                        color: "var(--font-btn4-color)",
                        fontSize: "2rem",
                    }}
                />
            </IconButton>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                <Box
                    sx={{
                        width: 235,
                        borderTop: "30px solid var(--background-footer-color2)",
                        backgroundColor: "var(--background-navba-color)",
                    }}
                    onClick={toggleDrawer(false)}
                >
                    <List
                        sx={{
                            height: "95.5vh",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                        }}
                    >
                        <ListItem
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                mt: "15px",
                            }}
                        >
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/farmacias-syg.appspot.com/o/iconos%2Flogo-web.png?alt=media&token=f0d96f19-3e07-402a-b7c1-11676ff8bf5a"
                                alt="Logo farmacia s y g"
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary="Menu"
                                primaryTypographyProps={{
                                    textAlign: "center",
                                    fontSize: 20,
                                    fontFamily: 'var(--font-body: "Arvo", serif;)',
                                    fontWeight: "medium",
                                    lineHeight: "20px",
                                    mt: "10px",
                                }}
                            />
                        </ListItem>
                        <ListItemButton
                            component={NavLink}
                            to="/"
                            sx={{ ...buttonStyles1, ...buttonStyles }}
                        >
                            Home
                        </ListItemButton>
                        <DrawerListCategory />
                        <ListItemButton
                            component={NavLink}
                            to="/sobre-nosotros"
                            sx={{ ...buttonStyles1, ...buttonStyles }}
                        >
                            Sobre Nosotros
                        </ListItemButton>
                        <ListItemButton
                            component={NavLink}
                            to="/pharmacy-on-duty"
                            sx={{ ...buttonStyles1, ...buttonStyles }}
                        >
                            Farmacia de Turno
                        </ListItemButton>
                        <ListItem
                            sx={{
                                borderBottom: "30px solid var(--background-footer-color2)",
                            }}
                        >
                            {renderNavbar()}
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </div>
    );
}
