import axios from "axios";

axios.defaults.baseURL = "http://localhost:4000/api/v1";

const getProducts = async () => {
  try {
    const response = await axios.get("/products");
    return { response: response.data, error: null, loading: false };
  } catch (error) {
    console.error("Error al obtener productos:", error);
    return {
      response: [],
      error: "Error al obtener productos",
      loading: false,
    };
  }
};

const getCartItems = async () => {
  try {
    const response = await axios.get("/carts");
    return { response: response.data, error: null, loading: false };
  } catch (error) {
    console.error("Error al obtener carritos:", error);
    return { response: [], error: "Error al obtener carritos", loading: false };
  }
};

const postCartItems = async (products) => {
  try {
    const response = await axios.get("/carts", products);
    return { response: response.data, error: null, loading: false };
  } catch (error) {
    console.error("Error al obtener carritos:", error);
    return { response: [], error: "Error al obtener carritos", loading: false };
  }
};
const updateCartItems = async (detailId, cartId, product) => {
  try {
    const response = await axios.axios.put(
      `cart/items/${detailId}`,
      cartId,
      product
    );
    return { response: response.data, error: null, loading: false };
  } catch (error) {
    console.error("Error al obtener carritos:", error);
    return { response: [], error: "Error al obtener carritos", loading: false };
  }
};
const deleteCartItems = async (detailId, cartId, product) => {
  try {
    const response = await axios.axios.delete(
      `cart/items/${detailId}`,
      cartId,
      product
    );
    return { response: response.data, error: null, loading: false };
  } catch (error) {
    console.error("Error al obtener carritos:", error);
    return { response: [], error: "Error al obtener carritos", loading: false };
  }
};

const userRegister = async (userData) => {
  try {
    const response = await axios.post("/register", userData);
    return { response: response.data, error: null, loading: false };
  } catch (error) {
    console.error("Error al obtener carritos:", error);
    return { response: [], error: "Error al obtener carritos", loading: false };
  }
};

const loginUser = async (userData) => {
  try {
    const response = await axios.post("/login", userData);
    return { response: response.data, error: null, loading: false };
  } catch (error) {
    console.error("Error al iniciar sesión", error);
    return { response: [], error: "Error al iniciar sesión", loading: false };
  }
};
const getCategories = async () => {
  try {
    const response = await axios.get("/category");
    return { response: response.data, error: null, loading: false };
  } catch (error) {
    console.error("Error al obtener categorias:", error);
    return {
      response: [],
      error: "Error al obtener categorias",
      loading: false,
    };
  }
};

const getProductsByCategory = async (id) => {
  try {
    const response = await axios.get(`/products/category/${id}`);
    return { response: response.data, error: null, loading: false };
  } catch (error) {
    console.error("Error al obtener productos por categoria:", error);
    return {
      response: [],
      error: "Error al obtener productos por categoria",
      loading: false,
    };
  }
};
const getProductsById = async (id) => {
  try {
    const response = await axios.get(`/products/${id}`);
    return { response: response.data, error: null, loading: false };
  } catch (error) {
    console.error("Error al obtener producto por id:", error);
    return {
      response: [],
      error: "Error al obtener producto por id",
      loading: false,
    };
  }
};

export {
  getProducts,
  getCartItems,
  postCartItems,
  updateCartItems,
  deleteCartItems,
  userRegister,
  loginUser,
  getCategories,
  getProductsByCategory,
  getProductsById,
};
