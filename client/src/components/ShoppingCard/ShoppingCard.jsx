import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import "./style.css";

const ShoppingCard = () => {
  const lastShopping = [
    {
      id: 1,
      fecha: "2024-03-25",
      imagen:
        "https://www.ecofarmacias.cl/wp-content/uploads/2020/03/losartan-1-1.jpg",
      descripcion: "Descripción del producto 1",
      precio: "$10.99",
    },
    {
      id: 2,
      fecha: "2024-03-24",
      imagen:
        "https://www.ecofarmacias.cl/wp-content/uploads/2020/03/losartan-1-1.jpg",
      descripcion: "Descripción del producto 2",
      precio: "$15.49",
    },
    {
      id: 3,
      fecha: "2024-03-23",
      imagen:
        "https://www.ecofarmacias.cl/wp-content/uploads/2020/03/losartan-1-1.jpg",
      descripcion: "Descripción del producto 3",
      precio: "$8.25",
    },
  ];
  return (
    <main>
      <Container>
        <h1>Tus ultimas compras</h1>
        {lastShopping.map((item) => (
          <Card key={item.id} className="shopping-card">
            <CardContent className="shopping-card-content">
              <Typography variant="p" className="shopping-card-color">
                Fecha de Compra
              </Typography>
              <Typography variant="p">{item.fecha}</Typography>
            </CardContent>
            <CardContent className="shopping-box-content">
              <Box>
                <img
                  className="shopping-card-image"
                  src={item.imagen}
                  alt={item.descripcion}
                />
              </Box>
              <Box className="shopping-card-content">
                <Typography variant="p">{item.descripcion}</Typography>
                <Typography variant="p" className="shopping-card-color">{item.precio}</Typography>
                <Typography variant="p">Vendido por <a href="#">petcos Spa</a></Typography>

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
