import { useState } from "react";
import ButtonLittle from "../Buttons/buttonLittle/buttonLittle";
import { Box, Typography } from "@mui/material";

const UseFormSeller = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordrepeat, setPasswordrepeat] = useState("");

    const handleClick = () => {
        console.log("Botón clickeado");
    };

    return (
        <Box>
            <Typography
                sx={{ mt: "10px", fontFamily: "var(--font-title)", fontSize: "25px" }}>
                Editar información de perfil
            </Typography>
            <form className="register_form" action="">
                <div className="register_input">
                    <label htmlFor="name">Nombre Completo</label>
                    <div className="register_input_input">
                        <input
                            type="text"
                            placeholder="juan perez"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                </div>
                <div className="register_input">
                    <label htmlFor="phone">Telefono</label>
                    <div className="register_input_input">
                        <input
                            type="text"
                            placeholder="+56987694423"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                </div>
                <div className="register_input">
                    <label htmlFor="Mail">Mail</label>
                    <div className="register_input_input">
                        <input
                            type="text"
                            placeholder="tumail@tumail.com"
                            value={mail}
                            onChange={(e) => setMail(e.target.value)}
                        />
                    </div>
                </div>
                <div className="register_input">
                    <label htmlFor="password">Contraseña</label>
                    <div className="register_input_input">
                        <input
                            type="password"
                            placeholder="*******"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>
                <div className="register_input">
                    <label htmlFor="password__repeat">Contraseña</label>
                    <div className="register_input_input">
                        <input
                            type="password"
                            placeholder="******"
                            value={passwordrepeat}
                            onChange={(e) => setPasswordrepeat(e.target.value)}
                        />
                    </div>
                </div>
                <ButtonLittle onClick={handleClick}>Enviar</ButtonLittle>
            </form>
        </Box>
    );
};

export default UseFormSeller;
