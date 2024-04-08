import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import TextField from "@mui/material/TextField";
import ButtonOutline from '../Buttons/buttonBigoutline/buttonOutline';
import "./style.css";
const ReviewComponent = () => {

    const [value, setValue] = useState(2);
    const [coments, setComents]= useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
      };

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
    <h2 >Comentanos sobre tu experiencia</h2>
    <Typography component="legend">¿Como te parecio tu producto?</Typography>

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

<ButtonOutline>
    Enviar
</ButtonOutline>
</form>
  </Box>
 

  )
}

export default ReviewComponent
