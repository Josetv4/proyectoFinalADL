import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../context/AuthContext.jsx";
import { DataContext } from "../context/DataContext.jsx";
import { getFavoritesbyUser, deleteFavoriteId } from "../api/getApi.js";

import swal from "sweetalert";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

// import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import ButtonLittle from "../components/Buttons/buttonLittle/buttonLittle";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import "../index.css";


import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ListFavorites = () => {
  const navigate = useNavigate();
  const { userId } = useContext(AuthContext);
  const {  addCartItem } = useContext(DataContext);
  const [error, setError] = useState("");
  const [favorites, setFavorites] = useState([]);

  const image_url = import.meta.env.VITE_URL_BASE
  
  useEffect(() => {
    fetchFavorites();
  }, []);

  const handleClickDelete = async (id) => {
    try {
     await deleteFavoriteId(id);
      
      if (error) {
        alert(error);
        setError(error);
        navigate("/login");
        
      } else {
        swal("Registro eliminado" , { icon: "success" });
      }
      fetchFavorites();
    } catch (error) {
      console.error("Error al obtener favoritos:", error);
      setError("Error al obtener favoritos");
    }
  };
  const addProduct = async (product_id, price) => {
    try {
      await addCartItem(userId, product_id, 1, price);
      console.log("Se añadio el producto al carrito con exito");
      toast(' ¡Excelente! su producto fue añadido al carrito',);
      } catch (err) {
      console.error("Error al cargar producto al carrito", err);
      }   
    }
    const dontProduct = () =>{
      swal("¡Debes iniciar sesion para añadir productos al carrito!", {
        icon: "error",
      });
    };
  const fetchFavorites = async () => {
    try {
      const { response, error } = await getFavoritesbyUser(userId);
      setFavorites(response);
      setError(error);
    } catch (error) {
      console.error("Error al obtener favoritos:", error);
      setError("Error al obtener favoritos");
    }
  };

  if (!favorites  || !Array.isArray(favorites) || (favorites.length === 0)  )  {
    return <div>No hay Favoritos disponibles</div>;
  }

 

  return (
    <Container>
      <h1>Mis Favoritos</h1>
      {favorites.map((favorite, index) => (
        <Card key={`${favorite.favorite_id}-${index}`} className="favorite-card">
          <CardContent className="favorite-card-content">
            <Box>
              <img
                className="favorite-card-image"
                src={`${image_url}${favorite.image_url}`}
                alt={favorite.name}
              />
            </Box>
          </CardContent>
          <CardContent className="favorite-card-content">
            <Box>
            <Typography variant="p" className="favorite-name">
                {favorite.name}
              </Typography>
            </Box>
          </CardContent>
          <CardContent className="favorite-box-content">
            <Box className="favorite-card-content">
             
              <Typography variant="p" className="favorite-card-color">
                <span>Precio :</span> {favorite.price}
              </Typography>
              <Typography variant="p">
                Vendido por {favorite.name_user}
              </Typography>
            </Box>
            <Box>
              <ButtonLittle
                onClick={ userId ? () => addProduct(favorite.product_id, favorite.price) : () => dontProduct()} 
              >
                Añadir al carro
              </ButtonLittle>
            </Box>
            <Box>
              <IconButton
                color="error"
                onClick={() => handleClickDelete(favorite.favorites_id)}
              >
                <DeleteIcon />
              </IconButton>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};

export default ListFavorites;
