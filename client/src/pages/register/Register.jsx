import { useState } from "react";
import { Box, FormControl } from "@mui/material";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { userRegister } from "../../api/getApi";
import ButtonLittle from "../../components/Buttons/buttonLittle/buttonLittle";

import FilledInput from "@mui/material/FilledInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
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
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
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
          navigate("/login");
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
              <FormControl sx={{ width: "30ch" }}>
                <TextField
                  required
                  id="filled-basic"
                  label="Nombre completo"
                  variant="filled"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </FormControl>
            </div>

            <div
              className="login_input_datepicker"
              style={{ marginTop: "20px" }}
            >
              <FormControl sx={{ width: "30ch" }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                  
                    label="Fecha de Nacimiento"
                    value={date}
                    onChange={(newValue) => setDate(newValue)}
                    sx={{ width: "30ch" }}
                  />
                </LocalizationProvider>
              </FormControl>
            </div>

            <div className="login_input">
              <FormControl sx={{ width: "30ch" }}>
                <InputLabel htmlFor="outlined-adornment-password"></InputLabel>
                <TextField
                  required
                  id="filled-basic"
                  label="Telefono"
                  variant="filled"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </FormControl>
            </div>

            <div className="login_input_">
              <FormControl sx={{ width: "30ch" }}>
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
              </FormControl>
            </div>

            <div className="login_input">
              <FormControl sx={{ width: "30ch" }}>
                <TextField
                  required
                  id="filled-basic"
                  label="email"
                  variant="filled"
                  value={mail}
                  onChange={(e) => setMail(e.target.value)}
                />
              </FormControl>
            </div>

            <div className="login_input">
              <FormControl sx={{ width: "30ch" }}>
                <TextField
                  required
                  id="filled-basic"
                  label="rut"
                  variant="filled"
                  value={rut}
                  onChange={(e) => setRut(e.target.value)}
                />
              </FormControl>
            </div>
            <div className="login_input">
              <FormControl sx={{ width: "30ch" }}>
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <FilledInput
                  id="filled-basic"
                  variant="filled"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
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
                  label="Password"
                />
              </FormControl>
            </div>

            <div className="login_input">
              <FormControl sx={{ width: "30ch" }}>
                <InputLabel htmlFor="outlined-adornment-password">
                  {" "}
                  Repite tu Password
                </InputLabel>
                <FilledInput
                id="filled-basic"
                variant="filled"
                  onChange={(e) => setPasswordrepeat(e.target.value)}
                  value={passwordrepeat}
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
                  label="Password"
                />
              </FormControl>
            </div>
            <div className="button_register">
              <ButtonLittle onClick={registerUser}> Registrarse</ButtonLittle>
            </div>
            <Box>
              {registerSuccessful === "" ? (
                ""
              ) : registerSuccessful ? (
                <div>Registro exitoso.</div>
              ) : (
                <div>Ha ocurrido un error al registrar el usuario.</div>
              )}
            </Box>
          </form>
          <div className="login_color"></div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
