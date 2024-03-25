import pool from "../../../../config/db/conectionDb.js";
import bcrypt from "bcryptjs";

const getUser = async () => {
  const SQLquery = {
    text: `SELECT user_id, username, birth_date, email, phone, password, role, status 
          FROM users`,
  };

  const response = await pool.query(SQLquery);
  return response.rows;
};

const getUserId = async ({ id }) => {
  const SQLquery = {
    text: `SELECT user_id, username, birth_date, email, phone, password, role, status  
           FROM users 
           WHERE user_id = $1`,
    values: [id],
  };

  const response = await pool.query(SQLquery);
  return response.rows[0];
};

const createUser = async ({
  username, birth_date, email, phone, password, role, status 
}) => {
  const hashedPassword = bcrypt.hashSync(password);
  const SQLquery = {
    text: `INSERT INTO users (username, email, phone, password, shipping_address, payment_method, role, status) 
           VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
    values: [  username, birth_date, email, phone, hashedPassword, role, status],
  };
  const response = await pool.query(SQLquery);
  return response.rows[0];
};

const updateUser = async ({ id }, { username, birth_date, email, phone, password, role, status }) => {
  const hashedPassword = bcrypt.hashSync(password);

  const SQLquery = {
    text: `UPDATE users 
             SET username = $1,
                 birth_date = $2, 
                 email = $3, 
                 phone = $4, 
                 password = $5, 
                 role = $6, 
                 status = $7
             WHERE user_id = $8 
             RETURNING *`,
    values: [username, birth_date, email, phone, hashedPassword, role, status, id],
  };
  const response = await pool.query(SQLquery);
  return response.rows[0];
};

const deleteUser = async (id) => {
  const SQLquery = {
    text: `DELETE FROM users 
             WHERE  user_id = $1 
             RETURNING *`,
    values: [id],
  };
  const response = await pool.query(SQLquery);
  if (response.rows.length === 0) {
    throw new Error("No se encontró ningún usuario con el ID proporcionado");
  }
  return response.rows[0];
};

export { getUser, getUserId, createUser, updateUser, deleteUser };
