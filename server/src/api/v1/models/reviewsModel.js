import pool from "../../../../config/db/conectionDb.js";

const getReview = async () => {
  const SQLquery = {
    text: `SELECT review_id ,
                        product_id,
                        user_id,
                        rating,
                        comment,
                        create_at
                FROM reviews`,
  };

  const response = await pool.query(SQLquery);
  return response.rows;
};

const getReviewId = async (id) => {
  const SQLquery = {
    text: `SELECT review_id ,
                  product_id,
                  user_id,
                  rating,
                  comment,
                  create_at
                FROM reviews
                WHERE review_id = $1`,
    values: [id],
  };

  const response = await pool.query(SQLquery);
  return response.rows;
};

const createReview = async (product, user, rating, comment) => {
  const SQLquery = {
    text: `INSERT INTO reviews(product, user, rating, comment) 
             VALUES ($1, $2, $3, $4)`,
    values: [product, user, rating, comment],
  };

  const response = await pool.query(SQLquery);
  return response.rows;
};

const updateReview = async ( { id }, product, user, rating, comment) => {
    const SQLquery = {
      text: `UPDATE reviews
                SET product = $1, 
                    user = $2, 
                    rating = $3, 
                    comment = $4 
             WHERE review_id = $5
             RETURNING *`,
      values: [ product, user, rating, comment, id ],
    };
  
    const response = await pool.query(SQLquery);
    return response.rows;
  };
  const deleteReview = async ( id ) => {
    const SQLquery = {
      text: `DELETE FROM reviews 
             WHERE review_id = $1`,
      values: [ id ],
    };
  
    const response = await pool.query(SQLquery);
    return response.rows;
  };
export { getReview, getReviewId, createReview, updateReview };
