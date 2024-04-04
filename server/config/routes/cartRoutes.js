import express from "express";

import { 
        getCartUser,
        addCartUser,
        updateCartIncrease,
        updateCartDecrease,
        getAllCart
             } from "../../src/api/v1/controllers/cartController.js";
import { getActivity } from "../../middlewares/reports.js";
import { isLogin } from "../../middlewares/isLogin.js";

const router = express.Router();

router.get("/carts/", isLogin, getActivity, getAllCart) 
router.get("/cart/", getActivity, getCartUser);
router.post("/cart/", getActivity, addCartUser);
router.put("/cartIncrease/:id", getActivity, updateCartIncrease);
router.put("/cartDecrease/:id", getActivity, updateCartDecrease);


export default router;