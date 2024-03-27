import Joi from "joi";
import { email, password } from "../src/api/v1/helpers/validations.js";

const categorySchema = Joi.object({
    email,
    password
});

const validateParametersLogin = (req, res, next) => {
    const { error } = categorySchema.validate(req.body);

    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    next();
};

export { validateParametersLogin };
