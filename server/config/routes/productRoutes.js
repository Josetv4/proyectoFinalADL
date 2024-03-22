import express from "express";

import { createNewProduct,   
         getProducts, 
         getProductsId, 
         updateProducts, 
         deleteProducts } from "../../src/api/v1/controllers/productsController.js";

import { validateParametersProducts } from "../../middlewares/validateParametersProducts.js";

import { getActivity } from "../../middlewares/reports.js";

import { upload } from "../../middlewares/uplodafile.js"


const router = express.Router();


router.get("/products", getActivity, getProducts )
router.get("/products/:id", getActivity, getProductsId )
router.post("/products", validateParametersProducts, getActivity, upload.single('image'), createNewProduct)
router.put("/products/:id", getActivity, updateProducts )
router.delete("/products/:id", getActivity, deleteProducts )


export default router;