import React from "react";
import { AppBar, Toolbar, Container, Box, Typography, Link } from "@mui/material";
import Swal from 'sweetalert';

// Importación de Iconos
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { FaMapMarkedAlt } from 'react-icons/fa';

const linkStyles = {
  color: 'var(--font-link-color)',
  fontFamily: 'var(--font-body)',
  fontSize: '20px',
  '&.active': {
    textDecoration: 'none',
    color: 'var(--font-footer-color3)',
  },
  "&:hover": {
    color: "var(--font-footer-color2)",
  },
};

function Footer() {

  const direcciones = [
    {
      nombre: "av. Granaderos 2205, Local 2. Esquina Felix Hoyos, al frente de PDI",
      latitud: "-22.458819243014876",
      longitud: "-68.92856193508142"
    },
    {
      nombre: "Av. Arturo Prat 1597-B Frente al Hospital Carlos Cisternas",
      latitud: "-22.446121700013478",
      longitud: "-68.91924964324909"
    },
    {
      nombre: "Av. Grecia 2510, 1392007 Calama, Antofagasta",
      latitud: "-22.455721547785448",
      longitud: "-68.93388475804485"
    }
  ];

  const generarEnlaceMapa = (latitud, longitud) => {
    return `https://www.google.com/maps?q=${latitud},${longitud}`;
  };

  const mostrarUbicacion = (direccion) => {
    const mapUrl = generarEnlaceMapa(direccion.latitud, direccion.longitud);
    Swal({
      title: '¡Encuentranos Aquí!, Te esperamos:',
      text: `Dirección: ${direccion.nombre}`,
      buttons: {
        cancel: "Cerrar",
        confirm: {
          text: "Ver en mapa",
          value: "verMapa",
        },
      },
    }).then((value) => {
      if (value === "verMapa") {
        window.open(mapUrl, "_blank");
      }
    });
  };

  return (
    <AppBar
      position="static"
      sx={{
        height: '110px',
        top: "auto",
        bottom: 0,
        backgroundColor: "var(--background-navba-color)",
        borderTop: '3px solid #fe486a',
      }}>
      <Container maxWidth="xl" >
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 2,
            mb: 0.4,
          }}>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, justifyContent: "space-between", alignItems: "center" }}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/farmacias-syg.appspot.com/o/iconos%2Flogo-web.png?alt=media&token=f0d96f19-3e07-402a-b7c1-11676ff8bf5a"
              alt="Logo farmacia s y g"
            />
          </Box>
          {/* vista escritorio */}
          <Box
            className="mediaSocialFooter"
            sx={{
              mt: -1.2,
              flexGrow: 4,
              display: { xs: "none", lg: "flex" },
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/farmacias-syg.appspot.com/o/iconos%2Flogo-web.png?alt=media&token=f0d96f19-3e07-402a-b7c1-11676ff8bf5a"
                alt="logo farmacia s y g"
              />
            </Box>
            <Box sx={{ display: "flex", flexDirection: 'column', alignItems: "center" }}>
              <Typography sx={{ color: 'var(--font-footer-color1)', fontSize: '1.1rem' }}>
                Siguenos en nuestras redes sociales
              </Typography>
              <Typography sx={{ color: 'var(--font-footer-color1)', fontSize: '1.1rem' }}>
                -------💊------
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: 'column', alignItems: "center" }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography sx={{ color: 'var(--font-footer-color2)', fontSize: '1.1rem' }}>
                  <FaFacebookF />
                </Typography>
                <Link href="https://www.facebook.com/farmaciasyg" underline="none" target="_blank" sx={{ ...linkStyles, color: 'var(--font-link-color)', fontSize: '1.1rem' }}>
                  {'facebook.com/farmaciasyg'}
                </Link>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography sx={{ color: 'var(--font-footer-color3)', fontSize: '1.1rem' }}>
                  <CiInstagram />
                </Typography>
                <Link href="https://www.instagram.com/farmaciasyg" underline="none" target="_blank" sx={{ ...linkStyles, color: 'var(--font-link-color)', fontSize: '1.1rem' }}>
                  {'instagram.com/farmaciasyg/'}
                </Link>
              </Box>
            </Box>
            <Box sx={{ display: "flex", flexDirection: 'column', alignItems: "center" }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography sx={{ color: 'var(--font-footer-color2)', fontSize: '1.1rem' }}>
                  <FaWhatsapp />
                </Typography>
                <Link href="+56552866270" underline="none" target="_blank" sx={{ ...linkStyles, color: 'var(--font-link-color)', fontSize: '1.1rem' }}>
                  {'+56 55 2866270'}
                </Link>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography sx={{ color: 'var(--font-footer-color3)', fontSize: '1.1rem' }}>
                  <FaXTwitter />
                </Typography>
                <Link href="https://twitter.com/FarmaciaSYG" underline="none" target="_blank" sx={{ ...linkStyles, color: 'var(--font-link-color)', fontSize: '1.1rem' }}>
                  {'x.com/FarmaciaSYG'}
                </Link>
              </Box>
            </Box >
            <Box sx={{ display: "flex", flexDirection: 'column', alignItems: "center" }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography sx={{ color: 'var(--font-footer-color2)', fontSize: '1.1rem' }}> <FaMapMarkedAlt /> </Typography>
                <Typography sx={{ color: 'var(--font-footer-color1)', fontSize: '1.1rem' }}> Dirección </Typography>
              </Box>
              {direcciones.map((direccion, index) => (
                <Link
                  key={index}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    mostrarUbicacion(direccion);
                  }}
                  underline="none"
                  sx={{ ...linkStyles, fontSize: '0.8rem', color: 'var(--font-footer-color1)' }}
                >
                  {`Dirección ${index + 1}`}
                </Link>
              ))}
            </Box>
            <Box sx={{ display: "flex", flexDirection: 'column', alignItems: "center" }}>
            </Box>
          </Box>
          <Box
            sx={{
              flexGrow: 4,
              m: -2,
              display: { xs: "none", md: "flex", lg: "none" },
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/farmacias-syg.appspot.com/o/iconos%2Flogo-web.png?alt=media&token=f0d96f19-3e07-402a-b7c1-11676ff8bf5a"
                alt="logo farmacia s y g"
              />
            </Box>
          </Box>
        </Toolbar>
      </Container>
      <Container
        maxWidth="xl"
        sx={{
          mt: 0.4,
          textAlign: 'center',
          height: '27px',
          maxHeight: '27px',
          backgroundColor: 'var(--background-footer-color2)'
        }}>
        <Typography className='footerCopyRigth' sx={{ color: 'var(--font-footer-color4)', fontSize: '13px' }}>
          &copy; Farmacias SYG independiete todos los derechos reservados
        </Typography>
      </Container>
    </AppBar>
  );
}

export default Footer;