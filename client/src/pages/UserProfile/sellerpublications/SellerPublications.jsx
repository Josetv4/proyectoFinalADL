import { useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Box } from "@mui/material";
import "./style.css";

import { DataContext } from "../../../context/DataContext";
import { formatDate } from "../../../utils/DateFormat";

const SellerPublications = () => {
  const { productSeller } = useContext(DataContext);

  //const products = [productSeller];
  console.log(productSeller);
  return (
    <div className="seller-publications">
      <h1>Tus ultimas publicaciones</h1>
      <Container>
        {productSeller.product.map((product, index) => (
          <Card
            key={`${product.product_id}-${index}`}
            className="publication-card"
          >
            <CardContent className="publication-card-content">
              <Box>
                <img
                  className="publication-card-image"
                  src={`http://localhost:4000/uploads/${product.image_url}`}
                  alt={product.description}
                />
              </Box>
            </CardContent>
            <CardContent className="publication-card-content">
              <Box className="publication-card-content">
                <Typography variant="p" className="publication-name">
                  {product.name}
                </Typography>
                <Typography variant="p" className="color-description">
                  {product.description}
                </Typography>
              </Box>
            </CardContent>
            <CardContent className="publication-box-content">
              <Box className="publication-card-content">
                <Typography variant="p" className="publication-card-color">
                  <span>Precio :</span> $ {product.price}
                </Typography>
                <Typography variant="p">
                  <span>Stock :</span> {product.stock}
                </Typography>
                <Typography variant="p">
                  <span>Categoria :</span> {product.name_category}
                </Typography>
                <Typography variant="p">
                  <span>Fecha Creacion :</span>{" "}
                  {formatDate(product.create_at)}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Container>
    </div>
  );
};

export default SellerPublications;
