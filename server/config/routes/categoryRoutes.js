import express from "express";

import {  getCategories, 
            getCategoriesId, 
            createNewCategory,
            updateCategories,
            deleteCategories} from "../../src/api/v1/controllers/categoryController.js";

import { validateParametersCategory } from "../../middlewares/validateParametersCategory.js";

import { getActivity } from "../../middlewares/reports.js"; 


const router = express.Router();


router.get("/category", getActivity, getCategories )
router.get("/category/:id", getActivity, getCategoriesId )
router.post("/category/", validateParametersCategory,  getActivity, createNewCategory )
router.put("/category/:id", getActivity, updateCategories )
router.delete("/category/:id", getActivity, deleteCategories )


export default router;