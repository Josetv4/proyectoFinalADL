import Carrusel from "../../components/carrusel/Carrusel";
import "./style.css";
import ButtonBlue from "../../components/Buttons/buttonBlue/buttonBlue";
import boton_info from "../../components/json/boton_info.json"
import ProductCard from "../../components/ProductCard/ProductCard";
import { Box } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../context/DataContext";
import AuthContext from "../../context/AuthContext";
import { getFavoritesbyUser } from "../../api/getApi";

const homePage = () => {

  const {userId} = useContext(AuthContext);
  const { products } = useContext(DataContext);
  const [favorites, setFavorites] = useState([]);

  const asyncGetFavoritesUser = async () => {
    if (userId) {
      try {
        const response = await getFavoritesbyUser(userId);
        console.log(response);
        setFavorites(response.response)
      } catch (error) {
        console.log(error);
      }
    }
  }

  useEffect(() => {
    asyncGetFavoritesUser();
  }, []);

  if (!products || !products.product || !Array.isArray(products.product)) {
    return <div>No hay productos disponibles</div>;
  }

  const searchFavoritebyProduct = (productId) => {
    return {
      isFavorite: userId ? favorites.some(element => element.product_id === productId) : false,
      favorite_id: userId ? favorites.find(element => element.product_id === productId)?.favorites_id : null
    };
  }

  return (
    <div className="home" >

      <section className="home_carrusel">
        <small>*Esta página no está autorizada para la venta de medicamentos con receta médica</small>
        <h1>Bienvenidos a farmacias independientes SYG</h1>



        <Carrusel />
      </section>
      <section className="home_h2">
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

        <Box className="card-box">
          {products.product.slice(0, 4).map((item, i) => (
            <ProductCard key={i} product={item} favorite={searchFavoritebyProduct(item.product_id)}/>
          ))}
        </Box>
      </section>
    </div>
  );
};
export default homePage;