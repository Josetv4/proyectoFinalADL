import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Box } from "@mui/material"
import "./style.css";
const SellerPublications = () => {
  const lastShopping = [
    {
      id: 1,
      fecha: "2024-03-25",
      imagen:
        "https://www.ecofarmacias.cl/wp-content/uploads/2020/03/losartan-1-1.jpg",
      descripcion: "Descripción del producto 1",
      stock: "10",
      precio: "$10.99"
    },
    {
      id: 2,
      fecha: "2024-03-24",
      imagen:
        "https://www.ecofarmacias.cl/wp-content/uploads/2020/03/losartan-1-1.jpg",
      descripcion: "Descripción del producto 2",
      stock: "15",
      precio: "$15.49",
    },
    {
      id: 3,
      fecha: "2024-03-23",
      imagen:
        "https://www.ecofarmacias.cl/wp-content/uploads/2020/03/losartan-1-1.jpg",
      descripcion: "Descripción del producto 3",
      stock: "900",
      precio: "$8.25",
    },
  ];

  return (

    <div className="seller_publications">
       <h1>Tus ultimas publicaciones</h1>
         <Container maxWidth="sm">
    


   {lastShopping.map((item) => (
          <Card key={item.id} className="shopping-card">
            <CardContent className="shopping-card-content">
              <Typography variant="p" className="shopping-card-color">
                Fecha de Publicacion
              </Typography>
              <Typography variant="p">{item.fecha}</Typography>
            </CardContent>
            <CardContent className="shopping-box-content">
              <Box className="publication_img">
                <img
                  className="shopping-card-image"
                  src={item.imagen}
                  alt={item.descripcion}
                />
                <div>   
                    <Typography variant="p">{item.descripcion}</Typography>
                    </div>
            
              </Box>
              <Box className="shopping-card-content">
              <Typography variant="p" className="shopping-card-color">{item.precio}</Typography>
                  <div className="publication_stock"> 
                <Typography variant="p">Stock</Typography>
                <Typography variant="p" className="shopping-card-color">{item.stock} uni</Typography>
                </div>
              </Box>
            </CardContent>
          
          </Card>
          
        ))}
      

   </Container>
    
       
    </div>
  )
}

export default SellerPublications
