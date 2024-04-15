import ShoppingCard from "../../components/ShoppingCard/ShoppingCard.jsx"
import Drawer from "@mui/material/Drawer";
import ReviewComponent from "../../components/review/ReviewComponent.jsx";
import { useState } from "react";


const LastShopping = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState("");
  const [selectuserId, setSelectuserid] = useState("")

  const toggleDrawer = (productId, userid) => {
    setSelectedProductId(productId);
    setSelectuserid(userid)
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <main>
      <ShoppingCard toggleDrawer={toggleDrawer} />
        <Drawer
          anchor="right"
          open={isDrawerOpen}
          onClose={toggleDrawer}
          sx={{ width: 250 }}
        >
          {/* Aquí incluimos el ReviewComponent dentro del Drawer */}
          <ReviewComponent selectedProductId={selectedProductId}
          selectuserId={selectuserId} />
        </Drawer>
     
      </main>
    </>
  );
};

export default LastShopping;
