import pool from "../../../../config/db/conectionDb.js";
import bcrypt from "bcryptjs";

const getUser = async () => {
  const SQLquery = {
    text: `SELECT user_id, username, rut, birth_date, email, phone, password, role, status 
          FROM users`,
  };

  const response = await pool.query(SQLquery);
  return response.rows;
};

const getUserId = async ({ id }) => {
  const SQLquery = {
    text: `SELECT user_id, username, rut, birth_date, email, phone, password, role, status  
           FROM users 
           WHERE user_id = $1`,
    values: [id],
  };

  const response = await pool.query(SQLquery);
  return response.rows[0];
};

const createUser = async ({ username, rut,  birth, email, phone, password, role, status }) => {
  const hashedPassword = bcrypt.hashSync(password);
  const SQLquery = {
    text: `INSERT INTO users (username, rut, birth_date, email, phone, password, role, status)
          VALUES ($1, $2, $3, $4, $5, $6, $7,$8) RETURNING *`,
    values: [  username, rut, birth, email, phone, hashedPassword, role, status],
  };
  console.log(SQLquery);
  const response = await pool.query(SQLquery);
  return response.rows[0];
};

const updateUser = async ({ id }, { username, rut, birth, email, phone, password, role, status }) => {
  const hashedPassword = bcrypt.hashSync(password);

  const SQLquery = {
    text: `UPDATE users 
             SET username = $1,
                 rut = $2, 
                 birth_date = $3, 
                 email = $4, 
                 phone = $5, 
                 password = $6, 
                 role = $7, 
                 status = $8
             WHERE user_id = $9 
             RETURNING *`,
    values: [username, rut, birth, email, phone, hashedPassword, role, status, id],
  };
  const response = await pool.query(SQLquery);
  return response.rows[0];
};

const deleteUser = async (id) => {
  const SQLquery = {
    text: `Update users SET status = 'X' WHERE  user_id = $1 RETURNING *`,
    values: [id],
  };
  const response = await pool.query(SQLquery);
  return response.rows[0];
};
const statusUser = async ( id, status) => {

    const SQLquery = {
    text: `Update users SET status = $1 WHERE  user_id = $2 RETURNING *`,
    values: [ status , id],
  };
  console.log(SQLquery)
  const response = await pool.query(SQLquery);
  return response.rows[0];
};

export { getUser, getUserId, createUser, updateUser, deleteUser, statusUser };
