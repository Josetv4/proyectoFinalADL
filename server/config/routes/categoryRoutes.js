import express from "express";

import {  getCategories, 
            getCategoriesId, 
            createNewCategory,
            updateCategories,
            deleteCategories} from "../../src/api/v1/controllers/categoryController.js";

import { validateParametersCategory } from "../../middlewares/validateParametersCategory.js";

import { getActivity } from "../../middlewares/reports.js"; 
 import { isLogin } from "../../middlewares/isLogin.js";


const router = express.Router();


router.get("/category",  getActivity, getCategories )
router.get("/category/:id", getActivity, getCategoriesId )
router.post("/category/", isLogin,  validateParametersCategory,  getActivity, createNewCategory )
router.put("/category/:id", isLogin, getActivity, updateCategories )
router.delete("/category/:id", isLogin,  getActivity, deleteCategories )


export default router;