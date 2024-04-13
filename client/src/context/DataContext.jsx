import { createContext, useContext, useEffect, useState } from "react";
import { getProducts, getCartItems, getCartUser, postCartItems, updateCartItems, deleteCartItems, getProductsByUser, getallCartUser } from "../api/getApi.js";
import {AuthContext} from "./AuthContext.jsx";


export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const { userId } = useContext(AuthContext);

  const [cartUser, setCartUser] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [productSeller, setProductSeller] = useState([]);
  const [cartsAllbyUser, setcartsAllbyUser] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if (userId) {
      fetchProductsByUser(userId);
      fetchCartsAllbyUser(userId)
    }
  }, [userId])
  
  useEffect(() =>{
    userId || userId !== null ? fetchCartUser(): "";
  }, [userId]);
 
  const fetchProductsByUser = async (userId)=> {
    try {
      const { response, error, loading } = await getProductsByUser(userId);
      setProductSeller(response.data);
      setError(error);
      setLoading(loading);
    } catch (error) {
      console.error("Error al obtener productos:", error);
      setError("Error al obtener productos");
      setLoading(false);
    }
  }
  const fetchCartsAllbyUser = async (userId)=> {
    try {
      const { response, error, loading } = await getallCartUser(userId);
      setcartsAllbyUser(response.data);
      setError(error);
      setLoading(loading);
    } catch (error) {
      console.error("Error al obtener todos los carritos:", error);
      setError("Error al obtener todos los carritos ");
      setLoading(false);
    }
  }
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

  const addCartItem = async ( userId, product_id, quantity, price ) => {
    try {
      const { response, error, loading } = await postCartItems(userId, product_id, quantity, price);
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

  const updateCartItem = async ( product_id, detail_id, cart_id, cartUpdate) => {
    try {
      console.log(cartUpdate);
      const { response, error, loading } = await updateCartItems(product_id, detail_id, cart_id, cartUpdate);
      setCartItems(response);
      setError(error);
      setLoading(loading);
     

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
        productSeller,
        error,
        loading,
        cartItems,
        cartUser,
        addCartItem,
        updateCartItem,
        deleteCartItem,
        cartsAllbyUser
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
