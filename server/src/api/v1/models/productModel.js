import pool from "../../../../config/db/conectionDb.js";

const getProduct = async () => {
  const SQLquery = {
    text: `SELECT product_id, name, description, price, quantity, category, image_url, post_date, post_status, user_id
          FROM products`,
  };

  const response = await pool.query(SQLquery);
  return response.rows;
};

const getProductId = async ({ id }) => {
  const SQLquery = {
    text: `SELECT product_id, name, description, price, quantity, category, image_url, post_date, post_status, user_id
           FROM products
           WHERE product_id = $1`,
    values: [id],
  };

  const response = await pool.query(SQLquery);
  return response.rows[0];
};

const createProduct = async ({
  name,
  description,
  price,
  quantity,
  category,
  image_url,
  post_status,
  user_id,
}) => {
  const SQLquery = {
    text: `INSERT INTO Products (name, description, price, quantity, category, image_url, post_status, user_id) 
           VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
    values: [
      name,
      description,
      price,
      quantity,
      category,
      image_url,
      post_status,
      user_id,
    ],
  };
  const response = await pool.query(SQLquery);
  return response.rows[0];
};

const updateProduct = async (
  { id },
  {
    name,
    description,
    price,
    quantity,
    category,
    image_url,
    post_status,
    user_id,
  }
) => {

  const SQLquery = {
    text: `UPDATE products 
             SET name = $1,
             description = $2,
             price = $3,
             quantity = $4,
             category = $5,
             image_url = $6,
             post_status = $7,
             user_id = $8
             WHERE product_id = $9 
             RETURNING *`,
    values: [
      name,
      description,
      price,
      quantity,
      category,
      image_url,
      post_status,
      user_id,
      id
    ],
  };
  const response = await pool.query(SQLquery);
  return response.rows[0];
};

const deleteProduct = async (id) => {
  const SQLquery = {
    text: `DELETE FROM products 
             WHERE  product_id = $1 
             RETURNING *`,
    values: [id],
  };
  const response = await pool.query(SQLquery);
  return response.rowCount;
};

export {
  getProduct,
  getProductId,
  createProduct,
  updateProduct,
  deleteProduct,
};
