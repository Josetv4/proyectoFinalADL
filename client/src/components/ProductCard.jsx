import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions } from '@mui/material';
console.log("empezando")

export default function ProductCard({ product }) {
  return (
    <Box sx={{display:'flex', justifyContent:"space-around"}}>
      <Card style={{ maxWidth: 500}}>
        <CardContent>
          <CardMedia
          sx={{ height: 140 }}
          alt= {product.name}
          image={product.image}
          title={product.name}
        />
          <Typography variant="h5" component="h2" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {product.description}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {product.format}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {product.price}
          </Typography>
          <Button variant="contained" color="secondary" style={{ marginTop: '1rem' }}>
            Botón de Acción
          </Button>
        </CardContent>
      </Card>
    </Box>
    
  
  );
}
