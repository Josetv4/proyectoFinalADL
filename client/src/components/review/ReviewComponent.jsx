import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import TextField from "@mui/material/TextField";
import ButtonOutline from '../Buttons/buttonBigoutline/buttonOutline';
import {  getProductDescription} from '../../api/getApi';
import "./style.css";

const ReviewComponent = () => {
    const [value, setValue] = useState(2);
    const [coments, setComents] = useState("");
 
    const [loading, setLoading] = useState(false);

    const postReview = async () => {
        try {
            setLoading(true);
            const response = await  getProductDescription(value, coments);
            console.log(response);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await postReview();
      
    };
    console.log("hola soy el formulario" + JSON.stringify(handleSubmit) );
    useEffect(() => {
        // Se ejecutará al montar el componente
    }, []); // Si deseas ejecutar algo solo al montar, deja el array de dependencias vacío

    return (
        <Box
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            gap={4}
            width={400}
            paddingTop={10}
            textAlign={'center'}
            sx={{
                '& > legend': { mt: 2 },
            }}
        >
            <form onSubmit={handleSubmit} className='form_review'>
                <h2>Coméntanos sobre tu experiencia</h2>
                <Typography component="legend">¿Cómo te pareció tu producto?</Typography>
                <Rating
                    name="simple-controlled"
                    value={value}
                    size="large"
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                />
                <TextField
                    id="outlined-multiline-static"
                    label="Detalles de producto"
                    multiline
                    variant="filled"
                    rows={4}
                    defaultValue="ejemplo, medicamento para personas hipertensas"
                    value={coments}
                    onChange={(e) => setComents(e.target.value)}
                />
                <ButtonOutline type="submit" disabled={loading}>
                    Enviar
                </ButtonOutline>
            </form>
        </Box>
    );
}

export default ReviewComponent;
