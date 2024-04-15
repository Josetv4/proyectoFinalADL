import pool from "../../../../config/db/conectionDb.js";

const getFavorite = async () => {
  const SQLquery = {
    text: `SELECT f.favorites_id, f.product_id, f.user_id 
           FROM favorites f 
           INNER JOIN products p ON f.product_id = p.product_id
           INNER JOIN users s ON f.user_id = s.user_id `,
  };

  const response = await pool.query(SQLquery);
  return response.rows;
};

const getFavoriteId = async ({ id }) => {
  const SQLquery = {
    text: `SELECT f.favorites_id, f.product_id, f.user_id
            FROM favorites f
            INNER JOIN products p ON f.product_id = p.product_id
            INNER JOIN users s ON f.user_id = s.user_id
            WHERE f.favorites_id = $1`,
    values: [id],
  };

  const response = await pool.query(SQLquery);
  
  return response.rows[0];
};
const getFavoriteUser = async ( { id } ) => {
  const SQLquery = {
    text: `SELECT f.favorites_id, f.product_id, f.user_id, p.price, p.stock, p.category_id, s.username as name_user, p.image_url, p.name 
            FROM favorites f 
            INNER JOIN products p ON f.product_id = p.product_id
            INNER JOIN users s ON f.user_id = s.user_id
           WHERE f.user_id = $1`,
           
    values: [ id ],
  };

  const response = await pool.query(SQLquery);
  return response.rows;
};

const createFavorite = async ({ product, user }) => {
 
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
             WHERE  favorites_id = $1 
             RETURNING *`,
    values: [id],
  };
  const response = await pool.query(SQLquery);
  return response.rowCount;

};

export {
  getFavorite,
  getFavoriteId,
  getFavoriteUser,
  createFavorite,
  updateFavorite,
  deleteFavorite,
};
