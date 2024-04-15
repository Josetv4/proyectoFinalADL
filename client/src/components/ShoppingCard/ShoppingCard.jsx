import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import { AuthContext } from "../../context/AuthContext";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
// import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./style.css";


const ShoppingCard = ({toggleDrawer}) => {
  
  const { cartsAllbyUser  } = useContext(DataContext);
  const { userId } = useContext(AuthContext);

  if (!cartsAllbyUser || !cartsAllbyUser.carts || !Array.isArray(cartsAllbyUser.carts)) {
    return <div>No hay productos disponibles</div>;
  }



 
  return (
    <main>
      
      <Container>
        <h1>Tus ultimas compras</h1>
        { cartsAllbyUser.carts.map((cart,index)  => (
          <Card key={`${cart.product_id}${index}`} className="shopping-card">
            <CardContent className="shopping-card-content">
              <Typography variant="p" className="shopping-card-color">
                Fecha de Compra
              </Typography>
              <Typography variant="p">{new Date(cart.created_at).getDate()} de {new Date(cart.created_at).toLocaleString('es', { month: 'long' })} del  {new Date(cart.created_at).getFullYear()}</Typography>
            </CardContent>
            <CardContent className="shopping-box-content">
              <Box>
                <img
                  className="shopping-card-image"
                  src={cart.image_url} 
                  alt={cart.name}
                />
              </Box>
              <Box className="shopping-card-content">
                <Typography variant="p">{cart.name}</Typography>
                <Typography variant="p" className="shopping-card-color">{cart.price}</Typography>
                <Typography variant="p">Vendido por {cart.username}</Typography>

              </Box>
            </CardContent>
            <CardActions sx={{ marginRight:2}}>
            <Button
  variant="contained"
  color="primary"
  onClick={() => toggleDrawer(cart.product_id, userId)}
>
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
