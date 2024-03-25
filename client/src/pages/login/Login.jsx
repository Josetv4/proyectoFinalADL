import LoginComponent from "../../components/loginComponet/loginComponet";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "./style.css";
import { Container } from "@mui/material";

const loginPage = () => {
  return (
    <div className="login_page">
      <Container maxWidth="sm">
        <Box sx={{ flexGrow: 1 }} 
        display="flex"
                >
          <Grid container spacing={2} columns={16}>
            <Grid item xs={8}>
              <div className="login_img">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/farmacias-syg.appspot.com/o/imagenes%2FGroup%201002.png?alt=media&token=6f465b19-a0c9-4324-8e6b-8d765a9ebb6e"
                  alt="inscribite en farmacias svg y ten los mejores decuentos"
                />
              </div>
            </Grid>
            <Grid item xs={8}>
              <div className="login_enter">
                
                <h1>Ingresa a tu cuenta</h1>
                <LoginComponent></LoginComponent>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};
export default loginPage;
