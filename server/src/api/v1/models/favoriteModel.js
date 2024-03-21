import pool from "../../../../config/db/conectionDb.js";

const getFavorite = async () => {
  const SQLquery = {
    text: `SELECT favorites_id, product_id, user_id
          FROM favorites`,
  };

  const response = await pool.query(SQLquery);
  return response.rows;
};

const getFavoriteId = async ({ id }) => {
  const SQLquery = {
    text: `SELECT favorites_id, product_id, user_id
           FROM favorites,
           WHERE favorites_id = $1`,
    values: [id],
  };

  const response = await pool.query(SQLquery);
  return response.rows[0];
};
const getFavoriteUser = async ({ id }) => {
  const SQLquery = {
    text: `SELECT favorites_id, product_id, user_id
           FROM favorites,
           WHERE user_id = $1`,
    values: [id],
  };

  const response = await pool.query(SQLquery);
  return response.rows[0];
};

const createFavorite = async ({ product, user }) => {
  const hashedPassword = bcrypt.hashSync(password);
  const SQLquery = {
    text: `INSERT INTO favorites (product_id, user_id) 
           VALUES ($1, $2) RETURNING *`,
    values: [product, user],
  };
  const response = await pool.query(SQLquery);
  return response.rows[0];
};

const updateFavorite = async ({ id }, { product, user }) => {
  const SQLquery = {
    text: `UPDATE favorites 
             SET product_id = $1, 
                 user_id = $2
             WHERE user_id = $3 
             RETURNING *`,
    values: [product, user, id],
  };
  const response = await pool.query(SQLquery);
  return response.rows[0];
};

const deleteFavorite = async (id) => {
  const SQLquery = {
    text: `DELETE FROM favorites 
             WHERE  favorites = $1 
             RETURNING *`,
    values: [id],
  };
  const response = await pool.query(SQLquery);
  if (response.rows.length === 0) {
    throw new Error("No se encontró ningún usuario con el ID proporcionado");
  }
  return response.rows[0];
};

export {
  getFavorite,
  getFavoriteId,
  getFavoriteUser,
  createFavorite,
  updateFavorite,
  deleteFavorite,
};
