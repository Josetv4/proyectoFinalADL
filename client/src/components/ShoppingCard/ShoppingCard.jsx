import { useContext } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import "./style.css";
import { DataContext } from "../../context/DataContext";
const ShoppingCard = () => {

  const { products, error, loading } = useContext(DataContext);

console.log(products)
  
  return (
    <main>
      
      <Container>
        <h1>Tus ultimas compras</h1>
        {products.product.map(product  => (
          <Card key={product.product_id} className="shopping-card">
            <CardContent className="shopping-card-content">
              <Typography variant="p" className="shopping-card-color">
                Fecha de Compra
              </Typography>
              <Typography variant="p">Publicado el {new Date(product.create_at).getDate()} de {new Date(product.create_at).toLocaleString('es', { month: 'long' })} del  {new Date(product.create_at).getFullYear()}</Typography>
            </CardContent>
            <CardContent className="shopping-box-content">
              <Box>
                <img
                  className="shopping-card-image"
                  src={product.imagen_url}
                  alt={product.description}
                />
              </Box>
              <Box className="shopping-card-content">
                <Typography variant="p">{product.name}</Typography>
                <Typography variant="p" className="shopping-card-color">{product.price}</Typography>
                <Typography variant="p">Vendido por <a href="#">{product.user_id}</a></Typography>

              </Box>
            </CardContent>
            <CardActions sx={{ marginRight:2}}>
              <Button variant="contained" color="primary">
                Comenta tus productos
              </Button>
            </CardActions>
          </Card>
        ))}
      </Container>
    </main>
  );
};

export default ShoppingCard;
