import ERRORS from  "../helpers/errors.js";

const handleError = (code) => {
  return ERRORS.filter((err) => err.code == code);
}

export { handleError }