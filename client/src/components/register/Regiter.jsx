import { useState } from "react";
import "./style.css";
import ButtonLittle from "../Buttons/buttonLittle/buttonLittle";

const Regiter = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [phone, setphone] = useState("");
  const [rol, setRol] = useState("");
  const [rut, setRut] = useState("");
  const [mail, setMail] = useState("");
  const [mailrepeat, SetMailrepeat] = useState("");
  const [password, setPassword] = useState("");
  const [passwordrepeat, setPasswordrepeat] = useState("");

  const handleClick = () => {
    console.log("Botón clickeado");
  };

  
  return (
    <div className="register">
      <form className="register_form" action="">
        <div className="register_input">
          <div className="register_label">
            <label htmlFor="name">Nombre Completo</label>
          </div>
          <div className="register_input">
            <input
              type="text"
              placeholder="juan perez"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>

        <div className="register_input">
          <div className="register_label">
            <label htmlFor="date" >Fecha de nacimiento</label>
          </div>

          <div className="register_input">
            <input
              type="text"
              placeholder="DD/MM/YY"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </div>

        <div className="register_input">
          <div className="register_label">
            <label htmlFor="phone">Telefono</label>
          </div>
          <div className="register_input">
            <input
              type="text"
              placeholder="+56987694423"
              value={phone}
              onChange={(e) => setphone(e.target.value)}
            />
          </div>
        </div>

        <div className="register_input">
          <div className="register_label">
            <label htmlFor="rol">¿Eres vendedor?</label>
          </div>
          <div className="register_input">
            <select
              name=""
              id=""
              value={rol}
              onChange={(e) => setRol(e.target.value)}
            >
              <option value="">Seleciona</option>
              <option value="">Si</option>
              <option value="">No</option>
            </select>
          </div>
        </div>

        <div className="register_input">
          <div className="register_label">
            <label htmlFor="rut">Rol o Rut </label>
          </div>
          <div className="register_input">
            <input
              type="text"
              placeholder="11.111.111-1"
              value={rut}
              onChange={(e) => setRut(e.target.value)}
            />
          </div>
        </div>

        <div className="register_input">
          <div className="register_label">
            <label htmlFor="Mail">Mail </label>
          </div>
          <div className="register_input">
            <input
              type="text"
              placeholder="tumail@tumail.com"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />
          </div>
        </div>

        <div className="register_input">
          <div className="register_label">
            
            <label htmlFor="Mail_repeat">Repite tu Mail </label>
          </div>
          <div className="register_input">
            <input
              type="text"
              placeholder="tumail@tumail.com"
              value={mailrepeat}
              onChange={(e) => SetMailrepeat(e.target.value)}
            />
          </div>
        </div >
        <div className="register_input">
          <div className="register_label">
            <label htmlFor="password"> Contraseña </label>
          </div>
          <div className="register_input">
            <input
              type="password"
              placeholder="*******"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="register_input">
          <div className="register_label">
            <label htmlFor="password__repeat"> Contraseña </label>
          </div>
          <div className="register_input">
      
            <input
              type="password"
              placeholder="******"
              value={passwordrepeat}
              onChange={(e) => setPasswordrepeat(e.target.value)}
            />
          </div>
        </div>
        <div className="register_term">
          <input type="radio" />
          <div>
            <p>Terminos y condiciones de contrato</p>
          </div>
        </div>

        <ButtonLittle onClick={handleClick}>Enviar</ButtonLittle>
      </form>
    </div>
  );
};

export default Regiter;
