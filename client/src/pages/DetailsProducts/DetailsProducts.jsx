import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { Typography, Card, CardMedia, Grid, Box , Paper} from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import ButtonBig from '../../components/Buttons/buttonBig/buttonBig';
import ButtonLittle from '../../components/Buttons/buttonLittle/buttonLittle';

import "./styles.css";
import { getProductsById } from '../../api/getApi';

const DetailsProducts = () => {
    const { id } = useParams();
    const [isShowInformation, setIsShowInformation] = useState(undefined);
    const [product,setProduct] = useState([]);

    useEffect(()=>{
        asyncGetProduct();
    },[]);

    const asyncGetProduct = async() =>{
        try {
            const response = await getProductsById(id);
            console.log(response)
            response.response.image_url = 'https://www.laboratoriochile.cl/wp-content/uploads/2015/11/Paracetamol_500MG_16C_BE_HD.jpg';
            response.response.format = '30 Comprimidos Recubiertos';
            response.response.valoration = Math.round((Math.random()*5)*10)/10;
            response.response.seller = 'Petco SPA';
            response.response.information = 'Este medicamento se usa para tratar la fiebre y los dolores suaves a moderados. Este medicamento provee alivio temporal a los síntomas descritos, pero en ningún caso resuelve el origen de ellos.';
            response.response.comments = [
                {
                    author : "Pepito paga doble",
                    date : "15/12/2023",
                    content : "Es bueno el producto"
                },
                {
                    author : "Jorge Valdivia",
                    date : "11/04/2022",
                    content : "Malo"
                }
            ];
            setProduct(response.response)
            console.log(product)
        } catch (error) {
            console.log(error);
        }
    }

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
                            srcSet={product.image_url}
                            src={product.image_url}
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
                        {
                            isShowInformation === true 
                            ? product.information 
                            : (product.comments?.length === 0) 
                                ? "No hay comentarios" 
                                :  product.comments?.map((commentary,i)=> {
                                        return (
                                            <Paper key={i} elevation={3} style={{ padding: '10px', marginBottom: '10px' }}>
                                                <Box sx={{display:"flex", justifyContent:"space-between"}}>
                                                    <Typography variant="subtitle1">Autor : {commentary.author}</Typography>
                                                    <Typography variant="subtitle1">Fecha Publicación : {commentary.date}</Typography>
                                                </Box>
                                                <Typography variant="body1">Comentario : {commentary.content}</Typography>
                                            </Paper>
                                        )
                                    })
                        }
                    </Box>
                </Box>


            </Box>


        </>
    );
};

export default DetailsProducts;




