import  { useState } from "react";
import { Box } from '@mui/material';
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import { userRegister } from "../../api/getApi";
import ButtonLittle from "../../components/Buttons/buttonLittle/buttonLittle";
import "./style.css";
const RegisterPage = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState(dayjs(new Date()));
  const [phone, setPhone] = useState("");
  const [rol, setRol] = useState("");
  const [rut, setRut] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordrepeat, setPasswordrepeat] = useState("");
  const [showInfo, setShowInfo] = useState(false);
  const [registerSuccessful, setRegisterSuccessful] = useState("");
  const [validPassword, setValidPassword] = useState(true);
  const navigate = useNavigate();

  const registerUser = async () => {
    setShowInfo(false);
    if (!validateFields()) {
      setShowInfo(true);
      return;
    }

    const fullDate = new Date(date);
    let day = fullDate.getDate();
    let month = fullDate.getMonth() + 1;
    let year = fullDate.getFullYear();

    if (day < 10) {
      day = "0" + day;
    }
    if (month < 10) {
      month = "0" + month;
    }
    
    const userData = {
      username: name,
      rut,
      birth: `${day}/${month}/${year}`,
      email: mail,
      phone,
      password,
      role: rol,
      status: "A",
    };

    try {
      const response = await userRegister(userData);
      if (response.statusCode === 201) {
        setRegisterSuccessful(true);
        swal("¡Registro exitoso!", "Ingresa con tus datos", "success");
        setTimeout(() => {
          navigate('/login');
        }, 3000);
      } else {
        setRegisterSuccessful(false);
        swal(
          "¡Error!",
          "Ha ocurrido un error al registrar el usuario",
          "error"
        );
      }
    } catch (error) {
      setRegisterSuccessful(false);
      swal("¡Error!", "Ha ocurrido un error al registrar el usuario", "error");
    }
  };

  const validateFields = () => {
    let valid = false;
    if (
      name !== "" &&
      rut !== "" &&
      date !== "" &&
      mail !== "" &&
      phone !== "" &&
      password !== "" &&
      rol
    ) {
      if (password === passwordrepeat) {
        setValidPassword(true);
        valid = true;
      } else {
        setValidPassword(false);
      } 
    }
    return valid;
  };

  return (
    <div className="register_page">
      <div className="register_inputs">
        <h1 className="register_h1">Regístrate</h1>
        <div className="register_border">
          <form className="register_form">
            {showInfo ? (
              <div style={{ color: "red" }}>
                {validPassword
                  ? "Todos los campos son obligatorios"
                  : "Las contraseñas no coinciden"}
              </div>
            ) : (
              ""
            )}
            <div className="login_input">
              <InputLabel htmlFor="outlined-adornment-password">
                Nombre Completo
              </InputLabel>
              <TextField
                required
                id="filled"
                variant="filled"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div
              className="login_input_datepicker"
              style={{ marginTop: "20px" }}
            >
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Fecha de Nacimiento"
                  value={date}
                  onChange={(newValue) => setDate(newValue)}
                  sx={{ width: "80%" }}
                />
              </LocalizationProvider>

            </div>

            <div className="login_input">
              <InputLabel htmlFor="outlined-adornment-password">
                Telefono
              </InputLabel>
              <TextField
                required
                id="filled"
                variant="filled"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className="login_input_">
              <InputLabel id="demo-select-small-label">
                ¿Eres vendedor?
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                value={rol}
                label="Age"
                onChange={(e) => setRol(e.target.value)}
              >
                <MenuItem value={"seller"}>Si</MenuItem>
                <MenuItem value={"user"}>No</MenuItem>
              </Select>
            </div>

            <div className="login_input">
              <InputLabel htmlFor="outlined-adornment-password">
                Email
              </InputLabel>
              <TextField
                required
                id="filled"
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
                type="password"
                required
                id="filled"
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
                type="password"
                required
                id="filled"
                variant="filled"
                value={passwordrepeat}
                onChange={(e) => setPasswordrepeat(e.target.value)}
              />
            </div>
            <div className="button_register">
              <ButtonLittle onClick={registerUser}> Registrarse</ButtonLittle>
            </div>
            <Box>
            { registerSuccessful === ""
              ?
                ""
              : 
              registerSuccessful ? <div>Registro exitoso.</div> : <div>Ha ocurrido un error al registrar el usuario.</div>
            }
            </Box>
          </form>
          <div className="login_color"></div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
