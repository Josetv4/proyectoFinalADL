import Joi from "joi";

//USER
    export const name = Joi.string().max(100).required();
    export const userID = Joi.number().integer().positive().required();
    export const email = Joi.string().email().max(255).required();
    export const phone = Joi.string().max(25).required();
    export const password = Joi.string().max(12).required();
    export const shippingAddress = Joi.string().max(255).required();
    export const paymentMethod = Joi.string().max(255).required();
    export const role = Joi.string().valid("admin", "user").required();
    export const status = Joi.string().valid("A", "I").required();
//PRODUCTS
    export const nameProducts = Joi.string().max(255).required();
    export const description = Joi.string().allow('').max(65535);
    export const price = Joi.number().required();
    export const quantity = Joi.number().integer().required();
    export const category = Joi.number().integer().positive().required();
    export const imageProduct = Joi.string().max(255);
    export const postStatusProduct = Joi.string().max(50).required();    


