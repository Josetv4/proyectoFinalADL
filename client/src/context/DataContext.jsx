import { createContext, useContext, useEffect, useState } from "react";
import {
  getProducts,
  getCartItems,
  getCartUser,
  postCartItems,
  updateCartItems,
  deleteCartItems,
  getProductsByUser,
  
} from "../api/getApi.js";

import { AuthContext } from "./AuthContext.jsx";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const { userId } = useContext(AuthContext);
 console.log(userId)

  const [cartUser, setCartUser] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const [productUser, setProductsUser] = useState([])
  

  useEffect(() => {
    fetchCartItems();
    fetchProducts();
  }, []);

  
  useEffect(() => {
<<<<<<< HEAD
    if (userId) {
      fetchProductsByUser(userId);
    }
=======
    fetchProducts();
  }, []);
  useEffect(() =>{
    userId || userId !== null ? fetchCartUser(): "";
>>>>>>> 79dc3e4 (Subiendo cambios del carrito y conectando productos del home al backend)
  }, [userId]);
 

  const fetchProductsByUser = async (userId) => {
    try {
      const products = await getProductsByUser(userId);
      setProductsUser(products);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
   const fetchProducts = async ()=> {
    try {
      const { response, error, loading } = await getProducts();
      setProducts(response);
      setError(error);
      setLoading(loading);
    } catch (error) {
      console.error("Error al obtener productos:", error);
      setError("Error al obtener productos");
      setLoading(false);
    }
  } 
  
  const fetchCartItems = async () => {
    try {
      const { response, error, loading } = await getCartItems();
      setCartItems(response);
      setError(error);
      setLoading(loading);
    } catch (error) {
      console.error("Error al obtener carritos:", error);
      setError("Error al obtener carritos");
      setLoading(false);
    }
  };
  const fetchCartUser = async () => {
    try {
      const { response, error, loading } = await getCartUser(userId);
      setCartUser(response);
      setError(error);
      setLoading(loading);
    } catch (error) {
      console.error("Error al obtener carritos:", error);
      setError("Error al obtener carritos");
      setLoading(false);
    }
  };

  const addCartItem = async (userId, product_id, quantity, price) => {
    try {
      const { response, error, loading } = await postCartItems(
        userId,
        product_id,
        quantity,
        price
      );
      setCartItems(response);
      setError(error);
      setLoading(loading);

      fetchCartItems();
    } catch (error) {
      console.error("Error al obtener carritos:", error);
      setError("Error al obtener carritos");
      setLoading(false);
    }
  };

<<<<<<< HEAD
  const updateCartItem = async (product_id, cartUpdate) => {
    try {
      console.log(cartUpdate);
      const { response, error, loading } = await updateCartItems(
        product_id,
        cartUpdate
      );
      setCartItems(response);
      setError(error);
      setLoading(loading);

      fetchCartItems();
=======
  const updateCartItem = async ( product_id, detail_id, cart_id, cartUpdate) => {
    try {
      console.log(cartUpdate);
      const { response, error, loading } = await updateCartItems(product_id, detail_id, cart_id, cartUpdate);
      setCartItems(response);
      setError(error);
      setLoading(loading);
     

>>>>>>> 79dc3e4 (Subiendo cambios del carrito y conectando productos del home al backend)
    } catch (error) {
      console.error("Error al actualizar producto del carrito:", error);
    }
  };

  const deleteCartItem = async (detailId, cartId) => {
    try {
      const { response, error, loading } = await deleteCartItems(
        detailId,
        cartId
      );
      setCartItems(response);
      setError(error);
      setLoading(loading);
      fetchCartItems();
    } catch (error) {
      console.error("Error al eliminar producto del carrito:", error);
    }
  };
  return (
    <DataContext.Provider
      value={{
        products,
        userId,
        error,
        loading,
        cartItems,
        cartUser,
        addCartItem,
        updateCartItem,
        deleteCartItem,
        productUser
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
