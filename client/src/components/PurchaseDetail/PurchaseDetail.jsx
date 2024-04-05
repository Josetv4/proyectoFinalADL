import { Card, 
    CardContent,
    Typography, 
    Container, 
    Box
} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { currencyFormat } from "../../helpers/currencyFormat.js";
import { increaseProduct, decreaseProduct } from "../../hooks/HandleCart.jsx";
import { useState } from "react";

const PurchaseDetail = () => {
    const [ cartItems, setCartItems ] = useState([
            {
                id: 1,
                fecha: "2024-03-25",
                imagen: "https://www.ecofarmacias.cl/wp-content/uploads/2020/03/losartan-1-1.jpg",
                descripcion: "Descripción del producto 1",
                precio: "10990",
                quantity: 1
            },  
            {   
                id: 2,
                fecha: "2024-03-24",
                imagen: "https://www.ecofarmacias.cl/wp-content/uploads/2020/03/losartan-1-1.jpg",
                descripcion: "Descripción del producto 2",
                precio: "15490",
                quantity: 3
            },  
            {   
                id: 3,
                fecha: "2024-03-23",
                imagen: "https://www.ecofarmacias.cl/wp-content/uploads/2020/03/losartan-1-1.jpg",
                descripcion: "Descripción del producto 3",
                precio: "8250",
                quantity: 6
            },
        ]);

    

    const handleIn = (productID) =>{
        console.log(productID);
        increaseProduct(productID, cartItems, setCartItems)
    }
    const handleDec = (productID) => {
        console.log(productID);
        decreaseProduct(productID, cartItems, setCartItems)
    }
    return (
        <Container sx={{ maxHeight: "60vh", 
                            overflowY: "scroll", 
                            msOverflowStyle: "none", 
                            scrollbarWidth: "none"
                        }}>
        <h2 style={{textAlign:"center", paddingBottom:"3vh",fontFamily: "var(--font-title)"}}>Detalle de tu compra</h2>
        {cartItems.map((item) => (
            <Card key={item.id} className="shopping-card">
                <CardContent 
                    sx={{ display: "flex" , width: "100%", flexDirection:"row", columnGap: "2vh"}} 
                    className="shopping-box-content">
                <Box sx={{ width: "15vw" }}>
                    <img
                        style={{ width: "-moz-available", 
                                height: "-moz-available",  
                            }}
                        className="shopping-card-image"
                        src={item.imagen}
                        alt={item.descripcion}
                    />
                </Box>
                <Box 
                        style={{ width: "-moz-available", 
                                height: "-moz-available", 
                                alignSelf: "center",
                                marginButtom:"1vh",
                                display: "flex",
                                flexDirection: "column",
                                fontFamily: "var(--font-body)"
                        }} 
                        className="shopping-card-content"
                >
                    <Typography variant="p" style={{ fontSize: "1.2em", marginBottom: "4px" }} >{item.descripcion}</Typography>
                    <Typography variant="p" style={{ fontSize: "1em"}}> <strong><em>vendido por</em></strong> <a href="#">petcos Spa</a></Typography>
                        
                </Box>
                <Box style={{ height: "-moz-available", display:"flex", flexDirection: "column", alignSelf: "center"}}>
                    <Typography variant="p" style={{ fontSize: "1.2em", color: "var(--font-price-color)" }} className="shopping-card-color">{currencyFormat(item.precio)}</Typography>
                    <Box style={{ display:"flex", marginTop: "4vh", columnGap: "1vh" }}>
                    <AddIcon 
                        onClick={() => handleIn(item.id)}
                        style={{
                            cursor: "pointer"
                        }} >
                    </AddIcon>
                    <span style={{fontSize:"1.5em"}}>{item.quantity}</span>
                    <RemoveIcon 
                        onClick={() => handleDec(item.id)}
                        style={{cursor: "pointer"}}></RemoveIcon>
                </Box>
                </Box>
                </CardContent>
            </Card>
        ))}
        </Container>
    )
}
export default PurchaseDetail;