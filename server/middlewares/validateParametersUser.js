import Joi from "joi";
import { name,
          phone,
          email,
          password,
          role,
          status } from "../src/api/v1/helpers/validations.js";

const userSchema = Joi.object({
  username: Joi.string().max(100).required(),
  rut: Joi.string().max(20).required(),
  birth: Joi.date().required(),
  email: Joi.string().email().max(255).required(),
  phone: Joi.string().max(25).required(),
  password: Joi.string().max(10).required(),
  role: Joi.string().valid("admin", "user", "seller").required(),
  status: Joi.string().valid("A", "I").required(),
});


const validateParametersUser = (req, res, next) => {
  const { error } = userSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  next();
};

export { validateParametersUser };
