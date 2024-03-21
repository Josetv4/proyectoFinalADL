import pool from "../../../../config/db/conectionDb.js";
import bcrypt from "bcryptjs";

const verifyUser = async (
    email, 
    password
) => {
    const hashedPassword = bcrypt.hashSync(password);
    const sqlQuery = {
        text: `SELECT * FROM usuarios 
                        WHERE email= $1 
                        AND password = $2`,
        values: [email, hashedPassword],
    }
    const { rows } = await pool.query(sqlQuery);
    console.log(rows);
    return rows[0];
}

export { verifyUser }
