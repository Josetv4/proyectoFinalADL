import 'dotenv/config'
import jwt from 'jsonwebtoken';
import bcrypt from "bcryptjs";

import { verifyUser } from "../models/loginModel.js";
import { handleError } from '../utils/utils.js';


const loginUser = async (req, res) => {
    const { email, password } = req.body;
    console.log(`body ${req.body}`);
    try {
        const user = await verifyUser(email, password);
        if(!user){
            const searchErr = handleError("auth_01")
            return res.status(400).json({ error: searchErr[0].message });
        }
        const isEqual = bcrypt.compareSync(password, user.password);
        if(!isEqual){
            const searchErr = handleError("auth_02")
            return res.status(400).json({  error: searchErr[0].message });
        }
        
        const token = jwt.sign(user.email, process.env.JWT_SECRET, { expiresIn: 120 })
        return res.status(200).json({
            message: `Ingreso Exitoso, email: ${email}`,
            code: 200,
            token
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({error: err.message})
    }
}
export { loginUser };


