import { getProduct, getProductId, createProduct, updateProduct, deleteProduct } from "../models/userModel.js";

import { handleError } from "../utils/utils.js";

const getProduct = async (req, res) => {
  try {
    const products = await getProduct();
    res.status(200).json({ product : products });
  } catch (error) {
    const errorFound = handleError(error.code);
    return res
      .status(errorFound[0].status)
      .json({ error: errorFound[0].message });
  }
};

const getProductId = async (req, res) => {
  
  const id = req.params 
  
  try {
    const products = await getProductId(id);
    res.status(200).json({ user : products  });
  } catch (error) {
    const errorFound = handleError(error.code);
    return res
      .status(errorFound[0].status)
      .json({ error: errorFound[0].message });
  }
};

const createNewProduct = async (req, res) => {
  try {
    const product = req.body;
    const newProduct = await createProduct(product);
    res.status(201).json({ product: newProduct });
  } catch (error) {
    const errorFound = handleError(error.code);
    return res
      .status(errorFound[0].status)
      .json({ error: errorFound[0].message });
  }
};

const updateProduct = async (req, res) => {
  
  const id = req.params;
  const product = req.body;
  try {
    
    const productUpdate = await updateProduct(id, product);
    res.status(201).json({ product: productUpdate });
  } catch (error) {
    const errorFound = handleError(error.code);
    return res
      .status(errorFound[0].status)
      .json({ error: errorFound[0].message });
  }
};
const deleteProduct = async (req, res) => {
  
  const { id } = req.params;
  
  try {
    
    const response = await deleteProduct(id);
    res.status(200).json({ message: 'Usuario eliminado correctamente', user: response });
  } catch (error) {
    const errorFound = handleError(error.code);
    return res
      .status(errorFound[0].status)
      .json({ error: errorFound[0].message });
  }
};

export {  getProducts, 
          getProductsId, 
          createNewProduct,
          updateProducts,
          deleteProducts }