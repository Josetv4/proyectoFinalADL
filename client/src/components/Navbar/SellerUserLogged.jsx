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
import LogoutIcon from '@mui/icons-material/Logout';
import { linkStyles2 } from "../Footer/linkStyles2";
import { buttonStyles } from "../Navbar/ButtonStyleHoverFocus";
import swal from "sweetalert";
import { useAuth } from "../../context/AuthContext";
import logoSeller from '../../assets/imgs/seller.png';

const MenuSellerUser = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const {  user, logout } = useAuth();
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
        <Box sx={{ display: 'flex', alignItems: 'center' }} onClick={(e) => e.stopPropagation()}>
            <Box>
                <Tooltip title="Perfil de Vendedor">
                    <IconButton
                        id="button-category"
                        aria-controls={open ? "button-category" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onClick={handleClick}
                        component={NavLink}
                        to="/seller"
                        sx={{
                            ...linkStyles2,
                            mb: -1,
                        }}
                    >
                        <Avatar sx={{ width: 56, height: 56 }} alt="Remy Sharp" src={logoSeller} />
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
                    <MenuItem
                        component={NavLink}
                        to="/publication"
                        onClick={handleItemClick}
                        sx={buttonStyles}
                    >
                        Publica tus productos
                    </MenuItem>
                    <MenuItem
                        component={NavLink}
                        to="/yours-publication"
                        onClick={handleItemClick}
                        sx={buttonStyles}
                    >
                        Tus publicaciones
                    </MenuItem>
                    <MenuItem
                        onClick={handleLogout}
                        sx={buttonStyles}
                    >
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

export default MenuSellerUser;
