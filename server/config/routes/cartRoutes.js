import express from "express";

import { 
        getCartUser,
        addCartUser,
        updateCartIncrease,
        updateCartDecrease,
        getAllCart
             } from "../../src/api/v1/controllers/cartController.js";
import { getActivity } from "../../middlewares/reports.js";
// import { isLogin } from "../../middlewares/isLogin.js";

const router = express.Router();

router.get("/carts", getActivity, getAllCart) 
router.get("/cart/:id_user", getActivity, getCartUser);
router.post("/cart/", getActivity, addCartUser);
router.put("/cartIncrease/", getActivity, updateCartIncrease);
router.put("/cartDecrease/", getActivity, updateCartDecrease);


export default router;