import Joi from "joi";

const userSchema = Joi.object({
  username: Joi.string().max(100).required(),
  email: Joi.string().email().max(255).required(),
  phone: Joi.string().max(25).required(),
  password: Joi.string().max(10).required(),
  shipping_address: Joi.string()
                       .max(255)
                       .required(),
  payment_method: Joi.string().max(100),
  role: Joi.string().valid("admin", "user").required(),
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
