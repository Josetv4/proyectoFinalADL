import express from "express";

import { getFavorites, getFavoritesId, getFavoritesUser, createFavorites, updateFavorites, deleteFavorites } from "../../src/api/v1/controllers/favoriteController.js";

import { getActivity } from "../../middlewares/reports.js"; 


const router = express.Router();


router.get("/favorite", getActivity, getFavorites )
router.get("/favorite/:id", getActivity, getFavoritesId )
router.get("/favorite/user/:id", getActivity, getFavoritesUser )
router.post("/favorite/",  getActivity, createFavorites )
router.put("/favorite/:id", getActivity, updateFavorites )
router.delete("/favorite/:id", getActivity, deleteFavorites )


export default router;