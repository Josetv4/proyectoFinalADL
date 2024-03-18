import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";

import Search from "../utils/Search";
import DesktopButtons from "../utils/DesktopButtons";
import UserLogged from "../utils/UserLogged";
import CartButton from "../utils/CartButton";

const pages = ["Products", "Pricing", "Blog"];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar
            position="static"
            sx={{
                backgroundColor: "var(--background-navba-color)",
                height: "12vh",
                borderBottom: '3px solid #FDA2B440',
            }}
        >
            <Container maxWidth="xl">
                <Toolbar
                    disableGutters
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, justifyContent: "space-between", alignItems: "center", mt: '15px' }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            sx={{ color: 'var(--font-btn4-color)'}}
                        >
                            <MenuIcon sx={{ color: 'var(--font-btn4-color)', fontSize: '2rem' }} />
                        </IconButton>
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/farmacias-syg.appspot.com/o/iconos%2Flogo-web.png?alt=media&token=f0d96f19-3e07-402a-b7c1-11676ff8bf5a"
                            alt="Logo farmacia s y g"
                        />
                        <CartButton />
                    </Box>
                    <Box
                        sx={{
                            flexGrow: 4,
                            display: { xs: "none", md: "flex" },
                            justifyContent: "space-between",
                        }}
                    >
                        <Box sx={{ display: "flex", mr: 1, alignItems: "center" }}>
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/farmacias-syg.appspot.com/o/iconos%2Flogo-web.png?alt=media&token=f0d96f19-3e07-402a-b7c1-11676ff8bf5a"
                                alt="logo farmacia s y g"
                            />
                        </Box>
                        <DesktopButtons />
                        <Search />
                        <UserLogged />
                        <CartButton />
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default ResponsiveAppBar;