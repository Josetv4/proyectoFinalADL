import React from "react";
import { AppBar, Toolbar, Container } from "@mui/material";

function Footer() {
  return (
    <AppBar position="static" sx={{ top: "auto", bottom: 0, backgroundColor: "var(--background-navba-color)", borderTop: '3px solid #fe486a', }}>
      <Toolbar>
        <Container maxWidth="xl" >
          {/* Contenido del footer */}
        </Container>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;