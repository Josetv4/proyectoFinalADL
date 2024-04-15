import {
  getReview,
  getReviewId,
  getReviewProductId,
  createReview,
  updateReview,
  deleteReview,
} from "../models/reviewModel.js";

import { handleError } from "../utils/utils.js";

const getReviews = async (req, res) => {
  try {
    const reviews = await getReview();
    res.status(200).json({ review: reviews });
  } catch (error) {
    const errorFound = handleError(error.code) || [
      { status: 500, message: "Error interno del servidor" },
    ];
    return res
      .status(errorFound[0]?.status)
      .json({ error: errorFound[0]?.message });
  }
};

const getReviewsId = async (req, res) => {
  const { id } = req.params;
  try {
    const reviews = await getReviewId(id);
    res.status(200).json({ review: reviews });
  } catch (error) {
    const errorFound = handleError(error.code) || [
      { status: 500, message: "Error interno del servidor" },
    ];
    return res
      .status(errorFound[0]?.status)
      .json({ error: errorFound[0]?.message });
  }
};
const getReviewsProductId = async (req, res) => {
  const { productId } = req.params;
  try {
    const reviews = await getReviewProductId(productId);
    res.status(200).json(reviews);
  } catch (error) {
    const errorFound = handleError(error.code) || [
      { status: 500, message: "Error interno del servidor" },
    ];
    return res
      .status(errorFound[0]?.status)
      .json({ error: errorFound[0]?.message });
  }
};
const createReviews = async (req, res) => {
  try {
    const review = req.body;
    const newReview = await createReview(review);
    res.status(201).json({ review: newReview });
  } catch (error) {
    const errorFound = handleError(error.code) || [
      { status: 500, message: "Error interno del servidor" },
    ];
    return res
      .status(errorFound[0]?.status)
      .json({ error: errorFound[0]?.message });
  }
};

const updateReviews = async (req, res) => {
  const id = req.params;
  const review = req.body;
  try {
    const reviewUpdate = await updateReview(id, review);
    res.status(200).json({ review: reviewUpdate });
  } catch (error) {
    const errorFound = handleError(error.code) || [
      { status: 500, message: "Error interno del servidor" },
    ];
    return res
      .status(errorFound[0]?.status)
      .json({ error: errorFound[0]?.message });
  }
};

const deleteReviews = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await deleteReview(id);
    res
      .status(200)
      .json({ message: "Review eliminado correctamente", review: response });
  } catch (error) {
    const errorFound = handleError(error.code) || [
      { status: 500, message: "Error interno del servidor" },
    ];
    return res
      .status(errorFound[0]?.status)
      .json({ error: errorFound[0]?.message });
  }
};

export {
  getReviews,
  getReviewsId,
  getReviewsProductId,
  createReviews,
  updateReviews,
  deleteReviews,
};
