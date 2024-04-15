import pool from "../../../../config/db/conectionDb.js";

const getProduct = async () => {
  const SQLquery = {
    text: `SELECT p.product_id, p.name, p.description, p.price, p.stock, p.category_id, c.name as name_category, p.create_at, p.status, p.user_id, u.username as name_user, p.image_url, p.information
           FROM products p INNER JOIN categories c ON p.category_id = c.category_id INNER JOIN users u ON p.user_id = u.user_id WHERE p.status = 'A' order by product_id `,
  };

  const response = await pool.query(SQLquery);
  return response.rows;
};
const getAllProduct = async () => {
  const SQLquery = {
    text: `SELECT p.product_id, p.name, p.description, p.price, p.stock, p.category_id, c.name as name_category, p.create_at, p.status, p.user_id, u.username as name_user, p.image_url, p.information
           FROM products p INNER JOIN categories c ON p.category_id = c.category_id INNER JOIN users u ON p.user_id = u.user_id  order by product_id `,
  };

  const response = await pool.query(SQLquery);
  return response.rows;
};
const getProductId = async ({ id }) => {
  const SQLquery = {
    text: `SELECT p.product_id, p.name, p.description, p.price, p.stock, p.category_id, c.name as name_category, p.create_at, p.status, p.user_id, u.username as name_user, p.image_url, p.information
            FROM products p INNER JOIN categories c ON p.category_id = c.category_id INNER JOIN users u ON p.user_id = u.user_id 
            WHERE p.product_id = $1
            ORDER BY p.product_id`,
    values: [id],
  };

  const response = await pool.query(SQLquery);
  return response.rows[0];
};

const getProductCategoryId = async ({ id }) => {
  const SQLquery = {
    text: `SELECT p.product_id, p.name, p.description, p.price, p.stock, p.category_id, c.name as name_category, p.create_at, p.status, p.user_id, u.username as name_user, p.image_url, p.information
    FROM products p INNER JOIN categories c ON p.category_id = c.category_id INNER JOIN users u ON p.user_id = u.user_id 
           WHERE c.category_id = $1
           AND p.status = 'A'`,
    values: [id],
  };

  const response = await pool.query(SQLquery);
  return response.rows;
};
const getProductByUser = async ({ id }) => {
  const SQLquery = {
    text: `SELECT p.product_id, p.name, p.description, p.price, p.stock, p.category_id, c.name as name_category, p.create_at, p.status, p.user_id, u.username as name_user, p.image_url
            FROM products p INNER JOIN categories c ON p.category_id = c.category_id INNER JOIN users u ON p.user_id = u.user_id
           WHERE p.user_id = $1`,
    values: [id],
  };

  const response = await pool.query(SQLquery);
  return response.rows;
};

const getProductByDescription  = async ( { name } ) => {

  const SQLquery = {
    text: `SELECT p.product_id, p.name, p.description, p.price, p.stock, p.category_id, c.name as name_category, p.create_at, p.status, p.user_id, u.username as name_user, p.image_url FROM products p INNER JOIN categories c ON p.category_id = c.category_id INNER JOIN users u ON p.user_id = u.user_id WHERE UPPER(p.name) LIKE UPPER('%' || $1 || '%') `,
    values: [ name ],
  };
  console.log(SQLquery)
  const response = await pool.query(SQLquery);
  return response.rows;
};

const createProduct = async (
  { nameProducts, description, price, stock, category_id, statusProduct, user_id, information },
  image
) => {
  const SQLquery = {
    text: `INSERT INTO Products (name, description, price, stock, category_id, status, user_id,  image_url, information) 
           VALUES ($1, $2, $3, $4, $5, $6, $7, $8,$9) RETURNING *`,
    values: [
      nameProducts,
      description,
      price,
      stock,
      category_id,
      statusProduct,
      user_id,
      image,
      information
    ],
  };
  const response = await pool.query(SQLquery);
  return response.rows[0];
};

const updateProduct = async (
  id,
  { name, description, price, stock, category_id, status, user_id, information },
  image
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
             information = $8
             image_url = $9,
             WHERE product_id = $10 
             RETURNING *`,
    values: [
      name,
      description,
      price,
      stock,
      category_id,
      status,
      user_id,
      information,
      image,
      id,
    ],
  };
  const response = await pool.query(SQLquery);
  return response.rows[0];
};

const deleteProduct = async (id) => {
  const SQLquery = {
    text: `UPDATE products
             SET status = 'Borrado'  
             WHERE  product_id = $1 
             RETURNING *`,
    values: [id],
  };
  const response = await pool.query(SQLquery);
  return response.rowCount;
};
const statusProduct = async (id, status) => {
  const SQLquery = {
    text: `Update products SET status = $1 WHERE  product_id = $2 RETURNING *`,
    values: [status, id],
  };
  console.log(SQLquery);
  const response = await pool.query(SQLquery);
  return response.rows[0];
};
export {
  getProduct,
  getAllProduct,
  getProductId,
  getProductCategoryId,
  getProductByUser,
  getProductByDescription,
  createProduct,
  updateProduct,
  deleteProduct,
  statusProduct,
};
