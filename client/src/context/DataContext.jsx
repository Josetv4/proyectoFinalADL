import axios from 'axios';
import { createContext, useEffect, useState } from "react";
import { getProducts } from '../api/getApi.js'

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);


  useEffect(() => {
/*      fetchCartItems(); */
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
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
  };

  const fetchCartItems = async () => {
    try {

      const response = await axios.get("http://localhost:4000/api/v1/cart/items");
      setCartItems(response.data);
    } catch (error) {
      console.error("Error al obtener elementos del carrito:", error);
    }
  };

  const addCartItem = async (product) => {
    try {
      await axios.post("http://localhost:4000/api/v1/cart/items", product);
      fetchCartItems();
    } catch (error) {
      console.error("Error al agregar producto al carrito:", error);
    }
  };

  const updateCartItem = async (detailId, updatedProduct) => {
    try {
      await axios.put(`http://localhost:4000/api/v1/cart/items/${detailId}`, updatedProduct);
      fetchCartItems();
    } catch (error) {
      console.error("Error al actualizar producto del carrito:", error);
    }
  };

  const deleteCartItem = async (detailId) => {
    try {
      await axios.delete(`/api/cart/items/${detailId}`);
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
