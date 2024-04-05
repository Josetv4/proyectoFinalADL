import pool from "../../../../config/db/conectionDb.js";

const getCarts = async () => {
  const SQLquery = {
    text: `SELECT c.cart_id, c.user_id, ci.detail_id, ci.product_id, ci.quantity, ci.price
            FROM cart c
            INNER JOIN cart_items ci ON c.cart_id = ci.cart_id`,
  };

  const response = await pool.query(SQLquery);
  return response.rows;
};

const getCartsByUser = async ({ userID }) => {
  const SQLquery = {
    text: `SELECT c.cart_id, c.user_id, ci.detail_id, ci.product_id, ci.quantity, ci.price
            FROM cart c
            INNER JOIN cart_items ci ON c.cart_id = ci.cart_id
           WHERE user_id = $1`,
    values: [userID],
  };

  const response = await pool.query(SQLquery);
  return response.rows[0];
};

const createCart = async (userId) => {
  const SQLquery = {
    text: `INSERT INTO cart (user_id, status, created_at)
          VALUES ( $1, 'Ingresada', CURRENT_TIMESTAMP ) RETURNING *`,
    values: [userId],
  };
  const response = await pool.query(SQLquery);
  return response.rows[0];
};


const closeCart = async ({ cartId }) => {
  const SQLquery = {
    text: `UPDATE cart 
           SET status = 'Cerrada'
           WHERE cart_id = $1
           RETURNING *`,
    values: [userId],
  };
  const response = await pool.query(SQLquery);
  return response.rows[0];
};


const createCartItems = async ( cartId, product_id, quantity, price ) => {
    const SQLquery = {
      text: `INSERT INTO cart_items (cartId, product, quantity, price)
            VALUES ( $1 ) RETURNING *`,
      values: [ cartId, product_id, quantity, price ],
    };
    const response = await pool.query(SQLquery);
    return response.rows[0];
  };
const incrementCartItems = async ({ cartId, detailId, productId }) => {
  const SQLquery = {
    text: `UPDATE cart_items 
             SET quantity = quantity + 1
             WHERE cart_id = $1
             AND  detail_id = $2
             AND product_id = $3
             RETURNING *`,
    values: [cartId, detailId, productId ],
  };
  const response = await pool.query(SQLquery);
  return response.rows[0];
};

const decrementCartItems = async ({ cartId, detailId, productId }) => {
  const SQLquery = {
    text: `UPDATE cart_items 
            SET quantity = quantity - 1
            WHERE cart_id = $1
            AND detail_id = $2
            AND product_id = $3
            RETURNING *`,
    values: [ cartId, detailId, productId ],
  };
  const response = await pool.query(SQLquery);
  return response.rows[0];
};

export {
  getCarts,
  getCartsByUser,
  createCart,
  closeCart,
  createCartItems,
  incrementCartItems,
  decrementCartItems,
};
