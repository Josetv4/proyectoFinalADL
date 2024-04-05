import pool from "../../../../config/db/conectionDb.js";

const getProduct = async () => {
  const SQLquery = {
    text: `SELECT product_id, name, description, price, stock, category_id, create_at, status, user_id, image_url
          FROM products`,
  };

  const response = await pool.query(SQLquery);
  return response.rows;
};

const getProductId = async ({ id }) => {
  const SQLquery = {
    text: `SELECT product_id, name, description, price, stock, category_id, create_at, status, user_id, image_url
           FROM products
           WHERE product_id = $1`,
    values: [id],
  };

  const response = await pool.query(SQLquery);
  return response.rows[0];
};

const getProductCategoryId = async ({ id }) => {
  const SQLquery = {
    text: `SELECT product_id, name, description, price, stock, category_id, create_at, status, user_id, image_url
           FROM products
           WHERE category_id = $1`,
    values: [id],
  };

  const response = await pool.query(SQLquery);
  return response.rows;
};
const getProductByUser = async ({ id }) => {
  const SQLquery = {
    text: `SELECT product_id, name, description, price, stock, category_id, create_at, status, user_id, image_url
           FROM products
           WHERE user_id = $1`,
    values: [id],
  };

  const response = await pool.query(SQLquery);
  return response.rows[0];
};

const createProduct = async ( { name,  description,  price,  stock,  category_id,  status,  user_id } , image) => {
  const SQLquery = {
    text: `INSERT INTO Products (name, description, price, stock, category_id, status, user_id, image_url) 
           VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
    values: [ name, description, price, stock, category_id, status, user_id, image ],
  };
  const response = await pool.query(SQLquery);
  return response.rows[0];
};

const updateProduct = async (
   id ,
  {
    name,
    description,
    price,
    stock,
    category_id,
    status,
    user_id,
  }, image
) => {

  const SQLquery = {
    text: `UPDATE products 
             SET name = $1,
             description = $2,
             price = $3,
             stock = $4,
             category_id = $5,
             status = $6,
             user_id = $7,
             image_url = $8
             WHERE product_id = $9 
             RETURNING *`,
    values: [
      name,
      description,
      price,
      stock,
      category_id,
      status,
      user_id,
      image,
      id
    ],
  };
  const response = await pool.query(SQLquery);
  return response.rows[0];
};

const deleteProduct = async ( id )  => {
  const SQLquery = {
    text: `UPDATE products
             SET status = 'Borrado'  
             WHERE  product_id = $1 
             RETURNING *`,
    values: [ id ],
  };
  const response = await pool.query(SQLquery);
  return response.rowCount;
};

export {
  getProduct,
  getProductId,
  getProductCategoryId,
  getProductByUser,
  createProduct,
  updateProduct,
  deleteProduct,
};
