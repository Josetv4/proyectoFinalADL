import pool from "../../../../config/db/conectionDb.js";
import bcrypt from "bcryptjs";

const getUser = async () => {

  const SQLquery = {
    text: "SELECT user_id, username, email, phone, password, shipping_address, payment_method, role, status from users"  
   };
  
  const response = await pool.query(SQLquery);
  return response.rows;
};

const getUserId = async ( { id } ) => {

  const SQLquery = {
    text: `SELECT user_id, username, email, phone, password, shipping_address, payment_method, role, status 
           FROM users 
           WHERE user_id = $1`,
    values: [ id ],  
   };
  
  const response = await pool.query(SQLquery);
  return response.rows[0];
};

const createUser = async ({ username, email, phone, password, shipping_address, payment_method, role, status }) => {

  const hashedPassword = bcrypt.hashSync(password);
  const SQLquery = {
    text: "INSERT INTO users (username, email, phone, password, shipping_address, payment_method, role, status) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
    values: [username, email, phone, hashedPassword, shipping_address, payment_method, role, status],
  };
  const response = await pool.query(SQLquery);
  return response.rows[0];
};

const updateUser = async ( { id },  { username, email, phone, password, shipping_address, payment_method, role, status }) => {
  
    const hashedPassword = bcrypt.hashSync(password);

    const SQLquery = {
      text: "UPDATE users SET username = $1, email = $2, phone = $3, password = $4, shipping_address = $5, payment_method = $6, role = $7, status = $8 WHERE user_id = $9 RETURNING *",
      values: [ username, email, phone, hashedPassword, shipping_address, payment_method, role, status, id ],
    };
    const response = await pool.query(SQLquery);
    return response.rows[0];
  };

  const deleteUser = async (  id  ) => {
    
    const SQLquery = {
      text: `DELETE FROM users 
             WHERE  user_id = $1 
             RETURNING *`,
      values: [ id ],
    };
    const response = await pool.query(SQLquery);
    if (response.rows.length === 0) {
      throw new Error('No se encontró ningún usuario con el ID proporcionado');
    }
    return response.rows[0];
  };

  export { getUser, getUserId, createUser, updateUser,  deleteUser };