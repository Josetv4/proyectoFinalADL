import { Container, Grid } from "@mui/material";
import PurchaseDetail from '../../components/PurchaseDetail/PurchaseDetail.jsx';
import PurchaseStepper from "../../components/PurchaseDetail/PurchaseStepper.jsx";
import PurchaseTotal from '../../components/PurchaseDetail/PurchaseTotal.jsx'
import { useState } from "react";

const ShoppingCart = () =>{   
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
    
    return (
        <main>
            <PurchaseStepper page={1}/>
            <Container sx={{ display: "flex", flexDirection: 'row', maxHeight: '58vh', maxWidth: '-moz-available', justifyContent: "center", alignItems: "center" }}>
                <Grid container spacing={2} style={{ width: "100%" }}>
                    <Grid item xs={8} style={{ height: "100%" }}>
                        <PurchaseDetail cartItems={cartItems} setCartItems={setCartItems} />
                    </Grid>
                    <Grid item xs={4} style={{padding: "0", paddingLeft:"8px"}}>
                        <PurchaseTotal cartItems={cartItems} />
                    </Grid>
                </Grid>
            </Container>
        </main>
    )
}

export default ShoppingCart;