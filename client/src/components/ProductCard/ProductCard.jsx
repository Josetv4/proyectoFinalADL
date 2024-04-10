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
import { useContext } from 'react';
import { DataContext } from "../../context/DataContext";
import { AuthContext } from '../../context/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import swal from "sweetalert";



export default function ProductCard({ product }) {
  const { addCartItem } = useContext(DataContext)
  const { userId } = useContext(AuthContext)
  
  
  const addProduct = async () =>{
    const product_id = product.id;
    const quantity = product.quantity;
    const price = product.price;

    try {
      await addCartItem(userId, product_id, quantity, price)
      console.log("Se añadio el producto al carrito con exito");
      toast(' ¡Excelente! su producto fue añadido al carrito',);  
    } catch (err) {
        console.error("Error al cargar producto al carrito", err);
    }
  }
  const dontProduct = () =>{
    swal("¡Debes iniciar sesion para añadir productos al carrito!", {
      icon: "error",
    });
  }
  return (
    <Card className='product-card'>
      <ToastContainer/>
      <CardContent className='product-card-content'>
        <Box className='block-icon'>
          <CardMedia
            sx={{ height:"150px"}}
            alt={product.name}
            image={product.image_url}
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
          <ButtonLittle onClick={userId ? () => addProduct(product): () => dontProduct() }>
            Añadir al carro
          </ButtonLittle>
          <ButtonLittleoutline to={`/details-product/${product.product_id}`}>
            Ver detalles
          </ButtonLittleoutline>
        </CardActions>

      </CardContent>
    </Card>

  );
}
