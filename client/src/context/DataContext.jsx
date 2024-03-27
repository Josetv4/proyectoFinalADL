import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);


  useEffect(() => {
    fetchUserData();
    fetchCartItems();
    fetchProducts();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await axios.get(`localhost:4000/api/v1/user`);
      setUser(response.data.user);
    } catch (error) {
      console.error("Error al obtener datos de usuario:", error);
      setUser(null);
    }
  };

  const fetchCartItems = async () => {
    try {
      const response = await axios.get("/api/cart/items");
      setCartItems(response.data);
    } catch (error) {
      console.error("Error al obtener elementos del carrito:", error);
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await axios.get("/api/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error al obtener productos:", error);
    }
  };

  const login = async (credentials) => {
    try {
      const response = await axios.post("/api/login", credentials);
      setUser(response.data.user);
      sessionStorage.setItem("token", response.data.token);
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      throw error;
    }
  };

  const register = async (userData) => {
    try {
      const response = await axios.post("/api/register", userData);
      setUser(response.data.user);
    } catch (error) {
      console.error("Error al registrarse:", error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await axios.post("/api/logout");
      setUser(null);
      sessionStorage.removeItem("token");
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  const addCartItem = async (product) => {
    try {
      await axios.post("/api/cart/items", product);
      fetchCartItems();
    } catch (error) {
      console.error("Error al agregar producto al carrito:", error);
    }
  };

  const updateCartItem = async (detailId, updatedProduct) => {
    try {
      await axios.put(`/api/cart/items/${detailId}`, updatedProduct);
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
        user,
        cartItems,
        products,
        login,
        register,
        logout,
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
