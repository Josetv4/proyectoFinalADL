import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_URL_BACK;

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
const getAllProducts = async () => {
  try {
    const response = await axios.get("/products/all");
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
  const token = window.localStorage.getItem("token");
  try {
    const response = await axios.get("/carts", 
      {headers: { Authorization: `Bearer ${token}`}}
    );
    return { response: response.data, error: null, loading: false };
  } catch (error) {
    console.error("Error al obtener carritos:", error);
    return { response: [], error: "Error al obtener carritos", loading: false };
  }
};
const getCartUser = async (user_id) => {
  const token = window.localStorage.getItem("token")
  try {
    const response = await axios.get(`/cart/${user_id}`, {
      headers: { Authorization: `Bearer ${token}`},
    });
    return { response: response.data, error: null, loading: false };
  } catch (error) {
    console.error("Error al obtener carritos:", error);
    return { response: [], error: "Error al obtener carritos", loading: false };
  }
};
const getallCartUser = async (user_id) => {
  const token = window.localStorage.getItem("token")
  try {
    const response = await axios.get(`/cart/all/${user_id}`, {
      headers: { Authorization: `Bearer ${token}`},
    });
    return { response : response.data, error: null, loading: false };
  } catch (error) {
    console.error("Error al obtener carritos:", error);
    return { response: [], error: "Error al obtener carritos", loading: false };
  }
};
const postCartItems = async (user_id, product_id, quantity, price) => {
  const token = window.localStorage.getItem("token");
  try {
    const response = await axios.post("/cart", 
      {user_id, product_id, quantity, price}, 
      {headers: { Authorization: `Bearer ${token}`}}
    );
    return { response: response.data, error: null, loading: false };
  } catch (error) {
    console.error("Error al obtener carritos:", error);
    return { response: [], error: "Error al obtener carritos", loading: false };
  }
};
const updateCartItems = async (product_id, detail_id, cart_id, updateCart ) => {
  const token = window.localStorage.getItem("token")
  try {
    const response = await axios.put(
      `cart/${updateCart}/${product_id}`, 
      {detail_id, cart_id},
      { headers: {Authorization: `Bearer ${token}`}}
    );
    return { response: response.data, error: null, loading: false };
  } catch (error) {
    console.error("Error al modificar carrito:", error);
    return { response: [], error: "Error al modificar carrito", loading: false };
  }
};
const deleteCartItems = async (id_user) => {
  const token = window.localStorage.getItem("token")
  try {
    console.log(id_user);
    const response = await axios.delete(
      `cart/closeCart/${id_user}`,  
      { headers: {Authorization: `Bearer ${token}`}});
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

const postReviewProduct = async (product, user, rating, coments) => {
  try {
      const token = window.localStorage.getItem("token");
      const response = await axios.post(
          `/review`,
          { product, user, rating, coments },
          { headers: { Authorization: `Bearer ${token}` } }
      );
      return { statusCode : response.request.status , response: response.data, error: null };
  } catch (error) {
      return { error: error.message };
  }
};
const getReviewProductId = async (id) => {
  try {
    
      const response = await axios.get(`/review/${id}`)
      return { response: response.data, error: null };
  } catch (error) {
      return { error: error.message };
  }
};

const getProductDescription = async (name) => {
  try {
    const token = window.localStorage.getItem("token");
    const response = await axios.post(`/products/description`, { name } ,
      {
        
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return { response: response.data, error: null };
  } catch (error) {
    return { error : error.message };
  }
};

const createNewProduct = async (formData) => {
  
  console.log(formData)
  try {
    const token = window.localStorage.getItem("token");

    const response = await axios.post(`/products`, formData, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'multipart/form-data' 
      }
    });
    return { statusCode : response.request.status , response: response.data, error: null };
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
const getProductsByUser = async (userId) => {
  
  try {
    const token = window.localStorage.getItem("token");
    
    const response = await axios.get(`/products/user/${userId}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    });
    return { response , error: null, loading: false };
  } catch (error) {
    console.error("Error al obtener producto por usuario:", error);
    return {
      response: [],
      error,
      loading: false,
    };
  }
};
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
const   deleteFavoriteId = async ( id ) => {
  const token = window.localStorage.getItem("token");
  try {
      const response = await axios.delete(`/favorite/${id}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
      return { response, error: null };
  } catch (error) {
      return { error: error.message };
  }
};
const getReviewsByProduct = async (id) => {
  try {
    const response = await axios.get(`/review/product/${id}`);
    return { response: response.data, error: null, loading: false };
  } catch (error) {
    console.error("Error al obtener comentarios:", error);
    return {
      response: [],
      error: "Error al obtener comentarios",
      loading: false,
    };
  }
};
const createFavorite = async (dataFavorite) => {
  
  try {
    const token = window.localStorage.getItem("token");
    
    const response = await axios.post('/favorite/', dataFavorite,
    {
      headers: { Authorization: `Bearer ${token}` },
    });
    return { response , error: null, loading: false };
  } catch (error) {
    console.error("Error al crear favorite:", error);
    return {
      response: [],
      error,
      loading: false,
    };
  }
};
export {
  getProducts,
  getAllProducts,
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
  getReviewProductId,
  createNewProduct,
  getFavoritesbyUser,
  getProductsByUser,
  getReview,
  deleteFavoriteId,
  getallCartUser,
  getReviewsByProduct,
  createFavorite
};