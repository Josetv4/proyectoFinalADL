import React from 'react'
import { Card, 
    Box
} from "@mui/material";
import { useState } from 'react';
import { currencyFormat } from "../../helpers/currencyFormat.js";
import ButtonLittle from "../Buttons/buttonLittle/buttonLittle.jsx";
import { NavLink } from 'react-router-dom';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


const PurchaseTotal = ({cartItem}) => {
    console.log(cartItem);
    const carts = cartItem && cartItem.filter((item) => item.quantity>0)
    const send = [
        {id: "starken", sendT: 5500},
        {id: "express", sendT: 3800},
        {id: "retiro", sendT: 0}
    ]
    const [selected, setSelected] = useState('retiro');

    const handleChange = (event) => {
        setSelected(event.target.value);
    };
    
    const subTotal = carts && carts.reduce((a, item) => a + (item.quantity * item.price),0)

    
    const sendT = send.find(item => item.id === selected)?.sendT || 0;
    return (
    <main style={{ display: "flex", flexDirection: "column", height: "98%" }}>
        <p style={{margin: "0", marginBottom:"3px", ontFamily: "var(--font-title)", textAlign: "center", fontSize: "1.5em"}}>Total carrito</p>
        <Card sx={{ display: "flex", flexDirection: "column", height: '100%', paddingLeft: "10px", paddingRight: "10px", paddingBottom: "10px", justifyContent: "space-around" }}>
            <Box style={{ display:"flex", textAlign: "center", justifyContent: "space-around", fontSize: "large"}}>
                <p>Subtotal</p>
                <p>{currencyFormat(subTotal)}</p>
            </Box>                
                <FormControl>
                    <FormLabel sx={{color: "black"}} id="radio-buttons-group-label">Formas de envio</FormLabel>
                    <RadioGroup
                        aria-labelledby="radio-buttons-group-label"
                        name="radio-buttons-group"
                        sx={{fontFamily: "var(--font-body)"}}
                        value={selected}
                        onChange={handleChange}
                    >
                        <FormControlLabel value="starken" control={<Radio sx={{ color: "var(--font-btn4-color)"}} />} label="Starken" />
                        <FormControlLabel value="express" control={<Radio sx={{ color: "var(--font-btn4-color)"}} />} label="Express" />
                        <FormControlLabel value="retiro" control={<Radio sx={{ color: "var(--font-btn4-color)"}} />} label="Retiro en tienda" />
                    </RadioGroup>
                </FormControl>
        
                <Box style={{width: "100%", fontFamily: "var(--font-title)", fontSize: "1.5em", display:"flex", textAlign: "center", justifyContent: "space-around", padding: "0"}}>
                    <p style={{margin:"0",textAlign: "center"}}>Total</p>
                    <p style={{margin:"0"}}>{currencyFormat(subTotal + sendT)}</p>
                </Box>
                    <em><p style={{padding: "0", fontSize: "1em", color: "var(--font-description-color)"}}> (Sub total + envío)</p></em>
                <Box sx={{ display:'flex', justifyContent: 'center' }}>
                    <ButtonLittle 
                        component={NavLink}
                        to="/payment-methods">
                                Continuar
                    </ButtonLittle>
                </Box>
        </Card>
    </main>
    )
}
export default PurchaseTotal;