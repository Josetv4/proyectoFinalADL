import * as React from "react";
import { AppBar, Box, Toolbar, Container } from "@mui/material";
import Search from "../../utils/UtilsNavbar/Search";
import DesktopButtons from "../../utils/UtilsNavbar/DesktopButtons";
import UserLogged from "../../utils/UtilsNavbar/UserLogged";
import CartButton from "../../utils/UtilsNavbar/CartButton";
import Drawer from "../../utils/UtilsNavbar/Drawer";

function ResponsiveAppBar() {
    return (
        <AppBar
            position="static"
            sx={{
                backgroundColor: "var(--background-navba-color)",
                height: "12.3vh",
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
                        mt: 1,
                    }}
                >
                    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, justifyContent: "space-between", alignItems: "center" }}>
                        <Drawer />
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/farmacias-syg.appspot.com/o/iconos%2Flogo-web.png?alt=media&token=f0d96f19-3e07-402a-b7c1-11676ff8bf5a"
                            alt="Logo farmacia s y g"
                        />
                        <CartButton />
                    </Box>
                    <Box
                        sx={{
                            mt: -1.2,
                            flexGrow: 4,
                            display: { xs: "none", lg: "flex" },
                            justifyContent: "space-between",
                        }}
                    >
                        <Box sx={{ display: "flex", alignItems: "center" }}>
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
                    <Box
                        sx={{
                            flexGrow: 4,
                            m: -2,
                            display: { xs: "none", md: "flex", lg: "none" },
                            justifyContent: "space-between",
                        }}
                    >
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/farmacias-syg.appspot.com/o/iconos%2Flogo-web.png?alt=media&token=f0d96f19-3e07-402a-b7c1-11676ff8bf5a"
                                alt="logo farmacia s y g"
                            />
                        </Box>
                        <DesktopButtons />
                        <UserLogged />
                        <CartButton />
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default ResponsiveAppBar;

