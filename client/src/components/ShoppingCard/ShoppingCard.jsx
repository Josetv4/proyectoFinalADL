import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Container
} from "@mui/material";

import "./style.css";

const ShoppingCard = () => {
  const lastShopping = [
    {
      id: 1,
      fecha: "2024-03-25",
      imagen: "https://www.ecofarmacias.cl/wp-content/uploads/2020/03/losartan-1-1.jpg",
      descripcion: "Descripción del producto 1",
      precio: "$10.99",
    },
    {
      id: 2,
      fecha: "2024-03-24",
      imagen: "https://www.ecofarmacias.cl/wp-content/uploads/2020/03/losartan-1-1.jpg",
      descripcion: "Descripción del producto 2",
      precio: "$15.49",
    },
    {
      id: 3,
      fecha: "2024-03-23",
      imagen: "https://www.ecofarmacias.cl/wp-content/uploads/2020/03/losartan-1-1.jpg",
      descripcion: "Descripción del producto 3",
      precio: "$8.25",
    },
  ];
  return (
    <main>
      <Container>

      
      { lastShopping.map((item) => (
        <Card key={item.id} className="shopping-card">
          <CardContent>
           <Typography variant="p">{item.fecha}</Typography>
            <Typography variant="body1">{item.fecha}</Typography>
          </CardContent>

          <CardContent>
            <img
              className="product-image"
              src={item.imagen}
              alt={item.descripcion}
            />
            <Typography variant="p">{item.descripcion}</Typography>
            <Typography variant="p">{item.precio}</Typography>
          </CardContent>

          <CardActions>
            <Button variant="contained" color="primary">
              Comentarios
            </Button>
          </CardActions>
        </Card>
      ))}
      </Container>
    </main>
  );
};

export default ShoppingCard;
