import { Container, Grid } from "@mui/material";
import PurchaseDetail from '../../components/PurchaseDetail/PurchaseDetail.jsx';
import PurchaseStepper from "../../components/PurchaseDetail/PurchaseStepper.jsx";
import PurchaseTotal from '../../components/PurchaseDetail/PurchaseTotal.jsx'
import { useContext } from "react";
import { DataContext } from "../../context/DataContext.jsx";

const ShoppingCart = () =>{   

    const { cartItems, updateCartItem } = useContext(DataContext);

    return (
        <main>
            <PurchaseStepper page={1}/>
            <Container sx={{ display: "flex", flexDirection: 'row', maxHeight: '58vh', maxWidth: '-moz-available', justifyContent: "center", alignItems: "center" }}>
                <Grid container spacing={2} style={{ width: "100%" }}>
                    <Grid item xs={8} style={{ height: "100%" }}>
                        <PurchaseDetail 
                            updateCartItem={updateCartItem}
                            cartItems={cartItems}
                        />
                    </Grid>
                    <Grid item xs={4} style={{padding: "0", paddingLeft:"8px"}}>
                        <PurchaseTotal 
                            cartItem={cartItems}
                        />
                    </Grid>
                </Grid>
            </Container>
        </main>
    )
}

export default ShoppingCart;