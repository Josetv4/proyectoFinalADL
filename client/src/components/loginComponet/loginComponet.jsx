import { useNavigate } from "react-router-dom";
import ButtonBig from "../Buttons/buttonBig/buttonBig";
import ButtonLittle from "../Buttons/buttonLittle/buttonLittle";
import swal from "sweetalert";
import "./style.css";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";

const LoginComponent = () => {
  const { login } = useAuth();
  const [loginmail, setLoginmail] = useState("");
  const [loginpassword, setLoginpassword] = useState("");
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
    <div className="login">
      <form action="" className="login_form">
        <div className="login_input">
          <div>
            <label htmlFor="ingresa tu mail ">Ingresa tu mail</label>
          </div>
          <div className="login_input_input">
            <input
              type="text"
              placeholder="mail@tumail.com"
              value={loginmail}
              onChange={(e) => setLoginmail(e.target.value)}
            />
          </div>
        </div>
        <div className="login_input">
          <div>
            <label htmlFor="ingresa tu contraseña">Ingresa tu contraseña</label>
          </div>
          <div className="login_input_input">
            <input
              type="password"
              placeholder="*******"
              value={loginpassword}
              onChange={(e) => setLoginpassword(e.target.value)}
            />
          </div>
        </div>
        <div>
          <small>¿Se te olvidó la contraseña?</small>
        </div>
        <div>
          <ButtonBig onClick={() => handleLogin()}>Inicia sesión</ButtonBig>
        </div>
        <div className="register_new">
          <div className="register_new_text">
            <p>No tienes cuenta, regístrate aquí</p>
          </div>
          <ButtonLittle>Regístrate</ButtonLittle>
        </div>
      </form>
    </div>
  );
};

export default LoginComponent;
