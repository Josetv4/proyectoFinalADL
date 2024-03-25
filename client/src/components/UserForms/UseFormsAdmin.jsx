import { useState } from "react";
import ButtonBig from "../Buttons/buttonBig/buttonBig";
import { Box, Typography } from "@mui/material";

const UseFormAdmin = () => {
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
        width: "400px",
        margin: "10px",
        display: "flex",
        flexDirection: "column",
        gap: '5px',
    };

    const inputStyle = {
        backgroundColor: "var(--background-input-color1)",
    };

    return (
        <Box>
            <Typography
                sx={{ mt: "10px", fontFamily: "var(--font-title)", fontSize: "25px" }}>
                Editar información de perfil
            </Typography>
            <form method="post" action="" style={styleForms}>
                <label htmlFor="name">Nombre Completo</label>
                <input
                    style={inputStyle}
                    type="text"
                    placeholder="juan perez"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="phone">Teléfono</label>
                <input
                    style={inputStyle}
                    type="text"
                    placeholder="+56987694423"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <label htmlFor="preexistences">Teléfono</label>
                <input
                    style={inputStyle}
                    type="text"
                    placeholder="+56987694423"
                    value={preexistences}
                    onChange={(e) => setPreexistences(e.target.value)}
                />
                <label htmlFor="Mail">Mail</label>
                <input
                    style={inputStyle}
                    type="text"
                    placeholder="tumail@tumail.com"
                    value={mail}
                    onChange={(e) => setMail(e.target.value)}
                />
                <label htmlFor="password">Contraseña</label>
                <input
                    style={inputStyle}
                    type="password"
                    placeholder="*******"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="password__repeat">Contraseña</label>
                <input
                    style={inputStyle}
                    type="password"
                    placeholder="******"
                    value={passwordRepeat}
                    onChange={(e) => setPasswordRepeat(e.target.value)}
                />
                <ButtonBig onClick={handleClick}>Enviar</ButtonBig>
            </form>
        </Box>
    );
};

export default UseFormAdmin;
