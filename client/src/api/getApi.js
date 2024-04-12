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
const getCartUser = async (user_id) => {
  try {
    const response = await axios.get(`/cart/${user_id}`);
    return { response: response.data, error: null, loading: false };
  } catch (error) {
    console.error("Error al obtener carritos:", error);
    return { response: [], error: "Error al obtener carritos", loading: false };
  }
};
const postCartItems = async (user_id, product_id, quantity, price) => {
  try {
    const response = await axios.post("/cart", {user_id, product_id, quantity, price});
    return { response: response.data, error: null, loading: false };
  } catch (error) {
    console.error("Error al obtener carritos:", error);
    return { response: [], error: "Error al obtener carritos", loading: false };
  }
};
const updateCartItems = async (product_id, updateCart ) => {
  try {
    const response = await axios.put(
      `cart/${updateCart}/`,
      product_id,
    );
    return { response: response.data, error: null, loading: false };
  } catch (error) {
    console.error("Error al modificar carrito:", error);
    return { response: [], error: "Error al modificar carrito", loading: false };
  }
};
const deleteCartItems = async (detailId, cartId, product) => {
  try {
    const response = await axios.delete(
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
    const response = await axios.post("/users", userData);
    return { statusCode : response.request.status , response: response.data, error: null, loading: false };
  } catch (error) {
    return { statusCode : error.response.request.status, response: [], error: "Error al obtener registrar usuario", loading: false };
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
const getProductsbySearch = async (text) => {
  try {
    const response = await axios.get(`/products/category/${text}`);
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

const getUsers = async () => {
  try {
    const token = window.localStorage.getItem("token");
    const response = await axios.get("/users", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return { response: response.data };
  } catch (error) {
    console.error("Error al listar usuarios:", error);
    return { error };
  }
};

const getStatusUser = async (id, status) => {
  try {
    const token = window.localStorage.getItem("token");
    const response = await axios.put(
      `/users/status/${id}`,
      { status },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return { response: response.data, };
  } catch (error) {
    console.error("Error al cambiar status usuarios:", error);
    return { error };
  }
};

const updateUsers = async (id, userData) => {
  console.log("Datos del usuario a actualizar:", userData);
  try {
    const token = window.localStorage.getItem("token");
    const response = await axios.put(
      `/users/${id}`,
      userData,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return { response: response.data, error: null, loading: false };
  } catch (error) {
    console.error("Error al actualizar usuario:", error);
    return { response: [], error: "Error al actualizar usuario", loading: false };
  }
};

const getStatusProduct = async (id, status) => {
  try {
    const token = window.localStorage.getItem("token");
    const response = await axios.put(
      `/product/status/${id}`,
      { status },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return { response: response.data, error: null };
  } catch (error) {
    return { error : error.message };
  }
};

const postReviewProduct = async (rating, coments) => {
  try {
      const token = window.localStorage.getItem("token");
      const response = await axios.post(
          `/review`,
          { rating, coments },
          { headers: { Authorization: `Bearer ${token}` } }
      );
      return { response: response.data, error: null };
  } catch (error) {
      return { error: error.message };
  }
};
const getProductDescription = async (description) => {
  try {
    const token = window.localStorage.getItem("token");
    const response = await axios.post(`/product/description`, { description } ,
      {
        
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return { response: response.data, error: null };
  } catch (error) {
    return { error : error.message };
  }
};
const getFavoritesbyUser = async (userId) => {
  
  try {
    const token = window.localStorage.getItem("token");
    
    const response = await axios.get(`/favorite/user/${userId}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    });
    return { response: response.data, error: null, loading: false };
  } catch (error) {
    console.error("Error al obtener favorito por id:", error);
    return {
      response: [],
      error,
      loading: false,
    };
  }
};
<<<<<<< HEAD
const getReview = async (id) => {
  try {
    const response = await axios.get(`/review/${id}`);
    return { response: response.data, error: null, loading: false };
  } catch (error) {
    console.error("Error review", error);
    return {
      response: [],
      error: "Error al obtener review por id",
      loading: false,
    };
  }
}
=======

>>>>>>> 3e99601a33e46cc213e65d73857053b18fe38251
export {
  getProducts,
  getCartItems,
  getCartUser,
  postCartItems,
  updateCartItems,
  deleteCartItems,
  userRegister,
  loginUser,
  getUsers,
  getCategories,
  getProductsByCategory,
  getProductDescription,
  getProductsById,
  getStatusUser,
  getStatusProduct,
  getProductsbySearch,
  updateUsers,
  postReviewProduct,
  getFavoritesbyUser,
  getReview
};
