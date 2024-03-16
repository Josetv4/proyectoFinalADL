import pool from "../../../../config/db/conectionDb.js";
import bcrypt from "bcryptjs";

const createUser = async ({ email, password, rol, lenguage }) => {
  const hashedPassword = bcrypt.hashSync(password);

  const SQLquery = {
    text: "INSERT INTO usuarios (email, password, rol, lenguage) VALUES ($1, $2, $3, $4) RETURNING *",
    values: [email, hashedPassword, rol, lenguage],
  };
  const response = await pool.query(SQLquery);
  return response.rows[0];
};
const updateUser = async ({ email, password, rol, lenguage }) => {
    const hashedPassword = bcrypt.hashSync(password);
  
    const SQLquery = {
      text: "INSERT INTO users () VALUES ($1, $2, $3, $4) RETURNING *",
      values: [email, hashedPassword, rol, lenguage],
    };
    const response = await pool.query(SQLquery);
    return response.rows[0];
  };