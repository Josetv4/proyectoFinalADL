import { Box, Typography, Link } from '@mui/material';
import { linkStyles2 } from './linkStyles2';
import { FaFacebookF, FaXTwitter } from 'react-icons/fa6';
import { CiInstagram } from 'react-icons/ci';
import { FaWhatsapp, FaMapMarkedAlt } from 'react-icons/fa';


const SocialMediaLinks1 = () => {
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
            <Box sx={{ display: "flex", flexDirection: 'column', alignItems: "center", mt: '5px' }}>
                <Typography sx={{ color: 'var(--font-footer-color1)', fontSize: '0.7rem' }}>
                    Siguenos en  <br />
                    nuestras redes sociales
                </Typography>
                <img src="https://firebasestorage.googleapis.com/v0/b/farmacias-syg.appspot.com/o/imagenes%2Fhr-footer.png?alt=media&token=3589438f-5229-4cf0-8787-4641c04f427f" alt="" />
                <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                    <Link href="https://www.facebook.com/farmaciasyg" underline="none" target="_blank" sx={{ ...linkStyles2, color: 'var(--font-footer-color2)', fontSize: '1.4rem' }}>
                        <FaFacebookF />
                    </Link>
                    <Link href="https://www.instagram.com/farmaciasyg" underline="none" target="_blank" sx={{ ...linkStyles2, color: 'var(--font-footer-color3)', fontSize: '1.4rem' }}>
                        <CiInstagram />
                    </Link>
                    <Link href="tel:+56552866270" underline="none" target="_blank" sx={{ ...linkStyles2, color: 'var(--font-footer-color2)', fontSize: '1.4rem' }}>
                        <FaWhatsapp />
                    </Link>
                    <Link href="https://twitter.com/FarmaciaSYG" underline="none" target="_blank" sx={{ ...linkStyles2, color: 'var(--font-footer-color3)', fontSize: '1.4rem' }}>
                        <FaXTwitter />
                    </Link>
                    <Link href="https://maps.app.goo.gl/NbFne4VGLp3nLGNP9" underline="none" target="_blank" sx={{ ...linkStyles2, color: 'var(--font-footer-color2)', fontSize: '1.4rem' }}>
                        <FaMapMarkedAlt />
                    </Link>
                </Box >
            </Box>
        </Box>
    );
};

export default SocialMediaLinks1;
