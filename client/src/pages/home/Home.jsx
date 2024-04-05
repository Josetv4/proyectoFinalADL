import Carrusel from "../../components/carrusel/Carrusel";
import "./style.css";
import ButtonBlue from "../../components/Buttons/buttonBlue/buttonBlue";
import boton_info from "../../components/json/boton_info.json"
import ProductCard from "../../components/ProductCard/ProductCard";
import { Box } from "@mui/material";

const homePage = () => {
  const arrayProducts = [
    {
      name: 'Lozartan',
      image: 'https://www.ecofarmacias.cl/wp-content/uploads/2020/03/losartan-1-1.jpg',
      description: 'Descripción del medicamento A.',
      format: '30 Comprimidos Recubiertos',
      price: 10.990,    
      valoration : 3.5,
      seller : "Petco SPA",
      id : 1
    },
    {
      name: 'Lozartan',
      image: 'https://www.ecofarmacias.cl/wp-content/uploads/2020/03/losartan-1-1.jpg',
      description: 'Descripción del medicamento A.',
      format: '30 Comprimidos Recubiertos',
      price: 10.990,
      valoration : 3.5,
      seller : "Petco SPA",
      id : 1
    },
    {
      name: 'Lozartan',
      image: 'https://www.ecofarmacias.cl/wp-content/uploads/2020/03/losartan-1-1.jpg',
      description: 'Descripción del medicamento A.',
      format: '30 Comprimidos Recubiertos',
      price: 10.990,
      valoration : 3.5,
      seller : "Petco SPA",
      id : 1
    },
    {
      name: 'Lozartan',
      image: 'https://www.ecofarmacias.cl/wp-content/uploads/2020/03/losartan-1-1.jpg',
      description: 'Descripción del medicamento A.',
      format: '30 Comprimidos Recubiertos',
      price: 10.990,
      valoration : 3.5,
      seller : "Petco SPA",
      id : 1
    },
    
  ];

    return (
        <div >
        
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
   {arrayProducts.map((product, i ) => (
          <ProductCard key={i}  product={product}>
          </ProductCard>
        ))}
        </Box>
        </section>
        </div>
    );
    };
    export default homePage;