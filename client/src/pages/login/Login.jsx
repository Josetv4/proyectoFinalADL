import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import { Container, FormControl } from "@mui/material";
import TextField from "@mui/material/TextField";
import ButtonBig from "../../components/Buttons/buttonBig/buttonBig";
import ButtonLittle from "../../components/Buttons/buttonLittle/buttonLittle";
import swal from "sweetalert";


import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import "./style.css";

const LoginPage = () => {
  const [loginmail, setLoginMail] = useState(""); // Estado para el valor del email
  const [loginpassword, setLoginPassword] = useState(""); // Estado para el valor de la contraseña
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleRegister = (e) => {
    e.preventDefault();
    navigate("/register");
  };


  const { login } = useAuth();

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login({ email: loginmail, password: loginpassword });
      swal("¡Has iniciado sesión correctamente!", {
        icon: "success",
      });
      navigate("/");
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      swal(
        "¡Error al iniciar sesión!",
        "Por favor, verifica tus credenciales e intenta nuevamente.",
        "error"
      );
    }
  };

  return (
    <div className="login_page">
      <Container>
        <Box sx={{ flexGrow: 1 }} display="flex">
          <Grid container spacing={2} columns={16}>
            <Grid item xs={8}  >
              <div className="login_img">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/farmacias-syg.appspot.com/o/imagenes%2FGroup%201002.png?alt=media&token=6f465b19-a0c9-4324-8e6b-8d765a9ebb6e"
                  alt="inscribite en farmacias svg y ten los mejores decuentos"
                />
              </div>
            </Grid>
            <Grid item xs={8}>
              <div className="login_enter">
                <div className="login_title">
                  <h1>Ingresa a tu cuenta</h1>
                </div>

                <div className="login_border">
                  <form >
                    <div className="inputgroup" >
                      <div className="login_input">
                    <FormControl sx={{ width: '30ch' }}>
                        
                        <TextField
                       id="filled-basic" label="Email" variant="filled"

                          value={loginmail}
                          onChange={(e) => setLoginMail(e.target.value)}
                        />
                        </FormControl>
                      </div>
                      <div className="login_input">
                        <FormControl sx={{ width: '30ch' }}>
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <FilledInput

                          id="outlined-adornment-password"
                          onChange={(e) => setLoginPassword(e.target.value)}
                          value={loginpassword}
                          type={showPassword ? 'text' : 'password'}
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

                    </div>
                    <div>
                      <div className="login_button">
                        {/* <p>¿Se te olvido la contraseña?</p> */}
                        <ButtonBig type="submit" onClick={handleLogin}>
                          Iniciar sesión
                        </ButtonBig>
                      </div>
                      <div className="register_new">
                        <div className="register_new_text">
                          <p>No tienes cuenta, regístrate aquí</p>
                        </div>
                        <ButtonLittle onClick={handleRegister}>Regístrate</ButtonLittle>
                      </div>

                    </div>
                  </form>
                  <div className="login_color">
                    hola soy el link-dan
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default LoginPage;
