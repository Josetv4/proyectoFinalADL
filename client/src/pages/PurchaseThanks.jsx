import {
    Box,
    Container,
    Typography
} from '@mui/material';

import ButtonBig from "../components/Buttons/buttonBig/buttonBig";


const bgImage = {
    backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/farmacias-syg.appspot.com/o/imagenes%2Fondas.png?alt=media&token=609c6221-06ce-405c-9ed9-b5e53b1d90fe')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: "cover",
    mt: '5px',
    backgroundColor: "'var(--background-body-color)'",
    height: "71vh",
    display: 'flex',
    flexDirection: 'column',
    gap: '25px'
};



const PurchaseThanks = () => {
    return (
        <Container maxWidth="xl" sx={{ ...bgImage }}>
            <Typography sx={{ fontFamily: 'var(--font-title)', fontSize: '4rem', textAlign: 'center' }}>
                ¡¡Gracias por tu compra!!
            </Typography>
            <Box>
                <ButtonBig
                    to="/"
                >
                    Ver mis compras
                </ButtonBig>
                <ButtonBig
                    to="/">
                    Volver a Home
                </ButtonBig>
            </Box>
        </Container>
    );
};
export default PurchaseThanks;