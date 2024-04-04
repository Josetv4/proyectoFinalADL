import { getCategory, getCategoryId, createCategory, updateCategory, deleteCategory } from "../models/categoryModel.js";

import { handleError } from "../utils/utils.js";

const getCategories = async (req, res) => {
  try {
    const categories = await getCategory();
    res.status(200).json({ category : categories });
  } catch (error) {
    const errorFound = handleError(error.code);
    return res
      .status(errorFound[0]?.status)
      .json({ error: errorFound[0]?.message });
  }
};

const getCategoriesId = async (req, res) => {
  
  const id = req.params 
  
  try {
    const categories = await getCategoryId(id);
    res.status(200).json({ category : categories });
  } catch (error) {
    const errorFound = handleError(error.code);
    return res
      .status(errorFound[0]?.status)
      .json({ error: errorFound[0]?.message });
  }
};

const createNewCategory = async (req, res) => {
  try {
    const category = req.body;
    const newCategory = await createCategory(category);
    res.status(201).json({ category: newCategory });
  } catch (error) {
    const errorFound = handleError(error.code);
    return res
      .status(errorFound[0]?.status)
      .json({ error: errorFound[0]?.message });
  }
};

const updateCategories = async (req, res) => {
  
  const id = req.params;
  const category = req.body;
  try {
    
    const categoryUpdate = await updateCategory(id, category);
    res.status(200).json({ category : categoryUpdate });
  } catch (error) {
    const errorFound = handleError(error.code);
    return res
      .status(errorFound[0]?.status)
      .json({ error: errorFound[0]?.message });
  }
};
const deleteCategories = async (req, res) => {
  
  const { id } = req.params;
  
  try {
    
    const response = await deleteCategory(id);
    res.status(200).json({ message: 'Categoria eliminado correctamente', category: response });
  } catch (error) {
    const errorFound = handleError(error.code);
    return res
      .status(errorFound[0]?.status)
      .json({ error: errorFound[0]?.message });
  }
};

export {  getCategories, 
          getCategoriesId, 
          createNewCategory,
          updateCategories,
          deleteCategories }