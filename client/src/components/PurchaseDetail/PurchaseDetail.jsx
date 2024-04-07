import { Card, 
    CardContent,
    Typography, 
    Box
} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { currencyFormat } from "../../helpers/currencyFormat.js";
import { increaseProduct, decreaseProduct } from "../../hooks/HandleCart.jsx";


const PurchaseDetail = ({cartItems, setCartItems}) => {
    const cart = cartItems && cartItems.filter((item) => item.quantity)
    

    const handleIn = (productID) =>{
        console.log(productID);
        increaseProduct(productID, cartItems, setCartItems)
    }
    const handleDec = (productID) => {
        console.log(productID);
        decreaseProduct(productID, cartItems, setCartItems)
    }
    return (
        <section style= {{ 
            maxHeight: "58vh",
            overflowY: "scroll", 
            msOverflowStyle: "none", 
            scrollbarWidth: "none",
            paddingTop: "0"
        }}>
        <h2 style={{ padding: "0", margin: "0", textAlign:"center",fontFamily: "var(--font-title)"}}>Detalle de tu compra</h2>
        {cart.map((item) => (
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
                    <Typography variant="p" style={{ fontSize: "1.2em", color: "var(--font-price-color)" }} className="shopping-card-color">{currencyFormat(item.quantity * item.precio)}</Typography>
                    <Box style={{ display:"flex", marginTop: "32px", columnGap: "8px" }}>
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
        </section>
        
    )
}
export default PurchaseDetail;