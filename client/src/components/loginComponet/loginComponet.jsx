
import { useAuth } from "../../context/AuthContext";
import { Navigate } from 'react-router-dom';
import ButtonBig from "../Buttons/buttonBig/buttonBig";
import ButtonLittle from "../Buttons/buttonLittle/buttonLittle";
import swal from 'sweetalert';
import "./style.css";
import { useState } from "react";

const LoginComponent = () => {
  const { user, setUser } = useAuth();
  const [loginmail, setLoginmail] = useState('');
  const [loginpassword, setLoginpassword] = useState('');

  const handleLogin = (userType) => {
    setUser({
      username: "exampleUser",
      userType: userType,
    });
    swal("¡Has iniciado sesión correctamente!", {
      icon: "success",
    });
  };

  // Si el usuario ya está autenticado, redirigirlo a la página principal
  if (user) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className='login'>
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
          <ButtonBig onClick={() => handleLogin("regular")}>
            Inicia sesión como Usuario Regular
          </ButtonBig>
          <ButtonBig onClick={() => handleLogin("seller")}>
            Inicia sesión como Vendedor
          </ButtonBig>
          <ButtonBig onClick={() => handleLogin("admin")}>
            Inicia sesión como Administrador
          </ButtonBig>
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

export default LoginComponent ;
