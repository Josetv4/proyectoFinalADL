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

  console.log(id)
  const SQLquery = {
    text: `SELECT review_id ,
                  product_id,
                  user_id,
                  rating,
                  comment,
                  create_at
                FROM reviews
                WHERE review_id = $1`,
    values: [ id ],
  };

  const response = await pool.query(SQLquery);
  return response.rows;
};
const getReviewProductId = async (productId) => {

  const SQLquery = {
    text: `SELECT r.review_id ,
                  r.product_id,
                  r.user_id,
                  u.username,
                  r.rating,
                  r.comment,
                  r.create_at
                FROM reviews r, users u
                WHERE r.user_id = u.user_id
                AND product_id = $1`,
    values: [ productId ],
  };

  const response = await pool.query(SQLquery);
  return response.rows;
};

const createReview = async ({product, user, rating, coments}) => {
  const SQLquery = {
    text: `INSERT INTO reviews(product_id, user_id, rating, comment) VALUES ($1, $2, $3, $4) RETURNING *`,
    values: [product, user, rating, coments],
  };
  console.log(SQLquery)
  const response = await pool.query(SQLquery);
  return response.rows;
};

const updateReview = async ( { id }, { product, user, rating, comment }) => {
    const SQLquery = {
      text: `UPDATE reviews
                SET product_id = $1, 
                    user_id = $2, 
                    rating = $3, 
                    comment = $4 
             WHERE review_id = $5
             RETURNING *`,
      values: [ product, user, rating, comment, id ],
    };
  
    const response = await pool.query(SQLquery);
    return response.rows[0];
  };
  const deleteReview = async ( id ) => {
    const SQLquery = {
      text: `DELETE FROM reviews 
             WHERE review_id = $1
             RETURNING *`,
      values: [ id ],
    };
  
    const response = await pool.query(SQLquery);
    return response.rows;
  };
export { getReview, getReviewId, getReviewProductId,  createReview, updateReview, deleteReview };
