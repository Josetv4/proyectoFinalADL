import { useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Box } from "@mui/material";
import "./style.css";

import { DataContext } from "../../../context/DataContext";
import { formatDate } from '../../../utils/DateFormat';

const SellerPublications = () => {
  const { productSeller } = useContext(DataContext);

  const products = [productSeller];

  return (
    <div className="seller-publications">
      <h1>Tus ultimas publicaciones</h1>
      <Container>
        {products.map((product, index) => (
          <Card
            key={`${product.product_id}-${index}`}
            className="publication-card"
          >
            <CardContent className="publication-card-content">
              <Box>
                <img
                  className="publication-card-image"
                  src={`http://localhost:4000/uploads/${product.products.image_url}`}
                  alt={product.products.description}
                />
              </Box>
            </CardContent>
            <CardContent className="publication-card-content">
              <Box className="publication-card-content">
                <Typography variant="p" className="publication-name">
                  {product.products.name}
                </Typography>
                <Typography variant="p" className="color-description">
                  {product.products.description}
                </Typography>
              </Box>
            </CardContent>
            <CardContent className="publication-box-content">
              <Box className="publication-card-content">
                <Typography variant="p" className="publication-card-color">
                  <span>Precio :</span> $ {product.products.price}
                </Typography>
                <Typography variant="p">
                  <span>Stock :</span> {product.products.stock}
                </Typography>
                <Typography variant="p">
                  <span>Categoria :</span> {product.products.name_category}
                </Typography>
                <Typography variant="p">
                  <span>Fecha Creacion :</span> {formatDate(product.products.create_at)}
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
