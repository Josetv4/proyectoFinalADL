import { Box, Typography, Link } from '@mui/material';
import { linkStyles } from './linkStyles';
import { FaFacebookF, FaXTwitter } from 'react-icons/fa6';
import { CiInstagram } from 'react-icons/ci';
import { FaWhatsapp, FaMapMarkedAlt } from 'react-icons/fa';
import direcciones from '../json/addressesSyG.json';
import { mostrarUbicacion } from './linkMaps';

const SocialMediaLinks = () => {
    let direccionIndex = 0;
    return (
        <Box
            className="mediaSocialFooter"
            sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%"
            }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/farmacias-syg.appspot.com/o/iconos%2Flogo-web.png?alt=media&token=f0d96f19-3e07-402a-b7c1-11676ff8bf5a"
                    alt="logo farmacia s y g"
                />
            </Box>
            <Box sx={{ display: "flex", flexDirection: 'column', alignItems: "center", mt: '8px' }}>
                <Typography sx={{ color: 'var(--font-footer-color1)', fontSize: '1rem' }}>
                    Siguenos en  <br />
                    nuestras redes sociales
                </Typography>
                <img src="https://firebasestorage.googleapis.com/v0/b/farmacias-syg.appspot.com/o/imagenes%2Fhr-footer.png?alt=media&token=3589438f-5229-4cf0-8787-4641c04f427f" alt="" />
            </Box>
            <Box sx={{ display: "flex", flexDirection: 'column', alignItems: "center", mt: '8px' }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography sx={{ color: 'var(--font-footer-color2)', fontSize: '1.4rem', mr: '5px' }}>
                        <FaFacebookF />
                    </Typography>
                    <Link href="https://www.facebook.com/farmaciasyg" underline="none" target="_blank" sx={{ ...linkStyles, color: 'var(--font-link-color)', fontSize: '1rem' }}>
                        {'facebook.com/farmaciasyg'}
                    </Link>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography sx={{ color: 'var(--font-footer-color3)', fontSize: '1.4rem', mr: '5px' }}>
                        <CiInstagram />
                    </Typography>
                    <Link href="https://www.instagram.com/farmaciasyg" underline="none" target="_blank" sx={{ ...linkStyles, color: 'var(--font-link-color)', fontSize: '1rem' }}>
                        {'instagram.com/farmaciasyg/'}
                    </Link>
                </Box>
            </Box>
            <Box sx={{ display: "flex", flexDirection: 'column', alignItems: "center", mt: '8px' }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography sx={{ color: 'var(--font-footer-color2)', fontSize: '1.4rem', mr: '5px' }}>
                        <FaWhatsapp />
                    </Typography>
                    <Link href="tel:+56552866270" underline="none" target="_blank" sx={{ ...linkStyles, color: 'var(--font-link-color)', fontSize: '1rem' }}>
                        {'+56 55 2866270'}
                    </Link>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography sx={{ color: 'var(--font-footer-color3)', fontSize: '1.4rem', mr: '5px' }}>
                        <FaXTwitter />
                    </Typography>
                    <Link href="https://twitter.com/FarmaciaSYG" underline="none" target="_blank" sx={{ ...linkStyles, color: 'var(--font-link-color)', fontSize: '1.1rem' }}>
                        {'x.com/FarmaciaSYG'}
                    </Link>
                </Box>
            </Box >
            <Box sx={{ display: "flex", flexDirection: 'column', alignItems: "center" }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography sx={{ color: 'var(--font-footer-color2)', fontSize: '1.4rem', mr: '5px' }}> <FaMapMarkedAlt /> </Typography>
                    <Typography sx={{ color: 'var(--font-footer-color1)', fontSize: '1rem' }}> Dirección </Typography>
                </Box>
                {direcciones.map((direccion) => {
                    direccionIndex++;
                    return (
                        <Link
                            key={direccion.id}
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                mostrarUbicacion(direccion);
                            }}
                            underline="none"
                            sx={{ ...linkStyles, fontSize: '0.8rem', color: 'var(--font-footer-color1)' }}
                        >
                            {`Dirección # ${direccionIndex}`}
                        </Link>
                    );
                })}
            </Box>
        </Box>
    );
};

export default SocialMediaLinks;

