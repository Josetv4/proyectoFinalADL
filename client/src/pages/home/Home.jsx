import Carrusel from "../../components/carrusel/Carrusel";
import "./style.css";
import ButtonBlue from "../../components/Buttons/buttonBlue/buttonBlue";
import boton_info from "../../components/json/boton_info.json"
import ProductCard from "../../components/ProductCard/ProductCard";
import { Box } from "@mui/material";
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

const homePage = () => {

  const { products,  } = useContext(DataContext);
  if (!products || !products.product || !Array.isArray(products.product)) {
    return <div>No hay productos disponibles</div>;
  }


    return (
        <div className="home" >
        
            <section className="home_carrusel">
            <h1>Bienvenidos a farmacias independientes SYG</h1>


<Carrusel/>
            </section>
          <section>
          <h2>Disfruta miles de descuentos en nuestras farmacia todas las semanas</h2>
          <section className="home_safe">
           
        {boton_info.map(item => (
          <ButtonBlue key={item.id} descuento={item.descuento} texto={item.texto}>
          </ButtonBlue>
        ))}
          
          
      </section>
   </section>
   <h2>Productos destacados</h2>
   <section className="cart-section">
   
   <Box className= "card-box">
   {products.product.map((item, i ) => (
          <ProductCard key={i}  product={item}>
          </ProductCard>
        ))}
        </Box>
        </section>
        </div>
    );
    };
    export default homePage;