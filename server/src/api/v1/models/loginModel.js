import pool from "../../../../config/db/conectionDb.js";


const verifyUser = async (
    email
) => {
    
    const sqlQuery = {
        text: `SELECT * FROM Users 
                        WHERE email= $1`,
        values: [email],
    }
    const response = await pool.query(sqlQuery);
    return response.rows[0];

    
}

export { verifyUser }
