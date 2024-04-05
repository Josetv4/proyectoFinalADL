import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";

import {
    Box,
    IconButton,
    Tooltip,
    Avatar,
    Menu,
    MenuItem,
    Typography,
} from "@mui/material";
import { linkStyles2 } from "../Footer/linkStyles2";
import { buttonStyles } from "../Navbar/ButtonStyleHoverFocus";
import swal from "sweetalert";
import { useAuth } from "../../context/AuthContext";

const MenuAdminLogged = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleItemClick = (event) => {
        event.stopPropagation();
    };

    const handleLogout = async () => {
        try {
            const confirmLogout = await swal({
                title: "¿Estás seguro?",
                text: "¿Quieres cerrar sesión?",
                icon: "warning",
                buttons: ["Cancelar", "Sí"],
                dangerMode: true,
            });
            if (confirmLogout) {
                await logout();
                navigate("/");
            }
        } catch (error) {
            console.error("Error al cerrar sesión:", error);
        }
    };

    return (
        <Box
            sx={{ display: "flex", alignItems: "center" }}
            onClick={(e) => e.stopPropagation()}
        >
            <Box>
                <Tooltip title="Perfil de Administrador">
                    <IconButton
                        id="button-category"
                        aria-controls={open ? "button-category" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onClick={handleClick}
                        component={NavLink}
                        to="/admin"
                        activeClassName="active"
                        sx={{
                            ...linkStyles2,
                            mb: -1,
                        }}
                    >
                        <Avatar
                            sx={{ width: 56, height: 56 }}
                            alt="Remy Sharp"
                            src="https://www.shutterstock.com/shutterstock/photos/1865153395/display_1500/stock-photo-portrait-of-young-smiling-woman-looking-at-camera-with-crossed-arms-happy-girl-standing-in-1865153395.jpg"
                        />
                    </IconButton>
                </Tooltip>
                <Menu
                    id="menu-categoria"
                    aria-labelledby="menu-categoria"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                    }}
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                    }}
                >
                    <MenuItem onClick={handleItemClick} sx={buttonStyles}>
                        Productos
                    </MenuItem>
                    <MenuItem onClick={handleItemClick} sx={buttonStyles}>
                        Publicaciones
                    </MenuItem>
                    <MenuItem onClick={handleItemClick} sx={buttonStyles}>
                        Usuarios
                    </MenuItem>
                    <MenuItem onClick={handleLogout} sx={buttonStyles}>
                        Cerrar sesión
                    </MenuItem>
                </Menu>
            </Box>
            <Tooltip title="Bienvenido de Vuelta">
                <Typography
                    sx={{
                        color: "var(--font-body-color)",
                        fontFamily: "var(--font-title)",
                        fontSize: "18px",
                    }}
                >
                    ¡Hola Oriana!
                </Typography>
            </Tooltip>
        </Box>
    );
};

export default MenuAdminLogged;
