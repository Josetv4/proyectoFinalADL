import { useAuth } from "../../context/AuthContext";
import { useState } from "react";
import { Box, IconButton, Tooltip, Avatar, Menu, MenuItem, Typography } from "@mui/material";
import { useNavigate, NavLink } from "react-router-dom";
import { linkStyles2 } from "../Footer/linkStyles2";
import { buttonStyles } from "../Navbar/ButtonStyleHoverFocus";
import swal from "sweetalert";
import gravatar from 'gravatar';
import LogoutIcon from '@mui/icons-material/Logout';

const MenuRegularUser = () => {
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
                window.location.reload();
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
                <Tooltip title="Perfil de Usuario">
                    <IconButton
                        id="button-category"
                        aria-controls={open ? "button-category" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onClick={handleClick}
                        component={NavLink}
                        to="/user-profile"
                        sx={{
                            ...linkStyles2,
                            mb: -1,
                        }}
                    >
                            <Avatar
                                sx={{ width: 56, height: 56 }}
                                alt="Avatar"
                                src={gravatar.url(user.email, { s: '200', d: 'identicon', r: 'pg' })}
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
                    <MenuItem MenuItem
                        component={NavLink}
                        to="/list-favorites"
                        onClick={handleItemClick}
                        sx={buttonStyles}
                    >
                        Tus Favoritos
                    </MenuItem>
                    <MenuItem
                        component={NavLink}
                        to="/last-shopping"
                        onClick={handleItemClick}
                        sx={buttonStyles}
                    >
                        Tus Compras
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

export default MenuRegularUser;
