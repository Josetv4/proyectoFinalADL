import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Typography, Card, CardMedia, Grid, Box } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import ButtonBig from '../../components/Buttons/buttonBig/buttonBig';
import ButtonLittle from '../../components/Buttons/buttonLittle/buttonLittle';

import "./styles.css";

const product = {
    name: 'Femelle',
    image: 'https://d1tjllbjmslitt.cloudfront.net/spree/products/102240/large_webp/2835001.webp?1700488520',
    description: 'Descripción del medicamento A.',
    format: '30 Comprimidos Recubiertos',
    price: 10.990,
    valoration: 3.5,
    seller: "Petco SPA",
    activeIngredient: "Principio Activo: Losartán Potásico / Forma Farmacéutica: Comprimidos / Dosis por Forma Farmacéutica: 50mg.",
    information: "Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to.",
    comments: []

}

const DetailsProducts = () => {

    const [isShowInformation, setIsShowInformation] = useState(undefined);

    const handleClickInfo = () =>{
        setIsShowInformation(true);
        console.log(isShowInformation)
    }

    const handleClickCommentary = () =>{
        setIsShowInformation(false);
    }

    return (
        <>
            <Box sx={{ marginTop: "3%", marginLeft: "3%" }}>
                <Typography
                    component={NavLink}
                    to="/category/1/Belleza" //volver a pagina anterior, buscar la forma de volver a la categoria anterior
                    activeClassName="active"
                    sx={{
                        color: 'var(--font-btn3-color)',
                        fontFamily: 'var(--body)',
                        fontSize: '20px',
                        textDecoration: 'none',
                        '&.active': {
                            color: 'var(--font-link-color)',
                        },
                    }}
                >
                    <ArrowBackIosIcon sx={{ mt: '-10px' }} />
                    Anterior
                </Typography>
            </Box>

            <Box
                sx={{ display: "flex", justifyContent: "space-evenly", alignItems: "flex-start" }}
            >
                <Box>
                    <Box>
                        <img
                            style={{ width: "300px" }}
                            srcSet={product.image}
                            src={product.image}
                            alt={product.description}
                            loading="lazy"
                        />
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <Box>
                                <StarIcon fontSize='large' sx={{ color: "#efe648" }} />
                            </Box>
                            <Box sx={{ fontSize: 'medium' }}>
                                ({product.valoration})
                            </Box>
                        </Box>
                    </Box>
                </Box>

                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "15px", width: "50%" }}>
                    <Box sx={{ display: "flex", gap: "20px", flexDirection: "column" }}>
                        <Typography variant="bold" component="h1" >
                            {product.name}
                        </Typography>
                        <Typography variant="bold" component="h3" sx={{ display: "flex" }}>
                            Vendido por : <Box className='link-text' >{product.seller}</Box>
                        </Typography>
                        <Typography variant="bold" color="textSecondary" component="h3">
                            {product.format}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {product.activeIngredient}
                        </Typography>
                    </Box>

                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "30px" }}>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <span className='text-price'>Precio:</span>
                            <Box className='text-price2'>${product.price}</Box>
                        </Box>
                        <Box>
                            <ButtonBig>
                                Añadir al carro 🛒
                            </ButtonBig>
                        </Box>
                    </Box>

                    <Box sx={{ display: "flex", gap: "20px" }}>
                        <Box>
                            <button className='button_details' onClick={handleClickInfo }>
                                Información y Requisitos
                            </button>
                        </Box>
                        <Box>
                            <button className='button_details' onClick={handleClickCommentary}>
                                Comentarios
                            </button>
                        </Box>
                    </Box>
                    <Box className="section-info-buttons" sx={{display: (isShowInformation===undefined) ? "none" : "block"}}>
                        {isShowInformation === true 
                        ? product.information 
                        : (product.comments.length === 0) ? "No hay comentarios" : "Aca van los comentarios"}
                    </Box>
                </Box>


            </Box>


        </>
    );
};

export default DetailsProducts;




