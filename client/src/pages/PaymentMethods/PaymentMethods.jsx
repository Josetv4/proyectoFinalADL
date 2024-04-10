
import "./style.css";

import PurchaseStepper from "../../components/PurchaseDetail/PurchaseStepper.jsx";

import { useState } from "react";
import ButtonBig from "../../components/Buttons/buttonBig/buttonBig.jsx";
import { useNavigate } from "react-router-dom";

const PaymentMethods = () => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/wallet");

  };
  console.log("hola" +handleSubmit)
  return (
    <div>

    
    <h1>Medios de pago </h1>
    <form onSubmit={handleSubmit} className="paymentmethods_form">
    <div className="labelgroup">
      <div className="border_button">
        <input
          type="radio"
          id="webpay"
          value="webpay"
          checked={paymentMethod === "webpay"} // Ajusta aquí el estado que indica la opción seleccionada
          onChange={(e) => {
            setPaymentMethod(e.target.value);
          }}
        />
        <label htmlFor="webpay">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/farmacias-syg.appspot.com/o/imagenes%2Fwebpay.png?alt=media&token=4cb6f1d8-0827-42d7-b617-5ef20b49c2b2"
            alt=""
          />
        </label>
      </div>
      <div className="border_button">
        <input
          type="radio"
          id="onepay"
          value="onepay"
          checked={paymentMethod === "onepay"} // Ajusta aquí el estado que indica la opción seleccionada
          onChange={(e) => {
            setPaymentMethod(e.target.value);
          }}
        />
        <label htmlFor="onepay">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/farmacias-syg.appspot.com/o/imagenes%2Flogo-onepay-mobile%202.png?alt=media&token=189c8af5-bfbf-4cf6-a28b-b18254c86442"
            alt=""
          />
        </label>
      </div>
      <div className="border_button">
        <input
          type="radio"
          id="transferencia"
          value="transferencia"
          checked={paymentMethod === "transferencia"} // Ajusta aquí el estado que indica la opción seleccionada
          onChange={(e) => {
            setPaymentMethod(e.target.value);
          }}
        />
        <label htmlFor="transferencia">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/farmacias-syg.appspot.com/o/imagenes%2Ftransferencia.png?alt=media&token=6136fac6-4657-4711-b6f4-120d808cf1a7"
            alt=""
          />
        </label>
      </div>
    </div>
    <div className="step_seccion">
      <PurchaseStepper page={2} />

    <ButtonBig type="submit" onClick={handleSubmit}>pagar</ButtonBig>

    </div>
    </form>
    </div>
  );
};
export default PaymentMethods;
