import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';

import ButtonLittle from './Buttons/buttonLittle/buttonLittle';

export default function ProductCard({ product }) {
  return (
    <Card sx={{ border: 1, borderColor: "grey.500", borderRadius: 6, width: "300px", height: "480px" }}>
      <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "10px" }}>
        <CardMedia
          sx={{ height: 200 }}
          alt={product.name}
          image={product.image}
          title={product.name}
        />
        <Typography variant="h5" component="h2" color="textSecondary" >
          {product.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {product.description}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Formato:{product.format}
        </Typography>
        <hr></hr>
        <Typography
          sx={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}
          variant="body5"
          color="textSecondary" component="h3">
          <Box>
            Precio:
          </Box>
          <Box>
            {product.price}
          </Box>
        </Typography>
        <CardActions sx={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "10px" }}>
        <IconButton>
          <FavoriteIcon />
        </IconButton>
          <ButtonLittle >
            Añadir al carro
          </ButtonLittle>
          <ButtonLittle>
            Ver detalles
          </ButtonLittle>
        </CardActions>

      </CardContent>
    </Card>

  );
}
