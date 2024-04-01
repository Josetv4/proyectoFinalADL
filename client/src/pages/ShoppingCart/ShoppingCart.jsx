import { Container } from "@mui/material";
import PurchaseDetail from '../../components/PurchaseDetail/PurchaseDetail.jsx';
import PurchaseStepper from "../../components/PurchaseDetail/PurchaseStepper.jsx";
import PurchaseTotal from '../../components/PurchaseDetail/PurchaseTotal.jsx'

const ShoppingCart = () =>{   

    return (
        <main>
        <PurchaseStepper />
        <Container sx={{ display: "flex", flexDirection: 'row', maxHeight: '54vh', maxWidth: 'moz-available' }}>
            <PurchaseDetail />
            <PurchaseTotal />
        </Container>
      </main>
    )
}

export default ShoppingCart;