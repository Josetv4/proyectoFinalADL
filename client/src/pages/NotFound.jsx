import {
  Container
} from '@mui/material';


const bgImage = {
  backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/farmacias-syg.appspot.com/o/imagenes%2Fondas.png?alt=media&token=609c6221-06ce-405c-9ed9-b5e53b1d90fe')",
  backgroundRepeat: 'no-repeat',
  backgroundSize: "cover",
  mt: '5px',
  backgroundColor: "'var(--background-body-color)'",
  height: "71vh",
};

const Img404 = {
  margin: "4% 35%",
  width: "30%",
  height: "80%",
}

const NotFound = () => {
  return (
    <Container maxWidth="xl" sx={{ ...bgImage }}>
      <img style={{ ...Img404 }} src="https://firebasestorage.googleapis.com/v0/b/farmacias-syg.appspot.com/o/imagenes%2F404.png?alt=media&token=03b9aeab-c6a7-47ff-b5db-1fb926a870ac" alt="gorila con cartel que dice 404" />
    </Container>
  );
};
export default NotFound;
