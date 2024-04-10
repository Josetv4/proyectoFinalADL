import { useState } from "react";
import "./style.css";
import ButtonLittle from "../../components/Buttons/buttonLittle/buttonLittle";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Alert from '@mui/material/Alert';
import { Box } from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { userRegister } from "../../api/getApi";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState(dayjs(new Date()));
  const [phone, setPhone] = useState("");
  const [rol, setRol] = useState("");
  const [rut, setRut] = useState("");
  const [mail, setMail] = useState("");

  const [password, setPassword] = useState("");
  const [passwordrepeat, setPasswordrepeat] = useState("");
  const [showInfo, setShowInfo] = useState(false)
  const [registerSuccefull, setRegisterSuccefull] = useState("");
  const [validPassword, setValidPassword] = useState(true);

  const registerUser = async () => {
    setShowInfo(false);
    if (!validateFields()){
      setShowInfo(true);
      return;
    };
    const fullDate = new Date(date);
    let day = fullDate.getDate();
    let month = fullDate.getMonth()+ 1;
    let year = fullDate.getFullYear();

    if (day < 10) {
      day = '0' + day;
    }
    if (month < 10) {
      month = '0' + month;
    }
    const userData = {      
      username: name,
      rut,
      birth: `${day}/${month}/${year}`,
      email: mail,
      phone,
      password,
      role: rol,
      status: 'A'
    }
    try {
      const response = await userRegister(userData);
      console.log("response front: " , response);
      if (response.statusCode === 201) {
        setRegisterSuccefull(true);
      }else{
        
        setRegisterSuccefull(false);
      }            
    } catch (error) {
      setRegisterSuccefull(false);
    }
  }

  const validateFields = () => {
    let valid = false;
    if (name != "" && rut != "" && date != "" && mail != "" && phone != "" && password != "" && rol) {
      if (password === passwordrepeat) {
        setValidPassword(true);
        valid = true;
      }else{
        setValidPassword(false);        
      }
    }
    return valid;
  }


  return (
    <div className="register_page">
      <div className="register_inputs">
        <h1>Registrate</h1>
        <div className="login_border">
          <form action="">
            {
               showInfo ? <Alert severity="error">{validPassword ? "Todos los campos son obligatorios" : "Las contraseñas no coinciden"}</Alert> : ""
            }
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

            <div className="login_input" style={{marginTop:"20px"}}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>             
                <DatePicker
                  label="Fecha de Nacimiento"
                  value={date} 
                  onChange={(newValue) => setDate(newValue)}
                  sx={{width:"80%"}}
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

                <MenuItem value={"seller"}>Si</MenuItem>
                <MenuItem value={"user"}>No</MenuItem>

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
              <ButtonLittle onClick={registerUser}> Registrarse</ButtonLittle>
            </div>
            <Box>
            { registerSuccefull === ""
              ?
                ""
              : 
              registerSuccefull ? <Alert severity="success">Registro exitoso.</Alert> : <Alert severity="error">Ha ocurrido un error al registrar el usuario.</Alert>
            }
            </Box>


          </form>
          <div className="login_color">
          </div>
        </div>

      </div>


    </div>
  );
};

export default RegisterPage;
