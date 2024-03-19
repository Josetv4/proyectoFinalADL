import Joi from "joi";

const categorySchema = Joi.object({
  name: Joi.string().max(100).required(),
});


const validateParametersUser = (req, res, next) => {
  const { error } = categorySchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  next();
};

export { validateParametersUser };
