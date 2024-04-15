import Joi from "joi";

//USER
export const name = Joi.string().max(100).required();
export const rut = Joi.string().max(20).required();
export const birth = Joi.date().required();
export const email = Joi.string().email().max(255).required();
export const phone = Joi.string().max(25).required();
export const password = Joi.string().max(10).required();
export const role = Joi.string().valid("admin", "user", "seller").required();
export const status = Joi.string().valid("A", "I");

//PRODUCTS
export const nameProducts = Joi.string().max(255).required();
export const description = Joi.string().allow("").max(65535);
export const price = Joi.number().required();
export const stock = Joi.number().integer().required();
export const category_id = Joi.number().integer().positive().required();
export const statusProduct = Joi.string().max(50).required();
export const user_id = Joi.number().required();
export const information = Joi.string().allow("").max(65535);
