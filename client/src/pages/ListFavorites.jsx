import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
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

import { AuthContext } from "../context/AuthContext.jsx";
import { getFavoritesbyUser, deleteFavoriteId } from "../api/getApi.js";

const ListFavorites = () => {
  const navigate = useNavigate();
  const { userId } = useContext(AuthContext);

  console.log(userId);

  const [error, setError] = useState("");
  const [favorites, setFavorites] = useState([]);

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
        swal("id eliminado : " + id , { icon: "success" });
      }
      fetchFavorites();
    } catch (error) {
      console.error("Error al obtener favoritos:", error);
      setError("Error al obtener favoritos");
    }
  };

  const fetchFavorites = async () => {
    try {
      const { response, error } = await getFavoritesbyUser(userId);
      setFavorites(response.favorites);
      setError(error);
    } catch (error) {
      console.error("Error al obtener favoritos:", error);
      setError("Error al obtener favoritos");
    }
  };

  return (
    <Container>
      <h1>Mis Favoritos</h1>
      {favorites.map((favorite, index) => (
        <Card key={`${favorite.favorite}-${index}`} className="favorite-card">
          <CardContent className="favorite-card-content">
            <Box>
              <img
                className="favorite-card-image"
                src={`http://localhost:4000/uploads/$favorite.image_url`}
                alt={favorite.name}
              />
            </Box>
          </CardContent>
          <CardContent className="favorite-box-content">
            <Box className="favorite-card-content">
              <Typography variant="p" className="favorite-name">
                {favorite.name}
              </Typography>
              <Typography variant="p" className="favorite-card-color">
                <span>Precio :</span> {favorite.price}
              </Typography>
              <Typography variant="p">
                Vendido por {favorite.name_user}
              </Typography>
            </Box>
            <Box>
              <ButtonLittle
                onClick={userId ? () => addProduct() : () => dontProduct()}
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
