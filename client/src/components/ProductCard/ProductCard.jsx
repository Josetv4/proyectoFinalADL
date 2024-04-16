import { useState, useContext, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActions } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import './styles.css';
import ButtonLittle from '../Buttons/buttonLittle/buttonLittle';
import ButtonLittleoutline from '../Buttons/buttonLittleoutline/buttonLittleoutline';
import { DataContext } from "../../context/DataContext";
import { AuthContext } from '../../context/AuthContext';

import 'react-toastify/dist/ReactToastify.css';

import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';


import swal from "sweetalert";

import { createFavorite, deleteFavoriteId } from '../../api/getApi';

export default function ProductCard({ product, favorite }) {
  const { addCartItem } = useContext(DataContext)
  const { userId } = useContext(AuthContext)
  const [isFavorite, setIsFavorite] = useState();
  const [favoriteId, setFavoriteId] = useState();
  const [openSnack, setOpenSnack] = useState(false)
  const image_url = import.meta.env.VITE_URL_BASE

  useEffect(()=>{
    setIsFavorite(favorite.isFavorite);
    setFavoriteId(favorite.favorite_id);
  },[favorite])

  const handleFavoriteClick = async () => {
    console.log("userId: ", userId)
    if (userId) {
      //Si no está favorito, lo crea
      if (!isFavorite) {
        const dataFavorite = {
          product: product.product_id,
          user: userId
        }
        try {
          const response = await createFavorite(dataFavorite);
          console.log(response);
          if (response.response.status === 201) {
            setIsFavorite(!isFavorite);
            setFavoriteId(response.response.data.favorites_id);
          } else {
            swal("Ocurrió un error al agregar a Favoritos el producto, intenta nuevamente.", {
              icon: "error",
            });
          }
        } catch (error) {
          console.log(error);
          swal("Ocurrió un error al agregar a Favoritos el producto, intenta nuevamente.", {
            icon: "error",
          });
        }

      } else { //Si no, lo elimina
        try {
          const response = await deleteFavoriteId(favoriteId);
          console.log(response);
          if (response.response.status === 200) {
            setFavoriteId(null);
            setIsFavorite(!isFavorite);
          } else {
            swal("Ocurrió un error al eliminar de Favoritos, intenta nuevamente.", {
              icon: "error",
            });
          }
        } catch (error) {
          console.log(error);
          swal("Ocurrió un error al eliminar de Favoritos, intenta nuevamente.", {
            icon: "error",
          });
        }
      }
    } else {
      swal("Debes iniciar sesion para agregar a Favoritos tu producto", {
        icon: "error",
      });
    }
  };
  const { product_id, price } = product;
  
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnack(false);
  };
  const addProduct = async () => {
    try {
      await addCartItem(userId, product_id, 1, price);
      console.log("Se añadio el producto al carrito con exito");
      setOpenSnack(true);
      } catch (err) {
        console.error("Error al cargar producto al carrito", err);
      }   
    }
    const dontProduct = () =>{
      swal("¡Debes iniciar sesión para añadir productos al carrito!", {
        icon: "error",
      });
    };

  return (
    <Card className='product-card'>
      <Snackbar open={openSnack} autoHideDuration={3000} onClose={handleClose} >
        <Alert
          onClose={handleClose}
          severity="success"
          style={{ backgroundColor: 'var(--background-btn1)' }}
          variant="filled"
          sx={{ width: '100%' }}
        >
          ¡Excelente! el producto fue añadido al carrito
        </Alert>
      </Snackbar>
      <CardContent className='product-card-content'>
        <Box className='block-icon'>
          <CardMedia
            sx={{ height: "150px" }}
            alt={product.name}
            image={`${image_url}${product.image_url}`}
            title={product.name}
          />
          <IconButton className='icon-tag' onClick={handleFavoriteClick}>
            <FavoriteIcon sx={{ color: isFavorite ? 'red' : 'inherit' }} />
          </IconButton>
        </Box>
        <Typography variant="bold" component="h3" color="textSecondary" >
          {product.name}
        </Typography>
        <Typography variant="normal" component="h5" color="textSecondary" >
          {product.description}
        </Typography>
        <Typography variant="body2" color="textSecondary" component={'span'} sx={{ display: 'flex', justifyContent: "space-between" }} >
          <Box>
            Vendido por : <Box className='link-text' >{product.name_user}</Box>
          </Box>
          <Box>
            <IconButton>
              <StarIcon fontSize='large' sx={{ color: "#efe648" }} />
            </IconButton>
            ({product.valoration})
          </Box>
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
          <ButtonLittle onClick={userId ? () => addProduct() : () => dontProduct()}>
            Añadir al carro
          </ButtonLittle>
          <ButtonLittleoutline to={`/details-product/${product.product_id}`}>
            Ver detalles
          </ButtonLittleoutline>
        </CardActions>
      </CardContent>
      <div className="margin_color">
      </div>
    </Card>
  );
}
