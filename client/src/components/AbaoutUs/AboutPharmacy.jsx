import React from 'react';
import { Box, Grid, Typography, Link } from "@mui/material";
import { linkStyles } from '../Footer/linkStyles';
import { FaFacebookF, FaXTwitter } from 'react-icons/fa6';
import { CiInstagram } from 'react-icons/ci';
import { FaWhatsapp } from 'react-icons/fa';

const styleSocialMedia = {
    color: 'var(--background-navba-color)',
    fontSize: '25px',
    mr: '15px',
    textAlign: 'center',
}
const textInformation = {
    fontFamily: 'var(--font-body)',
    color: 'var(--font-navbar-color)',
    fontSize: '12px'
}

const aboutUsPage = () => {
    return (
        <Grid container spacing={1} >
            <Grid item xs={12} md={6} lg={6}>
                <Box sx={{ mt: '-30px', height: '240px', width: '450px' }}>
                    <Typography sx={{ fontFamily: 'var(--font-title)' }}>
                        <h1>Sobre La Farmacia</h1>
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                        <Typography sx={{ ...textInformation }}>
                            Somos un emprendimiento Calameño que busca satisfacer la necesidad
                            de la población de medicamentos a un menor costo y atención de
                            calidad.
                        </Typography >
                        <Typography sx={{ ...textInformation }}>
                            Además nuestros profesionales están preparados para
                            dar atención farmacéutica, con el fin de que nuestros clientes
                            puedan hacer uso correcto de sus medicamentos y así resolver de
                            manera eficiente sus problemas de salud.
                            Esperamos poder cumplir
                        </Typography>
                        <Typography sx={{ ...textInformation }}>
                            con las expectativas, tanto personales como de la población, en el
                            corto plazo y así poder posicionarnos como la alternativa
                            preferida por los Calameños que buscan bajos precios y calidad en
                            los productos y atención
                        </Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
                <Box>
                    <Typography >
                        Somos un emprendimiento Calameño que busca satisfacer la necesidad
                        de la población de medicamentos a un menor costo y atención de
                        calidad.
                        Además nuestros profesionales están preparados para
                        dar atención farmacéutica, con el fin de que nuestros clientes
                        puedan hacer uso correcto de sus medicamentos y así resolver de
                        manera eficiente sus problemas de salud.
                        Esperamos poder cumplir
                        con las expectativas, tanto personales como de la población, en el
                        corto plazo y así poder posicionarnos como la alternativa
                        preferida por los Calameños que buscan bajos precios y calidad en
                        los productos y atención
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={12} lg={12}>
                <Box>
                    <Typography sx={{ ...styleSocialMedia, fontFamily: 'var(--font-title)', fontSize: '40px' }}>
                        Contactanos por nuestras redes sociales
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
                <Box sx={{ display: "flex", flexDirection: 'column', alignItems: "center", mt: '8px' }}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Typography sx={{ ...styleSocialMedia }}>
                            <FaFacebookF />
                        </Typography>
                        <Link href="https://www.facebook.com/farmaciasyg" underline="none" target="_blank" sx={{ ...linkStyles, ...styleSocialMedia }}>
                            {'facebook.com/farmaciasyg'}
                        </Link>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Typography sx={{ ...styleSocialMedia }}>
                            <CiInstagram />
                        </Typography>
                        <Link href="https://www.instagram.com/farmaciasyg" underline="none" target="_blank" sx={{ ...linkStyles, ...styleSocialMedia }}>
                            {'instagram.com/farmaciasyg/'}
                        </Link>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
                <Box sx={{ display: "flex", flexDirection: 'column', alignItems: "center", mt: '8px' }}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Typography sx={{ ...styleSocialMedia }}>
                            <FaWhatsapp />
                        </Typography>
                        <Link href="tel:+56552866270" underline="none" target="_blank" sx={{ ...linkStyles, ...styleSocialMedia }}>
                            {'+56 55 2866270'}
                        </Link>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Typography sx={{ ...styleSocialMedia }}>
                            <FaXTwitter />
                        </Typography>
                        <Link href="https://twitter.com/FarmaciaSYG" underline="none" target="_blank" sx={{ ...linkStyles, ...styleSocialMedia }}>
                            {'x.com/FarmaciaSYG'}
                        </Link>
                    </Box>
                </Box >
            </Grid>
        </Grid>
    );
};

export default aboutUsPage;





