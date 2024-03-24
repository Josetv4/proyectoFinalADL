import React from "react";
import AboutPharmacy from "../components/AbaoutUs/AboutPharmacy"

import { Container } from "@mui/material";

const bgImage = {
    backgroundImage:
        "url('https://firebasestorage.googleapis.com/v0/b/farmacias-syg.appspot.com/o/imagenes%2Fondas.png?alt=media&token=609c6221-06ce-405c-9ed9-b5e53b1d90fe')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundColor: "var(--background-body-color)",
    marginTop: "7%",
};

const aboutUsPage = () => {
    return (
        <Container
            maxWidth="xl"
            sx={{
                ...bgImage,
            }}
        >
            <AboutPharmacy />
        </Container>
    );
};
export default aboutUsPage;