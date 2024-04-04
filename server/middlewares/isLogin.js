import { handleError } from "../src/api/v1/utils/utils.js";
import jwt from "jsonwebtoken";

const isLogin = async (req, res, next) => {
  try {
    validateHeaders(req, res);
    const token = req.header("Authorization").split(" ")[1];
    const giveToken = await validateToken(token);
    req.user = giveToken;
    next();
  } catch (err) {
    const errorFound = handleError(err.code);
    return res
      .status(errorFound[0]?.status)
      .json({ error: errorFound[0]?.message });
  }
};

const validateToken = async (token) => {
  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    return decodedToken;
  } catch (err) {
    throw createError("auth04", "Token no válido");
  }
};

const validateHeaders = (req) => {
  if (!req.header("Authorization")) {
    throw createError("auth03", "token no encontrado");
  }
};

const createError = (code, message) => {
  const err = new Error(message);
  err.code = code;
  return err;
};
export { isLogin };