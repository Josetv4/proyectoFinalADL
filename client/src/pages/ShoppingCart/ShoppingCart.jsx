import { Container, Grid } from "@mui/material";
import PurchaseDetail from '../../components/PurchaseDetail/PurchaseDetail.jsx';
import PurchaseStepper from "../../components/PurchaseDetail/PurchaseStepper.jsx";
import PurchaseTotal from '../../components/PurchaseDetail/PurchaseTotal.jsx'

const ShoppingCart = () =>{   

    return (
        <main>
          <PurchaseStepper page={1}/>
          <Container sx={{ display: "flex", flexDirection: 'row', maxHeight: '54vh', maxWidth: 'moz-available' }}>
              <Grid container spacing={2}>
                <Grid item xs={8}>
                    <PurchaseDetail />
                </Grid>
                <Grid item xs={4}>
                    <PurchaseTotal />
                </Grid>
              </Grid>
          </Container>
      </main>
    )
}

export default ShoppingCart;