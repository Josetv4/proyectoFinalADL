import React from "react";

import { AppBar, Toolbar, Container, Box, Typography, Link } from "@mui/material";

import FooterWeb from "./FooterWeb"
import FooterMovil from "./FooterMovil"

function Footer() {

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
            mt: 1,
            mb: 0.4,
          }}>
            {/* vista móvil */}
          <Box
          sx={{
            mt: -1,
            flexGrow: 1,
            width: "100%",
            display: { xs: "flex", md: "none" },
            justifyContent: "space-between",
            alignItems: "center"
            }}>
          <FooterMovil />
          </Box>
          {/* vista escritorio */}
          <Box
            sx={{
              mt: -1.2,
              flexGrow: 4,
              display: { xs: "none", lg: "flex" },
            }}
          >
            <FooterWeb />
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
          mt: 0,
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