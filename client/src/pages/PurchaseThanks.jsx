import { Box, Container, Typography } from "@mui/material";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

import ButtonBig from "../components/Buttons/buttonBig/buttonBig";

const bgImage = {
    backgroundImage:
        "url('https://firebasestorage.googleapis.com/v0/b/farmacias-syg.appspot.com/o/imagenes%2Fondas.png?alt=media&token=609c6221-06ce-405c-9ed9-b5e53b1d90fe')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundColor: "'var(--background-body-color)'",
    height: "31.5rem"
};

const textStyle = {
    fontFamily: 'var(--font-body)',
    color: 'var(--font-btn1-color)',
    textAlign: 'center'
}

const PurchaseThanks = () => {
    return (
        <Container maxWidth="xll" sx={{ ...bgImage }}>
            <Typography
                sx={{
                    padding: '70px',
                    fontFamily: "var(--font-title)",
                    fontSize: "4rem",
                    textAlign: "center",
                }}
            >
                ¡¡Gracias por tu compra!!
            </Typography>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                gap: "25px",
                alignItems: 'center',
            }}
            >
                <ButtonBig to="/my-shopping">
                    <Typography sx={{ ...textStyle }}>
                        Ver mis compras
                    </Typography>
                </ButtonBig>
                <ButtonBig to="/">
                    <Typography sx={{ ...textStyle }}>
                        Volver a Home
                    <HomeOutlinedIcon sx={{ fontSize: '35px' }} />
                    </Typography>
                </ButtonBig>
            </Box>
        </Container>
    );
};
export default PurchaseThanks;
