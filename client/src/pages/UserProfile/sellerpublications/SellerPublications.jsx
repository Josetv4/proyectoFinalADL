import { useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Box } from "@mui/material";
import "./style.css";

import { DataContext } from "../../../context/DataContext";

const SellerPublications = () => {
  
  const { productSeller } = useContext(DataContext);
  
  const products = [productSeller];

  console.log(productSeller)

  return (
     <div className="seller_publications">
      <h1>Tus ultimas publicaciones</h1>
      <Container maxWidth="sm">
        { products.map(( product, index ) => (

          <Card key={`${product.product_id}-${index}`} className="shopping-card">
            <CardContent className="shopping-card-content">
              <Typography variant="p" className="shopping-card-color">
                Fecha de Publicacion
              </Typography>
              <Typography variant="p">{"product.fecha"}</Typography>
            </CardContent>
            <CardContent className="shopping-box-content">
              <Box className="publication_img">
                <img
                  className="shopping-card-image"
                  src={product.image_url}
                  alt={product.description}
                />
                <div>
                  <Typography variant="p">{"item.descripcion"}</Typography>
                </div>
              </Box>
              <Box className="shopping-card-content">
                <Typography variant="p" className="shopping-card-color">
                  {"item.precio"}
                </Typography>
                <div className="publication_stock">
                  <Typography variant="p">Stock</Typography>
                  <Typography variant="p" className="shopping-card-color">
                    {"item.stock"} uni
                  </Typography>
                </div>
              </Box>
            </CardContent>
          </Card> 
        ))} 
      </Container>
    </div> 
  );
};

export default SellerPublications;
