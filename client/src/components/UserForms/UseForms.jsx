import { useState } from "react";
import { Box, Typography, FormControl, TextField, FilledInput, InputAdornment, IconButton, InputLabel } from "@mui/material";
import ButtonBig from "../Buttons/buttonBig/buttonBig";
import { useAuth } from "../../context/AuthContext";
import { updateUsers } from "../../api/getApi";
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import "./style.css";

const UseForm = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");
    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const [nameError, setNameError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);
    const [mailError, setMailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [showPassword, setShowPassword] = useState(false)

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleClick = async () => {
        let isValid = true;

        if (!name.trim()) {
            setNameError(true);
            isValid = false;
        }

        if (!phone.trim()) {
            setPhoneError(true);
            isValid = false;
        }

        if (!mail.trim() || !validateEmail(mail)) {
            setMailError(true);
            isValid = false;
        }

        if (!password.trim()) {
            setPasswordError(true);
            isValid = false;
        }

        if (!passwordRepeat.trim() || password !== passwordRepeat) {
            setPasswordsMatch(false);
            isValid = false;
        }

        if (!isValid) {
            return;
        }

        try {
            const userData = {
                user_id: user.user_id,
                username: name,
                phone,
                email: mail,
                password,
                rut: user.rut,
                birth: user.birth_date,
                role: user.role,
                status: user.status
            };

            const response = await updateUsers(user.user_id, userData);
            console.log("Respuesta del servidor:", response);

            swal({
                title: "¿Quieres continuar?",
                text: "Tus datos serán actualizados",
                icon: "warning",
                buttons: ["Cancelar", "Sí"],
            }).then((willContinue) => {
                if (willContinue) {
                    setName("");
                    setPhone("");
                    setMail("");
                    setPassword("");
                    setPasswordRepeat("");
                    swal("¡Tus datos han sido actualizados correctamente!", {
                        icon: "success",
                    });
                    logout();
                    navigate("/login");
                }
            });
        } catch (error) {
            console.error("Error al actualizar usuario:", error);
            swal("¡Error!", "Hubo un problema al actualizar los datos del usuario", "error");
        }
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };


        return (
            <Box sx={{ display:"flex" , flexDirection:"column"}}>
                <Typography sx={{ fontFamily: "var(--font-title)", fontSize: "2.3rem" }}>
                    Editar información de perfil
                </Typography>
    
                <form method="post" action="" className="form_perfil">
                    <FormControl sx={{ width: "30ch" }}>
                        <TextField
                            required
                            id="filled-basic"
                            label="Nombre y Apellido"
                            variant="filled"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                                setNameError(false);
                            }}
                        />
                    </FormControl>
                    {nameError && <Typography style={{ color: 'red' }}>*El nombre es obligatorio</Typography>}
    
                    <FormControl sx={{ width: "30ch" }}>
                        <TextField
                            required
                            id="filled-basic"
                            label="Teléfono"
                            variant="filled"
                            value={phone}
                            onChange={(e) => {
                                setPhone(e.target.value);
                                setPhoneError(false);
                            }}
                        />
                    </FormControl>
                    {phoneError && <Typography style={{ color: 'red' }}>*El teléfono es obligatorio</Typography>}
    
                    <FormControl sx={{ width: "30ch" }}>
                        <TextField
                            required
                            id="filled-basic"
                            label="Correo electrónico"
                            variant="filled"
                            value={mail}
                            onChange={(e) => {
                                setMail(e.target.value);
                                setMailError(false);
                            }}
                        />
                    </FormControl>
                    {mailError && <Typography style={{ color: 'red' }}>*El correo electrónico no tiene un formato válido</Typography>}
    
                    <FormControl sx={{ width: "30ch" }}>
                        <InputLabel htmlFor="outlined-adornment-password">
                            Contraseña
                        </InputLabel>
                        <FilledInput
                            id="filled-basic"
                            variant="filled"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                                setPasswordError(false);
                                setPasswordsMatch(true);
                            }}
                            type={showPassword ? "text" : "password"}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    {passwordError && <Typography style={{ color: 'red' }}>*La contraseña es obligatoria</Typography>}
    
                
                    <FormControl sx={{ width: "30ch" }}>
                        <InputLabel htmlFor="outlined-adornment-password">
                            Repite la Contraseña
                        </InputLabel>
                        <FilledInput
                            id="filled-basic"
                            variant="filled"
                            value={passwordRepeat}
                            onChange={(e) => {
                                setPasswordRepeat(e.target.value);
                                setPasswordsMatch(true);
                            }}
                            type={showPassword ? "text" : "password"}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    {!passwordsMatch && <Typography style={{ color: 'red' }}>*Las contraseñas no coinciden</Typography>}
                    <Box >
                        <ButtonBig onClick={handleClick}>
                            Enviar
                        </ButtonBig>
                    </Box>
                </form>
            </Box>
        );
};

export default UseForm;
