import express from "express";

import { getFavorites, getfavoritesId, getFavoritesUser, createFavorites, updateFavorites, deleteFavorites } from "../../src/api/v1/controllers/favoriteController.js";

import { getActivity } from "../../middlewares/reports.js"; 


const router = express.Router();


router.get("/favorite", getActivity, getFavorites )
router.get("/favorite/:id", getActivity, getfavoritesId )
router.get("/favorite/:user", getActivity, getFavoritesUser )
router.post("/favorite/", validateParametersUser,  getActivity, createFavorites )
router.put("/favorite/:id", getActivity, updateFavorites )
router.delete("/favorite/:id", getActivity, deleteFavorites )


export default router;