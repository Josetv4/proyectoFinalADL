import Carrusel from "../../components/carrusel/Carrusel";
import "./style.css";
import ButtonBlue from "../../components/Buttons/buttonBlue/buttonBlue";
import boton_info from "../../components/json/boton_info.json"


const homePage = () => {
    return (
        <div >
            <section className="home_carrusel">
            <Carrusel/>
            </section>
          <section>
          <section className="home_safe">
        {boton_info.map(item => (
          <ButtonBlue key={item.id} descuento={item.descuento} texto={item.texto}>
          </ButtonBlue>
        ))}
      </section>
   </section>
        </div>
    );
    };
    export default homePage;