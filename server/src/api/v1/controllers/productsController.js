import { getProduct, getProductId, createProduct, updateProduct, deleteProduct } from "../models/productModel.js";

import { handleError } from "../utils/utils.js";

const getProducts = async (req, res) => {
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

const getProductsId = async (req, res) => {
  
  const id = req.params 
  
  try {
    const products = await getProductId(id);
    res.status(200).json({ product : products  });
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
    //const image = req.file.filename;
    const newProduct = await createProduct(product);
    res.status(201).json({ product: newProduct });
  } catch (error) {
    console.log(error);
    /* const errorFound = handleError(error.code);
    return res
      .status(errorFound[0]?.status)
      .json({ error: errorFound[0]?.message }); */
  }
};

const updateProducts = async (req, res) => {
  
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
const deleteProducts = async (req, res) => {
  
  const { id } = req.params;
  
  try {
    
    const response = await deleteProduct(id);
    res.status(200).json({ message: 'Producto eliminado correctamente', product: response });
  } catch (error) {
    console.log(error)
    const errorFound = handleError(error.code);
    return res
      .status(errorFound[0]?.status)
      .json({ error: errorFound[0]?.message });
  }
};

export {  getProducts, 
          getProductsId, 
          createNewProduct,
          updateProducts,
          deleteProducts }