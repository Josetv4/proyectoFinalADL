import ShoppingCard from "../../components/ShoppingCard/ShoppingCard.jsx"
import Drawer from "@mui/material/Drawer";
import ReviewComponent from "../../components/review/ReviewComponent.jsx";
import { useState } from "react";
import Button from "@mui/material/Button";

const LastShopping = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <main>
        <ShoppingCard>
          <Button
            variant="contained"
            color="primary"
            onClick={toggleDrawer}>
            Comenta tus productos
          </Button>
        </ShoppingCard>
        <Drawer
          anchor="right"
          open={isDrawerOpen}
          onClose={toggleDrawer}
          sx={{ width: 250 }}
        >
          {/* Aquí incluimos el ReviewComponent dentro del Drawer */}
          <ReviewComponent />
        </Drawer>
     
      </main>
    </>
  );
};

export default LastShopping;
