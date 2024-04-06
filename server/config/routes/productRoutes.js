import express from "express";

import { createNewProduct,   
         getProducts, 
         getProductsId,
         getProductsCategoryId,
         getProductsByUsers,
         updateProducts, 
         deleteProducts } from "../../src/api/v1/controllers/productsController.js";

import { validateParametersProducts } from "../../middlewares/validateParametersProducts.js";

import { getActivity } from "../../middlewares/reports.js";

import { upload } from "../../middlewares/uplodafile.js"

import { isLogin } from "../../middlewares/isLogin.js"


const router = express.Router();


router.get("/products", getActivity, getProducts )
router.get("/products/:id", getActivity, getProductsId )
router.get("/products/category/:id", getActivity, getProductsCategoryId )
router.get("/products/user/:id", isLogin,  getActivity, getProductsByUsers )
router.post("/products", isLogin,  validateParametersProducts, getActivity, upload.single('image'), createNewProduct)
router.put("/products/:id", isLogin, validateParametersProducts, getActivity, upload.single('image'), updateProducts )
router.delete("/products/:id", isLogin, getActivity, deleteProducts )


export default router;