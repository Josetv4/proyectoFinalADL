import {
    Container,
    Typography
} from '@mui/material';


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



const Wallet = () => {
    return (
        <Container maxWidth="xl" sx={{ ...bgImage  }}>
            <Typography>
                Gracias por tu Compra
            </Typography>
        </Container>
    );
};
export default Wallet;