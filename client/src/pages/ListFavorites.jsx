import { useContext } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
// import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import "../index.css";
import { DataContext } from "../context/DataContext";

const ShoppingCard = ({ children }) => {

  const { products, favorite, user_id  } = useContext(DataContext);

  console.log(favorite)
  if (!favorite || !favorite.favorite || !Array.isArray(favorite.favorite)) {
    return <div>No hay Favoritos disponibles { user_id }</div>;
  }

 
  return (
    <main>
      
      <Container>
        <h1>Mis Favoritos</h1>
        {favorite.favorite.map(product  => (
          <Card key={favorite.favorite} className="favorite-card">
            <CardContent className="favorite-card-content">
              <Typography variant="p" className="favorite-card-color">
                Fecha de Compra
              </Typography>
              <Typography variant="p">Publicado el {new Date(favorite.create_at).getDate()} de {new Date(product.create_at).toLocaleString('es', { month: 'long' })} del  {new Date(product.create_at).getFullYear()}</Typography>
            </CardContent>
            <CardContent className="favorite-box-content">
              <Box>
                <img
                  className="favorite-card-image"
                  src={favorite.image_url} 
                  alt={favorite.description}
                />
              </Box>
              <Box className="favorite-card-content">
                <Typography variant="p">{product.name}</Typography>
                <Typography variant="p" className="favorite-card-color">{favorite.price}</Typography>
                <Typography variant="p">Vendido por <a href="#">{favorite.user_id}</a></Typography>

              </Box>
            </CardContent>
            <CardActions sx={{ marginRight:2}}>
              {children}
       
            </CardActions>
          </Card>
        ))}
      </Container>
    </main>
  );
};

export default ShoppingCard;
