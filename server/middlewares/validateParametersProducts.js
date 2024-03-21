import Joi from "joi";
import { nameProduct, 
          description,
          price,
          quantity,
          category,
          imgProduct,
          postStatusProduct,
          userID 
                      } from "../src/api/v1/helpers/validations.js" 

const productSchema = Joi.object({
    nameProduct,
    description,
    price,
    quantity,
    category,
    imgProduct,
    postStatusProduct,
    userID


  // //product: Joi.array().items(Joi.object({
  //   name: Joi.string().max(255).required(),
  //   description: Joi.string().allow('').max(65535), 
  //   price: Joi.number().required(), 
  //   quantity: Joi.number().integer().required(),
  //   category: Joi.number().integer().positive().required(),
  //   image_url: Joi.string().max(255),
  //   post_status: Joi.string().max(50).required(),
  //   user_id: Joi.number().integer().positive().required() 
  //   //}))
  });


const validateParametersProducts = (req, res, next) => {
    const { error } = productSchema.validate(req.body);
  
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
  
    next();
  };
  
  export { validateParametersProducts };