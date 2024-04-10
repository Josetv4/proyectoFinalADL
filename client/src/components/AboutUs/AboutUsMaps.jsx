import  { useState, useEffect } from 'react';
import { Box, Typography } from "@mui/material";
import ButtonLittle from '../Buttons/buttonLittle/buttonLittle';
import addressesSyG from '../json/addressesSyG.json';

const displayColumn = {
    display: "flex",
    flexDirection: 'column',
    alignItems: "center",
    gap: '5px',
    justifyContent: "center"
}

const textInformation = {
    fontFamily: 'var(--font-title)',
    color: 'var(--font-navbar-color)',
    textAlign: 'center'
}

const AboutUsMaps = () => {
    const [currentLocation, setCurrentLocation] = useState(addressesSyG[0]);
    const [mapUrl, setMapUrl] = useState("");

    useEffect(() => {
        const defaultLocation = addressesSyG[0];
        setCurrentLocation(defaultLocation);
        setMapUrl(`https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3687.2079328805908!2d${defaultLocation.longitud}!3d${defaultLocation.latitud}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDI3JzMxLjgiUyA2OMKwNTUnNDIuOCJX!5e0!3m2!1ses-419!2scl!4v1711307939970!5m2!1ses-419!2scl`);
    }, []);

    const handleLocationClick = (location) => {
        setCurrentLocation(location);
        setMapUrl(`https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3687.2079328805908!2d${location.longitud}!3d${location.latitud}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDI3JzMxLjgiUyA2OMKwNTUnNDIuOCJX!5e0!3m2!1ses-419!2scl!4v1711307939970!5m2!1ses-419!2scl`);
    };

    return (
        <Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: "wrap", mt: "-25px"}}>
                <Box sx={{ ...displayColumn }}>
                    <Typography sx={{ ...textInformation }}>
                    <h1>Ubicación</h1>
                    </Typography>
                    {mapUrl && (
                        <iframe
                            title="ubicacion farmacia S y G"
                            src={mapUrl}
                            width="400"
                            height="270"
                            style={{ border: 0 }}
                            allowfullscreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    )}
                    <Typography sx={{ ...textInformation, fontFamily: 'var(--font-body)' }}>
                        {currentLocation.nombre}
                    </Typography>
                </Box>
                <Box sx={{ ...displayColumn }}>
                    {addressesSyG.map(location => (
                        <ButtonLittle key={location.id} onClick={() => handleLocationClick(location)}>
                            {`Ubicación ${location.id}`}
                        </ButtonLittle>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default AboutUsMaps;
