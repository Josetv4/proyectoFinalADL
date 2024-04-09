import { AppBar, Toolbar, Container, Box, Typography } from "@mui/material";

import FooterWeb from "./FooterWeb"
import FooterMovil from "./FooterMovil"
import FooterTablet from "./FooterTablet"

function Footer() {

  return (
    <AppBar
      position="static"
      sx={{
        mt: '3px',
        height: '110px',
        top: "auto",
        bottom: 0,
        backgroundColor: "var(--background-navba-color)",
        borderTop: '3px solid #fe486a',
      }}>
      <Container maxWidth="xll" >
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
          {/* VIsta tablet */}
          <Box
            sx={{
              flexGrow: 4,
              m: -2,
              display: { xs: "none", md: "flex", lg: "none" },
              justifyContent: "space-between",
            }}
          >
              <FooterTablet />
          </Box>
        </Toolbar>
      </Container>
      <Container
        maxWidth="xll"
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