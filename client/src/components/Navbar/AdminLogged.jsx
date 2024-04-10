import { useAuth } from "../../context/AuthContext";
import { useState } from "react";
import { Box, IconButton, Tooltip, Avatar, Menu, MenuItem, Typography } from "@mui/material";
import { useNavigate, NavLink, Link } from "react-router-dom";
import { linkStyles2 } from "../Footer/linkStyles2";
import { buttonStyles } from "../Navbar/ButtonStyleHoverFocus";
import swal from "sweetalert";
import logoAdmin from '../../assets/imgs/logoAdmin.png';
import LogoutIcon from '@mui/icons-material/Logout';

const MenuAdminLogged = () => {
    const { user, logout } = useAuth();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
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
        <Box sx={{ display: "flex", alignItems: "center" }} onClick={(e) => e.stopPropagation()}>
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
                            sx={{ width: 73, height: 73, mt: "-4px" }}
                            alt="Logo farmacia s y g"
                            src={logoAdmin}
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
                    <MenuItem component={Link} to="/accept-publication" sx={buttonStyles}>
                        Publicaciones
                    </MenuItem>
                    <MenuItem component={Link} to="/list-products" sx={buttonStyles}>
                        Productos
                    </MenuItem>
                    <MenuItem component={Link} to="/list-users" sx={buttonStyles}>
                        Usuarios
                    </MenuItem>
                    <MenuItem onClick={handleLogout} sx={buttonStyles}>
                        Cerrar sesión
                        <LogoutIcon sx={{ml: '1rem'}} />
                    </MenuItem>
                </Menu>
            </Box>
            <Tooltip title="Bienvenido de Vuelta">
                {user && (
                    <Typography
                        sx={{
                            color: "var(--font-body-color)",
                            fontFamily: "var(--font-title)",
                            fontSize: "18px",
                        }}
                    >
                        ¡Hola {user.username}!
                    </Typography>
                )}
            </Tooltip>
        </Box>
    );
};

export default MenuAdminLogged;
