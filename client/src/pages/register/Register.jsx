import { useState } from "react";
import "./style.css";
import ButtonLittle from "../../components/Buttons/buttonLittle/buttonLittle";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [phone, setPhone] = useState("");
  const [rol, setRol] = useState("");
  const [rut, setRut] = useState("");
  const [mail, setMail] = useState("");

  const [password, setPassword] = useState("");
  const [passwordrepeat, setPasswordrepeat] = useState("");

 

  return (
    <div className="register_page">
      <div className="register_inputs">
        <h1>Registrate</h1>
        <div className="login_border">
          <form action="">
          <div className="login_input">
            <InputLabel htmlFor="outlined-adornment-password">
              Nombre Completo
            </InputLabel>
            <TextField
              required
              id="filled"
              defaultValue="correo@mail.com"
              variant="filled"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="login_input">
            <InputLabel htmlFor="outlined-adornment-password">
              Fecha de nacimiento
            </InputLabel>
            <TextField
              required
              id="filled"
              defaultValue="correo@mail.com"
              variant="filled"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div className="login_input">
            <InputLabel htmlFor="outlined-adornment-password">
              Telefono
            </InputLabel>
            <TextField
              required
              id="filled"
              defaultValue="correo@mail.com"
              variant="filled"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="login_input">
            <InputLabel id="demo-select-small-label">
              ¿Eres vendedor?
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={rol}
              label="Age"
              onChange={(e) => setRol(e.target.value)}
            >
           
              <MenuItem value={10}>si</MenuItem>
              <MenuItem value={20}>no</MenuItem>
           
            </Select>
          </div>

          <div className="login_input">
            <InputLabel htmlFor="outlined-adornment-password">Email</InputLabel>
            <TextField
              required
              id="filled"
              defaultValue="correo@mail.com"
              variant="filled"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />
          </div>

          <div className="login_input">
            <InputLabel htmlFor="outlined-adornment-password">Rut</InputLabel>
            <TextField
              required
              id="filled"
              defaultValue="correo@mail.com"
              variant="filled"
              value={rut}
              onChange={(e) => setRut(e.target.value)}
            />
          </div>
          <div className="login_input">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <TextField
              required
              id="filled"
              defaultValue="correo@mail.com"
              variant="filled"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="login_input">
            <InputLabel htmlFor="outlined-adornment-password">
              Repetir Password
            </InputLabel>
            <TextField
              required
              id="filled"
              defaultValue="correo@mail.com"
              variant="filled"
              value={passwordrepeat}
              onChange={(e) => setPasswordrepeat(e.target.value)}
            />
          </div>
          <div className="button_register">     
    <ButtonLittle> Registrarse</ButtonLittle>
    </div>
          </form>
          <div className="login_color">
                  hola soy el link-dan
                </div>
        </div>
     
      </div>
      

    </div>
  );
};

export default RegisterPage;
