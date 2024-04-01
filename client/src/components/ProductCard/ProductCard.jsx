import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';

import './styles.css';
import ButtonLittle from '../Buttons/buttonLittle/buttonLittle';
import ButtonLittleoutline from '../Buttons/buttonLittleoutline/buttonLittleoutline';

export default function ProductCard({ product }) {

  return (
    <Card className='product-card'>
      <CardContent className='product-card-content'>
        <Box className='block-icon'>
          <CardMedia
            sx={{ height:"150px"}}
            alt={product.name}
            image={product.image}
            title={product.name}
          />
          <IconButton className='icon-tag'>
            <FavoriteIcon />
          </IconButton>
        </Box>
        <Typography variant="bold" component="h3" color="textSecondary" >
          {product.name}         
        </Typography>
        <Typography variant="normal" component="h5" color="textSecondary" >
          {product.format}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p" sx={{display:'flex',justifyContent:"space-between"}} >
          <Box> 
            Vendido por : <Box className='link-text' >{product.seller}</Box>
          </Box>
          <Box> 
            <IconButton>
              <StarIcon fontSize='large' sx={{color:"#efe648"}} />
            </IconButton>
            ({product.valoration})
          </Box>
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {product.description}
        </Typography>
        <Typography
          className='price-content'
          variant="body5"
          color="textSecondary" component="h4">
          <Box>
            Precio:
          </Box>
          <Box className="price">
            ${product.price}
          </Box>
        </Typography>
        <CardActions className='card-actions'>
          <ButtonLittle >
            Añadir al carro
          </ButtonLittle>
          <ButtonLittleoutline to={`/details-product/${product.id}`}>
            Ver detalles
          </ButtonLittleoutline>
        </CardActions>

      </CardContent>
    </Card>

  );
}
