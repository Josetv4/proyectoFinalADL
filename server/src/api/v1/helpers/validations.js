import Joi from "joi";

//USER
    export const name = {name: Joi.string().max(100).required()};
    export const userID =  {userID: Joi.number().integer().positive().required()};
    export const email = {email: Joi.string().email().max(255).required()};
    export const phone = {phone: Joi.string().max(25).required()};
    export const password = {password: Joi.string().max(10).required()};
    export const shippingAddress = {shippingAddress: Joi.string().max(255).required()};,
    export const paymentMethod = {paymentMethod: Joi.string().max(255).required()};
    export const role = {role: Joi.string().valid("admin", "user").required()};
    export const status = {status: Joi.string().valid("A", "I").required()};
//PRODUCTS
    export const nameProducts = {nameProducts: Joi.string().max(255).required()};
    export const description = {description: Joi.string().allow('').max(65535)};
    export const price = {price: Joi.number().required()};
    export const quantity = {quantity: Joi.number().integer().required()};
    export const category = {category: Joi.number().integer().positive().required()};
    export const imageProduct = {imageProduct: Joi.string().max(255)};
    export const postStatusProduct = {postStatusProduct: Joi.string().max(50).required()};    


export default validations;
