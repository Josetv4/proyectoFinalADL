import { getProduct, 
         getAllProduct,
         getProductId,
         getProductCategoryId, 
         getProductByUser,
         getProductByDescription,
         createProduct, 
         updateProduct, 
         deleteProduct,
        statusProduct } from "../models/productModel.js";

import { handleError } from "../utils/utils.js";

const getProducts = async (req, res) => {
  try {
    const products = await getProduct();
    res.status(200).json({ product : products });
  } catch (error) {
    const errorFound = handleError(error.code) || [
      { status: 500, message: "Error interno del servidor" },
    ];
    return res
      .status(errorFound[0]?.status)
      .json({ error: errorFound[0]?.message });
  }
};
const getAllProducts = async (req, res) => {
  try {
    const products = await getAllProduct();
    res.status(200).json({ product : products });
  } catch (error) {
    const errorFound = handleError(error.code) || [
      { status: 500, message: "Error interno del servidor" },
    ];
    return res
      .status(errorFound[0]?.status)
      .json({ error: errorFound[0]?.message });
  }
};

const getProductsId = async (req, res) => {
  
  const id = req.params 
  
  try {
    const products = await getProductId(id);
    res.status(200).json(products);
  } catch (error) {
    const errorFound = handleError(error.code) || [
      { status: 500, message: "Error interno del servidor" },
    ];
    return res
      .status(errorFound[0]?.status)
      .json({ error: errorFound[0]?.message });
  }
};
const getProductsCategoryId = async (req, res) => {
  
  const id = req.params 
  
  try {
    const products = await getProductCategoryId(id);
    res.status(200).json(products);
  } catch (error) {
    const errorFound = handleError(error.code) || [
      { status: 500, message: "Error interno del servidor" },
    ];
    return res
      .status(errorFound[0]?.status)
      .json({ error: errorFound[0]?.message });
  }
};
const getProductsByUsers = async (req, res) => {
  
  const id = req.params 
  
  try {
    const products = await getProductByUser(id);
    res.status(200).json({  product : products  });
  } catch (error) {
    const errorFound = handleError(error.code) || [
      { status: 500, message: "Error interno del servidor" },
    ];
    return res
      .status(errorFound[0]?.status)
      .json({ error: errorFound[0]?.message });
  }
};

const getProductsByDescription = async (req, res) => {
  
  const name = req.body;
  
  try {
    const products = await getProductByDescription(name);
    res.status(200).json(products);
  } catch (error) {
    const errorFound = handleError(error.code) || [
      { status: 500, message: "Error interno del servidor" },
    ];
    return res
      .status(errorFound[0]?.status)
      .json({ error: errorFound[0]?.message });
  }
};

const createNewProduct = async (req, res) => {
  try {
    const product = req.body
    const image = req.file.filename;
    const newProduct = await createProduct( product, image );
    res.status(201).json({ product: newProduct });
  } catch (error) {
    const errorFound = handleError(error.code) || [{ status: 500, message: 'Error interno del servidor' }];
    return res.status(errorFound[0]?.status).json({ error: errorFound[0]?.message });  
  }
};

const updateProducts = async (req, res) => {
  
  const { id } = req.params;
  const product = req.body;
  const image = req.file.filename;
  try {
    
    const productUpdate = await updateProduct(id, product, image);
    res.status(200).json({ product: productUpdate });
  } catch (error) {
    const errorFound = handleError(error.code) || [{ status: 500, message: 'Error interno del servidor' }];
    return res.status(errorFound[0]?.status).json({ error: errorFound[0]?.message });  
  }
};
const deleteProducts = async (req, res) => {
  
  const { id } = req.params;
  
  try {
    
    const response = await deleteProduct(id);
    res.status(200).json({ message: 'Producto eliminado correctamente', product: response });
  } catch (error) {
    const errorFound = handleError(error.code) || [{ status: 500, message: 'Error interno del servidor' }];
    return res.status(errorFound[0]?.status).json({ error: errorFound[0]?.message });  
  }
};
const statusProducts = async (req, res) => {
  
  const { id } = req.params;
  const { status } = req.body
  try {
    const response = await statusProduct(id, status);
    res.status(200).json({ message: 'producto actualizado correctamente', user: response });
  } catch (error) {
    const errorFound = handleError(error.code);
    return res
      .status(errorFound[0]?.status)
      .json({ error: errorFound[0]?.message });
  }
};

export {  getProducts, 
          getAllProducts,
          getProductsId,
          getProductsCategoryId, 
          getProductsByUsers,
          getProductsByDescription,
          createNewProduct,
          updateProducts,
          deleteProducts,
          statusProducts }