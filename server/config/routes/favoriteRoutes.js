import express from "express";
const router = express.Router();

import {
  getFavorites,
  getFavoritesId,
  getFavoritesUser,
  createFavorites,
  updateFavorites,
  deleteFavorites,
} from "../../src/api/v1/controllers/favoriteController.js";

import { getActivity } from "../../middlewares/reports.js";
import { isLogin } from "../../middlewares/isLogin.js";



router.get("/favorite", getActivity, getFavorites);
router.get("/favorite/:id", getActivity, getFavoritesId);
router.get("/favorite/user/:id",  getActivity, getFavoritesUser);
router.post("/favorite/", isLogin, getActivity, createFavorites);
router.put("/favorite/:id", isLogin,  getActivity, updateFavorites);
router.delete("/favorite/:id", isLogin, getActivity, deleteFavorites);

export default router;
