import  { useState } from "react";
import { Box, Typography } from "@mui/material";
import ButtonBig from "../Buttons/buttonBig/buttonBig";
import { useAuth } from "../../context/AuthContext";
import { updateUsers } from "../../api/getApi";
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";

const UseForm = () => {
    const { user, logout  } = useAuth();
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

    const styleForms = {
        color: "var(--font-body-color)",
        width: "25rem",
        margin: "5px",
        display: "flex",
        flexDirection: "column",
        gap: '5px',
        fontSize: "1.1rem",
    };

    const inputStyle = {
        backgroundColor: "var(--background-input-color1)",
        borderColor: "solid 5px var(--background-input-color1)",
        borderRadius: "15px",
        cursor: "pointer"
    };

    return (
        <Box>
            <Typography
                sx={{  fontFamily: "var(--font-title)", fontSize: "2.3rem" }}>
                Editar información de perfil
            </Typography>
            <form method="post" action="" style={ styleForms }>
                <label htmlFor="name">Nombre y Apellido</label>
                <input
                    style={ inputStyle }
                    type="text"
                    placeholder="juan perez"
                    value={ name }
                    onChange={(e) => {
                        setName(e.target.value);
                        setNameError(false);
                    }}
                />
                {nameError && <Typography style={{ color: 'red' }}>*El nombre es obligatorio</Typography>}
                <label htmlFor="phone">Número de teléfono</label>
                <input
                    style={ inputStyle }
                    type="text"
                    placeholder="+56987694423"
                    value={phone}
                    onChange={(e) => {
                        setPhone(e.target.value);
                        setPhoneError(false);
                    }}
                />
                {phoneError && <Typography style={{ color: 'red' }}>*El teléfono es obligatorio</Typography>}
                <label htmlFor="Mail">Mail</label>
                <input
                    style={ inputStyle }
                    type="text"
                    placeholder="tumail@tumail.com"
                    value={ mail}
                    onChange={(e) => {
                        setMail(e.target.value);
                        setMailError(false);
                    }}
                />
                {mailError && <Typography style={{ color: 'red' }}>*El correo electrónico no tiene un formato válido</Typography>}
                <label htmlFor="password">Contraseña</label>
                <input
                    style={ inputStyle }
                    type="password"
                    placeholder="*******"
                    value={ password }
                    onChange={(e) => {
                        setPassword(e.target.value);
                        setPasswordError(false);
                        setPasswordsMatch(true);
                    }}
                />
                {passwordError && <Typography style={{ color: 'red' }}>*La contraseña es obligatoria</Typography>}
                <label htmlFor="password__repeat"> Repite la Contraseña</label>
                <input
                    style={ inputStyle }
                    type="password"
                    placeholder="*******"
                    value={ passwordRepeat }
                    onChange={(e) => {
                        setPasswordRepeat(e.target.value);
                        setPasswordsMatch(true);
                    }}
                />
                {!passwordsMatch && <Typography style={{ color: 'red' }}>*Las contraseñas no coinciden</Typography>}
                <Box sx={{ml:'3rem' }}>
                    <ButtonBig onClick={ handleClick }>
                        Enviar
                    </ButtonBig>
                </Box>
            </form>
        </Box>
    );
};

export default UseForm;
