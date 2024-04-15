import Joi from "joi";
import {  nameProducts, 
          description,
          price,
          stock,
          category_id,
          statusProduct,
          user_id,
          information
                      } from "../src/api/v1/helpers/validations.js"
                    

const productSchema = Joi.object({
    nameProducts,
    description,
    price,
    stock,
    category_id,
    statusProduct,
    user_id,
    information
  });


const validateParametersProducts = (req, res, next) => {
    const { error } = productSchema.validate(req.body);
  
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
  
    next();
  };
  
  export { validateParametersProducts };