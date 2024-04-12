import { useState, useEffect, useContext } from "react";

import swal from "sweetalert";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
// import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import "../index.css";

import { AuthContext } from "../context/AuthContext.jsx";
import { getFavoritesbyUser } from "../api/getApi.js";

const ListFavorites = () => {
  const { userId } = useContext(AuthContext);

  console.log(userId)

  const [error, setError] = useState("");
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
      fetchFavorites();
  }, []);

  const handleClick = async ( favoriteId ) => {
    await swal("id : " + favoriteId, { icon: "success", });
  }


  const fetchFavorites = async () => {
    try {
      const { response, error } = await getFavoritesbyUser(userId);
      setFavorites(response.favorites);
      setError(error);
      console.log(response.favorites)
    } catch (error) {
      console.error("Error al obtener favoritos:", error);
      setError("Error al obtener favoritos");
    }
  };

  return (
    <main>
      <Container>
        <h1>Mis Favoritos</h1>
        { favorites.map((favorite) => (
          <Card key={favorite.favorite_id} className="favorite-card">
            <CardContent className="favorite-card-content">
              <Typography variant="p" className="favorite-card-color">
                Fecha de Compra
              </Typography>
              <Typography variant="p">
               
              </Typography>
            </CardContent>
            <CardContent className="favorite-box-content">
              <Box>
                <img
                  className="favorite-card-image"
                  src={"favorite.image_url"}
                  alt={"favorite.description"}
                />
              </Box>
              <Box className="favorite-card-content">
                <Typography variant="p">{"favorite.name"}</Typography>
                <Typography variant="p" className="favorite-card-color">
                  {"favorite.price"}
                </Typography>
                <Typography variant="p">
                  Vendido por <a href="#">{favorite.user_id}</a>
                </Typography>
              </Box>
              <Box>
                      <IconButton
                        color="error"
                        onClick={() => handleClick(favorite.favorites_id)}
                      >
                        <DeleteIcon />
                      </IconButton>
              </Box>
            </CardContent>
            <CardActions sx={{ marginRight: 2 }}></CardActions>
          </Card>
        ))}
      </Container>
    </main> 
  );
};

export default ListFavorites;
