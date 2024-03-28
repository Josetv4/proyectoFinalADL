import axios from 'axios'

 axios.defaults.baseURL = 'http://localhost:4000/api/v1';
 
 const getProducts = async () => {
   try {
     const response = await axios.get('/products');
     return { response: response.data, 
              error: null, 
              loading: false };
   } catch (error) {
     console.error("Error al obtener productos:", error);
     return { response: [], 
              error: "Error al obtener productos", 
              loading: false };
   }
 };

export {
  getProducts,

}