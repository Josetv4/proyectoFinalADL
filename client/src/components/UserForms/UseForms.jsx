import { useState } from "react";
import ButtonBig from "../Buttons/buttonBig/buttonBig";
import { Box, Typography } from "@mui/material";

const UseForm = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");
    const [preexistences, setPreexistences] = useState("");

    const handleClick = () => {
        console.log("Botón clickeado");
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
                <label htmlFor="name">Nombre Completo</label>
                <input
                    style={ inputStyle }
                    type="text"
                    placeholder="juan perez"
                    value={ name }
                    onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="phone">Número de teléfono</label>
                <input
                    style={ inputStyle }
                    type="text"
                    placeholder="+56987694423"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <label htmlFor="preexistences">Preexistencias</label>
                <input
                    style={ inputStyle }
                    type="text"
                    placeholder="+56987694423"
                    value={ preexistences }
                    onChange={(e) => setPreexistences(e.target.value)}
                />
                <label htmlFor="Mail">Mail</label>
                <input
                    style={ inputStyle }
                    type="text"
                    placeholder="tumail@tumail.com"
                    value={ mail}
                    onChange={(e) => setMail(e.target.value)}
                />
                <label htmlFor="password">Contraseña</label>
                <input
                    style={ inputStyle }
                    type="password"
                    placeholder="*******"
                    value={ password }
                    onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="password__repeat"> Repite la Contraseña</label>
                <input
                    style={ inputStyle }
                    type="password"
                    placeholder="******"
                    value={ passwordRepeat }
                    onChange={(e) => setPasswordRepeat(e.target.value)}
                />
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
