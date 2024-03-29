import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { getProducts, getCartItems, postCartItems, updateCartItems, deleteCartItems } from "../api/getApi.js";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCartItems();
    fetchProducts();
  }, []);

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

  const addCartItem = async (product) => {
    try {
      const { response, error, loading } = await postCartItems(product);
      setCartItems(response);
      setError(error);
      setLoading(loading);

      fetchCartItems()

    } catch (error) {
      console.error("Error al obtener carritos:", error);
      setError("Error al obtener carritos");
      setLoading(false);
    }
  };

  const updateCartItem = async ( detailId, cartId, product) => {
    try {

      const { response, error, loading } = await updateCartItems( detailId, cartId, product);
      setCartItems(response);
      setError(error);
      setLoading(loading);
     
      fetchCartItems();
    } catch (error) {
      console.error("Error al actualizar producto del carrito:", error);
    }
  };

  const deleteCartItem = async (detailId, cartId) => {
    try {
      const { response, error, loading } = await deleteCartItems( detailId, cartId);
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
        error,
        loading,
        cartItems,
        addCartItem,
        updateCartItem,
        deleteCartItem,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
