import  { useContext } from "react";
import { AppBar, Box, Toolbar, Container } from "@mui/material";
import Search from "./Search";
import DesktopButtons from "./DesktopButtons";
import CartButton from "./CartButton";
import TemporaryDrawer from "./TemporaryDrawer";

//Para el renderizado dependiendo del tipo de usuario :)
import AuthContext from "../../context/AuthContext";
import UserLogged from "./UserLogged";
import AdminLogged from "./AdminLogged";
import RegularUserLogged from "./RegularUserLogged";
import SellerUserLogged from "./SellerUserLogged";

function ResponsiveAppBar() {
    const { user } = useContext(AuthContext);

    const renderNavbar = () => {
        if (user) {
            switch ( user.role ) {
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


    return (
        <AppBar
            position="static"
            sx={{
                backgroundColor: "var(--background-navba-color)",
                height: "5.2rem",
                borderBottom: '4px solid #FDA2B440',
            }}
        >
            <Container maxWidth="xll">
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
                    <TemporaryDrawer/>
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/farmacias-syg.appspot.com/o/iconos%2Flogo-web.png?alt=media&token=f0d96f19-3e07-402a-b7c1-11676ff8bf5a"
                            alt="Logo farmacia s y g"
                        />
                        <CartButton />
                    </Box>
                    <Box
                        sx={{
                            flexGrow: 4,
                            mt: -2,
                            display: { xs: "none", lg:"flex", xl: "flex" },
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
                        {renderNavbar()}
                        <CartButton />
                    </Box>
                    <Box
                        sx={{
                            flexGrow: 2,
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
                        {renderNavbar()}
                        <CartButton />
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default ResponsiveAppBar;

