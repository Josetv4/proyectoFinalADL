import Joi from "joi";
import { name,
          phone,
          email,
          password,
          shippingAddress,
          paymentMethod,
          role,
          status } from "../src/api/v1/helpers/validations.js";

const userSchema = Joi.object({
    name,
    phone,
    email,
    password,
    shippingAddress,
    paymentMethod,
    role,
    status
});


const validateParametersUser = (req, res, next) => {
  const { error } = userSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  next();
};

export { validateParametersUser };
