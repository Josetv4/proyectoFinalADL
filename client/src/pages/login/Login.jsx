
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "./style.css";
import { Container } from "@mui/material";
import InputComponent from "../../components/InputComponet/InputComponet";
import ButtonBig from "../../components/Buttons/buttonBig/buttonBig";
import ButtonLittle from "../../components/Buttons/buttonLittle/buttonLittle";
import swal from "sweetalert";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import loginData from "../../components/json/login.json";

const LoginPage = () => {
  const [loginmail, setLoginMail] = useState(""); // Estado para el valor del email
  const [loginpassword, setLoginPassword] = useState(""); // Estado para el valor de la contraseña


  const handleRegister = (e) => {
    e.preventDefault();
    navigate("/register"); 
  };


  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
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
      <Container maxWidth="sm">
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
                <form onSubmit={handleLogin}>
                  {loginData.map((item) => (
                    <div className="inputgroup" key={item.id}>
                      <InputComponent
                        value={item.name === "email" ? loginmail : loginpassword}
                        name={item.name}
                        type={item.tipo}
                        placeholder={item.placeholder}
                        onChange={(e) =>
                          item.name === "email"
                            ? setLoginMail(e.target.value)
                            : setLoginPassword(e.target.value)
                        }
                      />
                    </div>
                  ))}
                  <div>
                    <div className="login_button"> 
                    {/* <p>¿Se te olvido la contraseña?</p> */}
                    <ButtonBig type="submit" onClick={() => handleLogin()}>
                      iniciar sesión
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
