import 'dotenv/config'
import jwt from 'jsonwebtoken';
import bcrypt from "bcryptjs";

import { verifyUser } from "../models/loginModel.js";
import { handleError } from '../utils/utils.js';


const loginUser = async (req, res) => {
    
    const { email, password } = req.body;
 
    try {
        const user = await verifyUser(email);
       
        if(!user){
            const searchErr = handleError("auth01")
            return res.status(400).json({ error: searchErr[0].message });
        }
        const isEqual = bcrypt.compareSync(password, user.password );

        if(!isEqual){
            const searchErr = handleError("auth02")
            return res.status(400).json({  error: searchErr[0].message });
        }
        
        const token = jwt.sign({email: user.email}, process.env.JWT_SECRET, { expiresIn: 36000 })
        return res.status(200).json({
            message: `Ingreso Exitoso, email: ${email}`,
            code: 200,
            token,
            user
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({erroresestan: err.message})
    }
}

export { loginUser };
