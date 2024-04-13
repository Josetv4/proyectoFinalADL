import { Card, 
    CardContent,
    Typography, 
    Box
} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { currencyFormat } from "../../helpers/currencyFormat.js";


const PurchaseDetail = ({ cartUser, updateCartItem }) => {
const { cart } = cartUser;

    const handleIn = async (product) => {
        const { product_id, detail_id, cart_id } = product;
        console.log(product_id, detail_id, cart_id);
        try {
            await updateCartItem(product_id, detail_id, cart_id, "increase")

        } catch (err) {
            console.error("Error al aumentar cantidad del carrito", err);
        }
        
    }
    const handleDec = async (product_id) => {
        try {
            await updateCartItem(product_id, "Decrease")
        } catch (err) {
            console.error("Error al disminuir cantidad del carrito", err);
        }
    }
    return (
        <section style= {{ 
            maxHeight: "58vh",
            overflowY: "scroll", 
            msOverflowStyle: "none", 
            scrollbarWidth: "none",
            paddingTop: "0"
        }}>
        <h2 style={{ padding: "0", margin: "0", textAlign:"center"}}>Detalle de tu compra</h2>
        {!cart || cart.quantity === 0 ? 
        (<h1 style={{ borderRadius: "20px 0px 20px 0px", textAlign: "center", padding: "30px", marginTop: "30px", backgroundColor: "#fe486a" }}>Agrega productos al carrito</h1>)
            : (<Card key={cart.product_id} className="shopping-card">
                    <CardContent 
                        sx={{ display: "flex" , width: "100%", flexDirection:"row", columnGap: "2vh"}} 
                        className="shopping-box-content">
                    <Box sx={{ width: "15vw" }}>
                        <img
                            style={{ width: "-moz-available", 
                                    height: "-moz-available",  
                                }}
                            className="shopping-card-image"
                            src={cart.detail}
                            alt={cart.detail}
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
                        <Typography variant="p" style={{ fontSize: "1.2em", marginBottom: "4px" }} >{cart.detail}</Typography>
                        <Typography variant="p" style={{ fontSize: "1em"}}> <strong><em>vendido por</em></strong> <a href="#">petcos Spa</a></Typography>
    
                    </Box>
                    <Box style={{ height: "-moz-available", display:"flex", flexDirection: "column", alignSelf: "center"}}>
                        <Typography variant="p" style={{ fontSize: "1.2em", color: "var(--font-price-color)" }} className="shopping-card-color">{currencyFormat(cart.quantity * cart.price)}</Typography>
                        <Box style={{ display:"flex", marginTop: "32px", columnGap: "8px" }}>
                        <AddIcon 
                            onClick={() => handleIn(cart)}
                            style={{
                                cursor: "pointer"
                            }} >
                        </AddIcon>
                        <span style={{fontSize:"1.5em"}}>{cart.quantity}</span>
                        <RemoveIcon 
                            onClick={() => handleDec(cart.id)}
                            style={{cursor: "pointer"}}></RemoveIcon>
                    </Box>
                    </Box>
                    </CardContent>
                </Card>
            )
        }
        </section> 
    )
}
export default PurchaseDetail;