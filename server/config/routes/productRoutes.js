import express from "express";

import { createNewProduct,   
         getProducts, 
         getAllProducts,
         getProductsId,
         getProductsCategoryId,
         getProductsByUsers,
         getProductsByDescription,
         updateProducts, 
         deleteProducts,
         statusProducts } from "../../src/api/v1/controllers/productsController.js";

import { validateParametersProducts } from "../../middlewares/validateParametersProducts.js";

import { getActivity } from "../../middlewares/reports.js";

import { upload } from "../../middlewares/uplodafile.js"

import { isLogin } from "../../middlewares/isLogin.js"


const router = express.Router();


router.get("/products", getActivity, getProducts )
router.get("/products/all", getActivity, getAllProducts )
router.get("/products/:id", getActivity, getProductsId )
router.get("/products/category/:id", getActivity, getProductsCategoryId )
router.get("/products/user/:id", isLogin,  getActivity, getProductsByUsers )
router.post("/products", isLogin, getActivity, upload.single('image'), createNewProduct)
router.put("/products/:id", isLogin, validateParametersProducts, getActivity, upload.single('image'), updateProducts )
router.post("/products/description", getActivity, getProductsByDescription )
router.delete("/products/:id", isLogin, getActivity, deleteProducts )
router.put("/product/status/:id", isLogin, getActivity, statusProducts )

export default router;