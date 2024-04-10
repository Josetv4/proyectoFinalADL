import express from "express";
const router = express.Router();

import {
  getReviews,
  getReviewsId,
  createReviews,
  updateReviews,
  deleteReviews,
} from "../../src/api/v1/controllers/reviewController.js";

import { getActivity } from "../../middlewares/reports.js";

import { isLogin } from "../../middlewares/isLogin.js"

router.get("/review", getActivity, getReviews);
router.get("/review/:id", getActivity, getReviewsId);
router.post("/review",isLogin,  getActivity, createReviews);
router.put("/review/:id", isLogin, getActivity, updateReviews);
router.delete("/review/:id", isLogin, getActivity, deleteReviews);

export default router;
