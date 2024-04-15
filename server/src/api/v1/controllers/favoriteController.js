import {
  getFavorite,
  getFavoriteId,
  getFavoriteUser,
  createFavorite,
  updateFavorite,
  deleteFavorite,
} from "../models/favoriteModel.js";

import { handleError } from "../utils/utils.js";

const getFavorites = async (req, res) => {
  try {
    const favorites = await getFavorite();
    res.status(200).json({ favorite: favorites });
  } catch (error) {
    const errorFound = handleError(error.code) || [
      { status: 500, message: "Error interno del servidor" },
    ];
    return res
      .status(errorFound[0]?.status)
      .json({ error: errorFound[0]?.message });
  }
};

const getFavoritesId = async (req, res) => {
  const { id } = req.params;

  try {
    const favorites = await getFavoriteId(id);
    res.status(200).json({ favorite: favorites });
  } catch (error) {
    const errorFound = handleError(error.code) || [
      { status: 500, message: "Error interno del servidor" },
    ];
    return res
      .status(errorFound[0]?.status)
      .json({ error: errorFound[0]?.message });
  }
};
const getFavoritesUser = async (req, res) => {
  
  const  id  = req.params;
  
  try {
    const favorites = await getFavoriteUser(id);
    res.status(200).json(favorites);
  } catch (error) {
    const errorFound = handleError(error.code) || [
      { status: 500, message: "Error interno del servidor" },
    ];
    return res
      .status(errorFound[0]?.status)
      .json({ error: errorFound[0]?.message });
  }
};

const createFavorites = async (req, res) => {
  try {
    const favorite = req.body;
    const newFavorites = await createFavorite(favorite);
    res.status(201).json(newFavorites);
  } catch (error) {
    const errorFound = handleError(error.code) || [
      { status: 500, message: "Error interno del servidor" },
    ];
    return res
      .status(errorFound[0]?.status)
      .json({ error: errorFound[0]?.message });
  }
};

const updateFavorites = async (req, res) => {
  const id = req.params;
  const favorite = req.body;
  try {
    const favoriteUpdate = await updateFavorite(id, favorite);
    res.status(200).json({ favorite: favoriteUpdate });
  } catch (error) {
    const errorFound = handleError(error.code) || [
      { status: 500, message: "Error interno del servidor" },
    ];
    return res
      .status(errorFound[0]?.status)
      .json({ error: errorFound[0]?.message });
  }
};
const deleteFavorites = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await deleteFavorite(id);
    res
      .status(200)
      .json({ message: "Favorito eliminado correctamente", favorite: response });
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
  getFavorites,
  getFavoritesId,
  getFavoritesUser,
  createFavorites,
  updateFavorites,
  deleteFavorites,
};
