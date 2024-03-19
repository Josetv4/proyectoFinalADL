import { useState } from "react";
import ButtonBig from "../Buttons/buttonBig/buttonBig"
import ButtonLittle from "../Buttons/buttonLittle/buttonLittle";
import "./style.css";

const Login = () => {
const [loginmail, setLoginmail] =useState('')
const [loginpassword, setLoginpassword] =useState('')

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
            onChange={(e) =>setLoginmail(e.target.value)}
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
            onChange={(e) =>setLoginpassword(e.target.value)} />
        </div>
      </div>
      <div>
        <small>¿Se te olvido la contraseña?</small>
      </div>
      <div>
        <ButtonBig>
        Inicia sesion
        </ButtonBig>
        </div>

        <div className="register_new">
            <div className="register_new_text">
            <p> No tienes cuenta, 
registrate aquí </p>
            </div>
            <ButtonLittle>
                Registrate
            </ButtonLittle>
        </div>
      </form>
    </div>
  )
}

export default Login
