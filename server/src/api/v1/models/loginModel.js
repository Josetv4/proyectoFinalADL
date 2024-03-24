import pool from "../../../../config/db/conectionDb.js";
import bcrypt from "bcryptjs";

const verifyUser = async (
    email, 
    password
) => {
    
    const sqlQuery = {
        text: `SELECT * FROM Users 
                        WHERE email= $1`,
        values: [email],
    }
    const { rows } = await pool.query(sqlQuery);

    if( rows.length === 0){
        return null;
    }
    const user =  rows[0];
    console.log(user.password);
    console.log(password);
    
    // const verifyPassword = bcrypt.compareSync(password, user.password)
  
    if (password !== user.password) {
        return null;
    }
    return user;
}

export { verifyUser }
