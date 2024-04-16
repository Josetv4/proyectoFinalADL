import { useEffect, useState } from 'react';
import { NavLink, useParams, useNavigate } from 'react-router-dom';
import { Typography, Box, Paper } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import StarIcon from '@mui/icons-material/Star';
import ButtonBig from '../../components/Buttons/buttonBig/buttonBig';


import "./styles.css";
import { getProductsById, getReviewsByProduct } from '../../api/getApi';

const DetailsProducts = () => {
    const { id } = useParams();
    const [isShowInformation, setIsShowInformation] = useState(undefined);
    const [product, setProduct] = useState([]);
    const [reviews, setReviews] = useState([]);
    const navigate = useNavigate();
    const image_url = import.meta.env.VITE_URL_BASE


    useEffect(() => {
        asyncGetProduct();
        asyncGetReviews();
    }, []);

    const addProduct = async () => {
        try {
            await addCartItem(userId, product_id, 1, price);
            console.log("Se añadio el producto al carrito con exito");
            toast(' ¡Excelente! su producto fue añadido al carrito',);
        } catch (err) {
            console.error("Error al cargar producto al carrito", err);
        }
    }
    const dontProduct = () => {
        swal("¡Debes iniciar sesion para añadir productos al carrito!", {
            icon: "error",
        });
    };
    const asyncGetProduct = async () => {
        try {
            const response = await getProductsById(id);
            console.log(response)        
            setProduct(response.response)
        } catch (error) {
            console.log(error);
        }
    }

    const asyncGetReviews = async () => {
        try {
            const response = await getReviewsByProduct(id);
            console.log(response)
            setReviews(response.response)
        } catch (error) {
            console.log(error);
        }
    }

    const handleClickInfo = () => {
        setIsShowInformation(true);
        console.log(isShowInformation)
    }

    const handleClickCommentary = () => {
        setIsShowInformation(false);
    }

    const goBack = () => {
        navigate(-1)
    }

   
const convertirFechaZ = (fechaZulu) =>{
 
    const fecha = new Date(fechaZulu);
    const offset = fecha.getTimezoneOffset();
    const GmtMenos4 = offset - (4 * 60);
  
    fecha.setMinutes(fecha.getMinutes() + GmtMenos4);
  
    const fechaGMTmenos4 = fecha.toISOString().split("T")[0];
    
    return fechaGMTmenos4;
  }


    return (
        <>
            <Box sx={{ marginTop: "3%", marginLeft: "3%" }}>
                <Typography
                    component={NavLink}
                    onClick={goBack}
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
                            srcSet={`${image_url}${product.image_url}`}
                            src={`${image_url}${product.image_url}`}
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
                            Vendido por : <Box className='link-text' >{product.name_user}</Box>
                        </Typography>
                        <Typography variant="bold" color="textSecondary" component="h3">
                            {product.description}
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
                            <button className='button_details' onClick={handleClickInfo}>
                                Información del producto
                            </button>
                        </Box>
                        <Box>
                            <button className='button_details' onClick={handleClickCommentary}>
                                Comentarios
                            </button>
                        </Box>
                    </Box>
                    <Box className="section-info-buttons" sx={{ display: (isShowInformation === undefined) ? "none" : "block" }}>
                        {
                            isShowInformation === true
                                ? (product.information ? product.information : "Sin información")
                                : (reviews?.length === 0)
                                    ? "No hay comentarios"
                                    : reviews?.map((commentary, i) => {
                                        return (
                                            <Paper key={i} elevation={3} style={{ padding: '10px', marginBottom: '10px' }}>
                                                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                                    <Typography variant="subtitle1">Autor : </Typography>
                                                    <Typography variant="subtitle1">Fecha Publicación : {convertirFechaZ(commentary.create_at)}</Typography>
                                                </Box>
                                                <Typography variant="body1">Comentario : {commentary.comment}</Typography>
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




