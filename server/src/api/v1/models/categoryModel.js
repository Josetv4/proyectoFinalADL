import pool from "../../../../config/db/conectionDb.js";

const getCategory = async () => {
  const SQLquery = {
    text: `SELECT category_id, name 
          FROM categories`,
  };
  const response = await pool.query(SQLquery);
  return response.rows;
};

const getCategoryId = async ({ id }) => {
  const SQLquery = {
    text: `SELECT category_id, name 
           FROM categories
           WHERE category_id = $1`,
    values: [id],
  };

  const response = await pool.query(SQLquery);
  return response.rows[0];
};

const createCategory = async ({ name }) => {
  const SQLquery = {
    text: `INSERT INTO categories (name) 
           VALUES ($1) RETURNING *`,
    values: [name],
  };
  const response = await pool.query(SQLquery);
  return response.rows[0];
};

const updateCategory = async ({ id }, { name }) => {
  const SQLquery = {
    text: `UPDATE categories 
             SET name = $1 
             WHERE category_id = $2 
             RETURNING *`,
    values: [name, id],
  };
  const response = await pool.query(SQLquery);
  return response.rows[0];
};

const deleteCategory = async (id) => {
  const SQLquery = {
    text: `DELETE FROM categories 
           WHERE category_id = $1 
           RETURNING *`,
    values: [id],
  };
  const response = await pool.query(SQLquery);
  if (response.rows.length === 0) {
    throw new Error("No se encontró ninguna categoria con el ID proporcionado");
  }
  return response.rows[0];
};

export {
  getCategory,
  getCategoryId,
  createCategory,
  updateCategory,
  deleteCategory,
};
