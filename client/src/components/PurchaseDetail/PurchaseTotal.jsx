import React from 'react'
import { Card, 
    Typography, 
    Container, 
    Box
} from "@mui/material";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
import { currencyFormat } from "../../helpers/currencyFormat.js";
import ButtonLittle from "../Buttons/buttonLittle/buttonLittle.jsx";
import { NavLink } from 'react-router-dom';

const PurchaseTotal = () => {
  return (
    <Container sx={{ width: "45vw", maxHeight: '-moz-available' }}>
        <p style={{fontFamily: "var(--font-title)", textAlign: "center", paddingBottom:"3.5vh", fontSize: "1.3em"}}>Total carrito</p>
        <Card>
            <Box style={{display:"flex", textAlign: "center", justifyContent: "space-around", padding: "1vh"}}>
                <p>Subtotal</p>
                
                <p>{currencyFormat(0.000)}</p>
            </Box>
            <Typography variant="p" style={{fontFamily: "var(--font-body)", fontSize: "14px", padding: "2vh"}}>Formas de envio</Typography>
                <ul style={{ paddingTop: "2vh", listStyle: "none", marginBottom: "3vh" }}>
                    <li style={{display: "flex", alignItems: "center", gap: "1vh"}}>
                        <MdOutlineRadioButtonUnchecked style={{fontSize: "1em", color: "var(--linea-border-color1)"}}/> 
                        <p style={{fontFamily: "var(--font-body)", fontSize: "14px"}}> Starken </p>
                    </li>
                    <li style={{display: "flex", alignItems: "center", gap: "1vh"}}>
                        <MdOutlineRadioButtonUnchecked style={{fontSize: "1em", color: "var(--linea-border-color1)"}}/> 
                        <p style={{fontFamily: "var(--font-body)", fontSize: "14px"}}> Express </p>
                    </li>
                    <li style={{display: "flex", alignItems: "center", gap: "1vh"}}>
                        <MdOutlineRadioButtonUnchecked style={{fontSize: "1em", color: "var(--linea-border-color1)"}}/> 
                        <p style={{fontFamily: "var(--font-body)", fontSize: "14px"}}> Retiro en tienda </p>
                    </li>
                </ul>
                <Box style={{fontFamily: "var(--font-title)", fontSize: "1.5em", display:"flex", textAlign: "center", justifyContent: "space-around", padding: "1vh"}}>
                    <p style={{textAlign: "left", width: "100%"}}>Total</p>
                    <p>{currencyFormat(0.000)}</p>
                </Box>
                <em><p style={{paddingLeft: "1vh", paddingBottom: "4vh", fontSize: "14px", color: "var(--font-description-color)"}}> (Sub total + envío)</p></em>
                <Box sx={{ display:'flex', width: '100%', justifyContent: 'center' }}>
                    <ButtonLittle 
                        component={NavLink}
                        to="/payment-methods">
                                Continuar
                    </ButtonLittle>
                </Box>
        </Card>
    </Container>
  )
}
export default PurchaseTotal;