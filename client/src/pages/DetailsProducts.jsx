import React from 'react';
import { NavLink } from 'react-router-dom';
import { Typography, Card, CardMedia, Grid, Box } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import ButtonBig from '../components/Buttons/buttonBig/buttonBig';

const product = {
    name: 'Lozartan',
    image: 'https://www.ecofarmacias.cl/wp-content/uploads/2020/03/losartan-1-1.jpg',
    description: 'Descripción del medicamento A.',
    format: '30 Comprimidos Recubiertos',
    price: 10.990,
    valoration: 3.5,
    seller: "Petco SPA"

}


const DetailsProducts = () => {

    return (
        <>

            <Box
                sx={{ display: "flex", justifyContent: "space-evenly" }}
            >
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography
                        component={NavLink}
                        to="/category/1/Belleza" //volver a pagina anterior, buscar la forma de volver a la categoria anterior
                        activeClassName="active"
                        sx={{
                            color: 'var(--font-btn3-color)',
                            fontFamily: 'var(--body)',
                            fontSize: '14px',
                            textDecoration: 'none',
                            '&.active': {
                                color: 'var(--font-link-color)',
                            },
                        }}
                    >
                        <ArrowBackIosIcon sx={{ mt: '-10px' }} />
                        Anterior
                    </Typography>
                    <img
                        style={{ width: "80%", marginTop: "10%" }}
                        srcSet={product.image}
                        src={product.image}
                        alt={product.description}
                        loading="lazy"
                    />
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <Typography variant="bold" component="h2" color="textSecondary" >
                        {product.name}
                    </Typography>
                    <Box sx={{ display: "flex" }}>
                        Vendido por : <Box className='link-text' >{product.seller}</Box>
                        <Box sx={{ display: "flex" }}>
                            <StarIcon fontSize='large' sx={{ color: "#efe648" }} />
                            ({product.valoration})
                        </Box>
                    </Box>
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
                    <Box className='card-actions'>
                        <ButtonBig>
                            Añadir al carro
                        </ButtonBig>
                    </Box>
                </Box>
            </Box>


        </>
    );
};

export default DetailsProducts;




